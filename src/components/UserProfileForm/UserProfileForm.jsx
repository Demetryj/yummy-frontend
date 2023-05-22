import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toggleUserInfo } from 'redux/modal';
import { updateProfile } from 'redux/auth/operations';
import { Box } from '../Box';
import {
  ProfileForm,
  Input,
  UserIcon,
  IconPencil,
  Button,
  P,
  AvaLabel,
} from './UserProfileForm.styled';
import { useAuth } from 'hooks/useAuth';

export const UserProfileForm = ({ mode }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [previw, setPreview] = useState('');

  const { user } = useAuth();
  const path = user.avatrUrl || user.avatarURL;

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
          <AvaLabel htmlFor="avatar">
            <img alt="ava" src={previw || path} />
            <Box
              width={{ xs: 24 }}
              height={{ xs: 24 }}
              bg="greenColor"
              borderRadius="50%"
              position="absolute"
              top={{ xs: 65, lg: 78 }}
              left={{ xs: 150, md: 229, lg: 218 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="whiteColor"
            >
              <P>+</P>
            </Box>
          </AvaLabel>
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
          <UserIcon mode={mode} />
          <Input
            name="name"
            type="text"
            id="newName"
            placeholder={user.name}
            mode={mode}
          />
          <IconPencil mode={mode} />
        </Box>
        <Button type="submit" mode={mode}>
          Submit
        </Button>
      </ProfileForm>
    </Formik>
  );
};
