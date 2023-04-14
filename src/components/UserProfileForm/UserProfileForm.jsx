import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { toggleUserInfo } from '../../redux/modal';

import { Box } from '../Box';
import { Label, Input, P, Button } from './UserProfileForm.styled';

export const UserProfileForm = () => {
  const dispatch = useDispatch();
  // dispatch(toggleUserInfo());

  const formik = useFormik({
    initialValues: {
      name: '',
    },

    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Save changes</button>
    </form>
  );
};
