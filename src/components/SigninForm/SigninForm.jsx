import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { FormStyled } from '../RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';

const signinSchema = object({
  email: string().required().email('yup!'),
  password: string().required(),
});

export const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(signIn(values));
    // actions.resetForm();
  };

  return (
    <>
      <h1>Signin</h1>
      <Formik
        validationSchema={signinSchema}
        initialValues={{
          email: 'lytvyn@mail.com',
          password: '12345678',
        }}
        onSubmit={handleSubmit}
      >
        <FormStyled>
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
