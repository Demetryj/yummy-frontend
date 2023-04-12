import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  SearchForm,
  Input,
  IconMail,
  InputContainer,
} from './FooterForm.styled';
import { Box } from '../Box';
import { Button } from '../Button';
// import logoMail from 'images/mail/mail.svg';

// const placeHolder = () => {
//   return (
//     <>
//       <FiMail size={10} color="white" />
//       <p>Enter your email address</p>
//     </>
//   );
// };

// const Mail = <img src={logoMail} alt="mail" />;

// const holder = `${FiMail} Enter your email address`;

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
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
        console.log(values);
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
