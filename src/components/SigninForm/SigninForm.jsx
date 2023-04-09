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
  ErrorMessageStyled,
} from '../RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';

import { logout } from '../../redux/auth/operations';
import { FieldStyled } from '../RegisterForm/RegisterForm.styled';
import { useAuth } from 'hooks/useAuth';
import { getColor } from 'utils/authColors';

console.log();

const signinSchema = object({
  email: string().required().email(),
  password: string().min(6).required(),
});

export const SigninForm = () => {
  const dispatch = useDispatch();

  const { isLoading } = useAuth();

  const handleSubmit = (values, actions) => {
    dispatch(signIn(values));
    // actions.resetForm();
  };

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      {isLoading && <p>component loading</p>}
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
          {({ errors, values }) => (
            <FormStyled>
              <FieldWrapperStyled>
                <FieldStyled
                  name="email"
                  type="email"
                  placeholder="email"
                  color={getColor(errors.email, values.email)}
                />
                <ErrorMessageStyled
                  component="span"
                  name="email"
                  color={getColor(errors.email, values.email)}
                />
              </FieldWrapperStyled>
              <FieldWrapperStyled>
                <FieldStyled
                  name="password"
                  type="password"
                  placeholder="password"
                  color={getColor(errors.password, values.password)}
                />
                <ErrorMessageStyled
                  component="span"
                  name="password"
                  color={getColor(errors.password, values.password)}
                />
              </FieldWrapperStyled>
              <ButtonStyled type="submit">Submit</ButtonStyled>
            </FormStyled>
          )}
        </Formik>
        <ButtonTemp type="button" onClick={onLogout}>
          temp log out
        </ButtonTemp>
        <Link to="/register">Registration</Link>
      </FormBoxStyled>
    </>
  );
};
