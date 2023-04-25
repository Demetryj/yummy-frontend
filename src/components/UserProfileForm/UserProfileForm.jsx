import React from 'react';
import { Field, Formik, Form } from 'formik';
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

import { useAuth } from 'hooks/useAuth';

export const UserProfileForm = () => {
  const dispatch = useDispatch();
  const [file, setFile] = React.useState();

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
    // for (let property of formData.entries()) {
    //   console.log(property[0], property[1]);
    // }
    dispatch(updateProfile(formData));
    setSubmitting(false);
    resetForm();
    dispatch(toggleUserInfo());
  };

  const uploadFile = event => {
    if (!event.target.files?.length) return;
    const fileReader = new FileReader();
    const file = event.target.files[0];
    console.log(file);
    setFile(file);
    // fileReader.readAsDataURL(file);

    // fileReader.onloadend = () => {
    //   const content = fileReader.result;
    //   if (content) {
    //     setFile(content);
    //   }
    // };
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="avatar">
          <img alt="ava" src={path} />
        </label>

        <Input
          name="avatar"
          id="avatar"
          type="file"
          onChange={uploadFile}
          style={{ display: 'none' }}
        />
        <Input name="name" type="text" id="newName" placeholder="entername" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
