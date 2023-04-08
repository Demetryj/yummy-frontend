import React from 'react';
import { Formik } from 'formik';
import { SearchForm, Input, Error } from './FooterForm.styled';
import { Box } from '../Box';
import { Button } from '../Button';
import { FiMail } from 'react-icons/fi';
import logoMail from '../../images/mail/mail.svg';

// const placeHolder = () => {
//   return (
//     <>
//       <FiMail size={10} color="white" />
//       <p>Enter your email address</p>
//     </>
//   );
// };

const mail = <img src={logoMail} alt="mail" />;

// const holder = `${FiMail} Enter your email address`;

export const FootForm = () => (
  <Box>
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
          <Input
            type="email"
            name="email"
            placeholder={`Enter your email address`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            style={
              {
                // backgroundColor: 'red',
                // borderColor: '#fafafa',
                // color: 'white',
              }
            }
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
