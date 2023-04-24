import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  FormStyled,
  FieldStyled,
  ButtonStyled,
  Title,
  FieldWrapperStyled,
  FormBoxStyled,
  LinkStyled,
  Container,
  IconName,
  IconEmail,
  IconPass,
  IconCheck,
  // BgBottom,
  ErrorText,
  Image,
  WrapperRegister,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { getColor } from 'utils/authColors';
import { getCharacterValidationError } from 'utils/getCharacterValidationError';

import sprite from 'images/registrationLogin/spriteRegister.svg';
import { Loader } from 'components/Loader';
import { actionErrRefr } from 'redux/auth/actionErrRefr';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const registerSchema = object({
  name: string().min(2).max(25).required(),
  email: string().required().email('Email is not valid'),
  password: string()
    .min(6)
    .required()
    .matches(/[0-9]/, getCharacterValidationError('digit'))
    .matches(/[a-z]/, getCharacterValidationError('lowercase'))
    .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useAuth();
  const { errorMessage } = useAuth();
  const { isLoggedIn } = useAuth();
  const { isRegistered } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

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
            {!isRegistered ? (
              <Formik
                validationSchema={registerSchema}
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                }}
                onSubmit={handleSubmit}
              >
                {({ errors, values }) => (
                  <FormStyled autoComplete="off">
                    <Title>Registration</Title>
                    <FieldWrapperStyled>
                      <FieldStyled
                        name="name"
                        type="text"
                        placeholder="Name"
                        color={getColor(errors.name, values.name)}
                      />
                      <IconName color={getColor(errors.name, values.name)} />
                      {values.name && (
                        <>
                          {errors.name && (
                            <ErrorText
                              color={getColor(errors.name, values.name)}
                            >
                              {errors.name}
                            </ErrorText>
                          )}

                          <IconCheck color={getColor(errors.name, values.name)}>
                            <svg>
                              <use
                                href={`${sprite}${getColor(
                                  errors.name,
                                  values.name
                                )}`}
                              ></use>
                            </svg>
                          </IconCheck>
                        </>
                      )}
                    </FieldWrapperStyled>
                    <FieldWrapperStyled>
                      <FieldStyled
                        name="email"
                        type="email"
                        placeholder="Email"
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

                          <IconCheck
                            color={getColor(errors.email, values.email)}
                          >
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
                        placeholder="Password"
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
            ) : (
              <Title>Please verify your email</Title>
            )}
            {!isRegistered && (
              <LinkStyled to="/signin" onClick={handleClick}>
                Sign in
              </LinkStyled>
            )}
          </FormBoxStyled>
        </WrapperRegister>
      </Container>
    </>
  );
};
