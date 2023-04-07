import React from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import { SearchForm, Label, Input, Error } from './FooterForm.styled';
import { Box } from '../Box';
import { Button } from '../Button';
import { FiMail } from 'react-icons/fi';

// const placeHolder = () => {
//   return (
//     <>
//       <FiMail size={10} color="white" />
//       <p>Enter your email address</p>
//     </>
//   );
// };

// const holder = placeHolder();

export const FootForm = () => (
  <Box
  // display="flex"
  // flexDirection="column"
  // alignItems="flex-start"
  // p={0}
  // gap={8}
  >
    <Formik
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        /* and other goodies */
      }) => (
        <SearchForm onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          {errors.email && touched.email && errors.email}

          <Button type="submit" disabled={isSubmitting}>
            Subscribe
          </Button>
        </SearchForm>
      )}
    </Formik>
  </Box>
);
