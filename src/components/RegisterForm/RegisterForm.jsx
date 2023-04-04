import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { FormStyled } from './RegisterForm.styled';

const registerSchema = object({
  name: string().min(5).required('yup!'),
  email: string().required().email('yup!'),
  password: string().required(),
});

export const RegisterForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <>
      <h1>Registration</h1>
      <Formik
        validationSchema={registerSchema}
        initialValues={{ name: 'asd', email: 'xcv@g.g', password: 'pass' }}
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
