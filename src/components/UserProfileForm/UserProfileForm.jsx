import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { toggleUserInfo } from '../../redux/modal';
import { Box } from '../Box';
import {
  Form,
  Label,
  UserIcon,
  Input,
  IconPencil,
  P,
  Button,
} from './UserProfileForm.styled';

export const UserProfileForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
    },

    onSubmit: values => {
      console.log(values);
      dispatch(toggleUserInfo());
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* <Label htmlFor="name">Name</Label> */}
      <Box display="flex" position="relative">
        <UserIcon />
        <Input
          id="name"
          name="name"
          type="name"
          placeholder="User"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <IconPencil />
      </Box>

      <Button type="submit">Save changes</Button>
    </Form>
  );
};
