import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  SearchForm,
  Input,
  // Error,
  IconMail,
  InputContainer,
} from './FooterForm.styled';
import { Box } from '../Box';
import { Button } from '../Button';

const Schema = object({
  email: string().required().email('Email is not valid'),
});

export const FootForm = () => (
  <Box>
    <Formik
      validationSchema={Schema}
      initialValues={{ email: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // console.log(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <SearchForm onSubmit={handleSubmit}>
          <InputContainer>
            <IconMail />
            <Input
              type="email"
              name="email"
              placeholder={`Enter your email address`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            {errors.email && touched.email && errors.email}
          </InputContainer>
          <Button type="submit" disabled={isSubmitting}>
            Subscribe
          </Button>
        </SearchForm>
      )}
    </Formik>
  </Box>
);
