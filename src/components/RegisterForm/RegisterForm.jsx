import { ErrorMessage, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';
import {
  FormStyled,
  FieldStyled,
  ButtonStyled,
  ErrorMessageStyled,
  Title,
  FieldWrapperStyled,
  FormBoxStyled,
} from './RegisterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const registerSchema = object({
  name: string().required(),
  email: string().required().email(),
  password: string().min(6).required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const { isLoading } = useAuth();
  const { errorMessage } = useAuth();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <>
      {isLoading && <p>component loading</p>}
      <FormBoxStyled>
        <Formik
          validationSchema={registerSchema}
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          <FormStyled autoComplete="off">
            <Title>Registration</Title>
            <FieldWrapperStyled>
              <FieldStyled name="name" type="text" placeholder="Name" />

              <ErrorMessageStyled name="name" />
            </FieldWrapperStyled>
            <FieldWrapperStyled>
              <FieldStyled
                name="email"
                type="email"
                placeholder="Email"
                // inputColor="green"
              />
              <ErrorMessageStyled name="email" />
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
                // component="span"
                // inputColor="green"
              ></ErrorMessageStyled>
            </FieldWrapperStyled>
            {errorMessage && <p>${errorMessage}</p>}
            <ButtonStyled type="submit">Submit</ButtonStyled>
          </FormStyled>
        </Formik>
        <Link to="/signin">Sign in</Link>
      </FormBoxStyled>
    </>
  );
};
