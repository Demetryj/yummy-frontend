import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { toggleAvatarUpdate } from '../../redux/modal';
import { passAvatar } from '../../redux/avatar';

export const AvatarUpdateForm = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleAvatarUpdate());

  const initialValues = {
    path: '',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(passAvatar(values));
    setSubmitting(false);
    resetForm();
    handleClose();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field
          name="path"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
        />
        <ErrorMessage component="div" name="path" />
        <button type="submit">Confirm your choice!</button>
      </Form>
    </Formik>
  );
};
