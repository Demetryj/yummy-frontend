import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  SearchForm,
  WrapperInput,
  Input,
  // Error,
  IconMail,
  InputContainer,
  ErrorText,
} from './FooterForm.styled';
import { Box } from '../Box';
import { Button } from '../Button';

const schema = object({
  email: string().required().email('Email is not valid'),
});

export const FootForm = ({ mode }) => (
  <Box>
    <Formik
      validationSchema={schema}
      initialValues={{ email: '' }}
      // validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
      }}
    >
      {({
        errors,
        values,
        // touched,
        // handleChange,
        // handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <SearchForm>
          <WrapperInput>
            {values.email && (
              <>{errors.email && <ErrorText>{errors.email}</ErrorText>}</>
            )}
            <InputContainer>
              <IconMail />
              <Input
                type="email"
                name="email"
                placeholder={`Enter your email address`}
                // onChange={handleChange}
                // onBlur={handleBlur}
                value={values.email}
              />
            </InputContainer>
          </WrapperInput>
          <Button type="submit" disabled={isSubmitting} mode={mode}>
            Subscribe
          </Button>
        </SearchForm>
      )}
    </Formik>
  </Box>
);
