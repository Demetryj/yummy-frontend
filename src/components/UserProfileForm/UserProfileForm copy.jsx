import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toggleUserInfo } from '../../redux/modal';
import { updateProfile } from 'redux/auth/operations';
import { Box } from '../Box';
import {
  ProfileForm,
  Input,
  Error,
  UserIcon,
  IconPencil,
  Button,
} from './UserProfileForm.styled';

export const UserProfileForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(updateProfile(values));
    setSubmitting(false);
    resetForm();
    dispatch(toggleUserInfo());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <ProfileForm>
        {/* <Label htmlFor="name">Name</Label> */}
        <Box>
          {/* <Input name="avatar" type="file" placeholder="User" />
            <Error component="div" name="avatar" /> */}
        </Box>
        <Box display="flex" position="relative">
          <UserIcon />
          <Input name="name" type="text" placeholder="User" />
          <Error component="div" name="name" />
          <IconPencil />
        </Box>
        <Button type="submit">Save changes</Button>
      </ProfileForm>
    </Formik>
  );
};
