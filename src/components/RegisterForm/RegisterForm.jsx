import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { FormStyled } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const registerSchema = object({
  name: string().min(5).required('yup!'),
  email: string().required().email('yup!'),
  password: string().required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    // actions.resetForm();
  };

  return (
    <>
      <h1>Registration</h1>
      <Formik
        validationSchema={registerSchema}
        initialValues={{
          name: 'lytvyn',
          email: 'lytvyn@mail.com',
          password: '12345678',
        }}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <button type="submit">Submit</button>
        </FormStyled>
      </Formik>
    </>
  );
};
