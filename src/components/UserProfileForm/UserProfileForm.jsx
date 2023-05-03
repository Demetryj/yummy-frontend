import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toggleUserInfo } from '../../redux/modal';
import { updateProfile } from 'redux/auth/operations';
import { Box } from '../Box';
import {
  ProfileForm,
  Input,
  UserIcon,
  IconPencil,
  Button,
} from './UserProfileForm.styled';

import { useAuth } from 'hooks/useAuth';

export const UserProfileForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [previw, setPreview] = useState('');

  const { user } = useAuth();
  const path = user.avatarURL;

  const initialValues = {
    avatar: '',
    name: '',
  };

  const validationSchema = Yup.object({
    avatar: Yup.mixed(),
    name: Yup.string(),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    let formData = new FormData();
    formData.append('name', values.name);
    formData.append('avatar', file);
    dispatch(updateProfile(formData));
    setSubmitting(false);
    resetForm();
    dispatch(toggleUserInfo());
  };

  const uploadFile = event => {
    if (!event.target.files?.length) return;
    const file = event.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setFile(file);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <ProfileForm>
        <Box
          width={{ xs: 88, lg: 103 }}
          height={{ xs: 88, lg: 103 }}
          mb={{ xs: 54, md: 50, lg: 52 }}
          borderRadius="50%"
          overflow="hidden"
          bg="#D9D9D9"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <label htmlFor="avatar">
            <img alt="ava" src={previw || path} />
          </label>
        </Box>
        <Box>
          <Input
            name="avatar"
            id="avatar"
            type="file"
            onChange={uploadFile}
            style={{ display: 'none' }}
          />
        </Box>
        <Box display="flex" position="relative" width="100%">
          <UserIcon />
          <Input name="name" type="text" id="newName" placeholder="entername" />
          <IconPencil />
        </Box>
        <Button type="submit">Submit</Button>
      </ProfileForm>
    </Formik>
  );
};
