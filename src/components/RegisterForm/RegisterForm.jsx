import { Formik, Field, Form } from 'formik';
import { object, string } from 'yup';
import {
  FormStyled,
  FieldStyled,
  ButtonStyled,
  ErrorMessageStyled,
  Title,
  FieldWrapperStyled,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';

const registerSchema = object({
  name: string().min(5).required('yup!'),
  email: string().required().email('yup!'),
  password: string().required(),
});

export const RegisterForm = () => {
  const [validationColor, setColor] = useState('white');

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    // actions.resetForm();
  };

  return (
    <>
      <Formik
        validationSchema={registerSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <Title>Registration</Title>
          <FieldWrapperStyled>
            <i>ssss</i>
            <FieldStyled
              name="name"
              type="text"
              placeholder="Name"
              // inputColor={validationColor}
            />
            <ErrorMessageStyled
              name="name"
              component="span"
              inputColor="green"
            />
          </FieldWrapperStyled>
          <FieldWrapperStyled>
            <FieldStyled
              name="email"
              type="email"
              placeholder="Email"
              // inputColor="green"
            />
            <ErrorMessageStyled
              name="email"
              component="span"
              // inputColor="green"
            />
          </FieldWrapperStyled>
          <FieldWrapperStyled>
            <FieldStyled
              name="password"
              type="password"
              placeholder="Password"
              // inputColor="green"
            />
            <ErrorMessageStyled
              name="password"
              component="span"
              // inputColor="green"
            ></ErrorMessageStyled>
          </FieldWrapperStyled>
          <ButtonStyled type="submit">Submit</ButtonStyled>
        </FormStyled>
      </Formik>
    </>
  );
};
