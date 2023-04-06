import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';
import {
  FieldWrapperStyled,
  FormStyled,
  ButtonStyled,
  FormBoxStyled,
  Title,
  ButtonTemp,
} from '../RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';

import { logout } from '../../redux/auth/operations';
import { FieldStyled } from '../RegisterForm/RegisterForm.styled';

console.log();

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

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <FormBoxStyled>
        <Title>Signin</Title>
        <Formik
          validationSchema={signinSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          <FormStyled>
            <FieldWrapperStyled>
              <FieldStyled name="email" type="email" placeholder="email" />
              <ErrorMessage name="email" />
            </FieldWrapperStyled>
            <FieldWrapperStyled>
              <FieldStyled
                name="password"
                type="password"
                placeholder="password"
              />
              <ErrorMessage name="password" />
            </FieldWrapperStyled>
            <ButtonStyled type="submit">Submit</ButtonStyled>
          </FormStyled>
        </Formik>
        <ButtonTemp type="button" onClick={onLogout}>
          temp log out
        </ButtonTemp>
        <Link to="/register">Registration</Link>
      </FormBoxStyled>
    </>
  );
};
