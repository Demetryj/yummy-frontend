import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  FieldWrapperStyled,
  FormStyled,
  ButtonStyled,
  FormBoxStyled,
  Title,
  Container,
  IconEmail,
  ErrorText,
  IconCheck,
  IconPass,
  LinkStyled,
  WrapperRegister,
  Image,
} from '../RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';
import { FieldStyled } from '../RegisterForm/RegisterForm.styled';
import { useAuth } from 'hooks/useAuth';
import { getColor } from 'utils/authColors';
import sprite from 'images/registrationLogin/spriteRegister.svg';
import { actionErrRefr } from 'redux/auth/actionErrRefr';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const signinSchema = object({
  email: string().required(),
  password: string().min(6).required(),
});

export const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useAuth();
  const { errorMessage } = useAuth();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  });

  const handleSubmit = (values, actions) => {
    dispatch(signIn(values));
    actions.resetForm();
  };

  const handleClick = () => {
    dispatch(actionErrRefr);
  };
  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <WrapperRegister>
          <Image />
          <FormBoxStyled>
            <Formik
              validationSchema={signinSchema}
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={handleSubmit}
            >
              {({ errors, values }) => (
                <FormStyled autoComplete="off">
                  <Title>Sign In</Title>
                  <FieldWrapperStyled>
                    <FieldStyled
                      name="email"
                      type="email"
                      placeholder="email"
                      color={getColor(errors.email, values.email)}
                    />
                    <IconEmail color={getColor(errors.email, values.email)} />
                    {values.email && (
                      <>
                        {errors.email && (
                          <ErrorText
                            color={getColor(errors.email, values.email)}
                          >
                            {errors.email}
                          </ErrorText>
                        )}

                        <IconCheck color={getColor(errors.email, values.email)}>
                          <svg>
                            <use
                              href={`${sprite}${getColor(
                                errors.email,
                                values.email
                              )}`}
                            ></use>
                          </svg>
                        </IconCheck>
                      </>
                    )}
                  </FieldWrapperStyled>
                  <FieldWrapperStyled>
                    <FieldStyled
                      name="password"
                      type="password"
                      placeholder="password"
                      color={getColor(errors.password, values.password)}
                    />
                    <IconPass
                      color={getColor(errors.password, values.password)}
                    />
                    {values.password && (
                      <>
                        {errors.password && (
                          <ErrorText
                            color={getColor(errors.password, values.password)}
                          >
                            {errors.password}
                          </ErrorText>
                        )}

                        <IconCheck
                          color={getColor(errors.password, values.password)}
                        >
                          <svg>
                            <use
                              href={`${sprite}${getColor(
                                errors.password,
                                values.password
                              )}`}
                            ></use>
                          </svg>
                        </IconCheck>
                      </>
                    )}
                  </FieldWrapperStyled>
                  {errorMessage && (
                    <p style={{ color: '#E74A3B' }}>{errorMessage}</p>
                  )}
                  <ButtonStyled type="submit">Submit</ButtonStyled>
                </FormStyled>
              )}
            </Formik>
            <LinkStyled to="/register" onClick={handleClick}>
              Registration
            </LinkStyled>
          </FormBoxStyled>
        </WrapperRegister>
      </Container>
    </>
  );
};
