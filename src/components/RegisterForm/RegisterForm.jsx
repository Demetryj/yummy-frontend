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
  BgBottom,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { getColor } from 'utils/authColors';

import sprite from 'images/registrationLogin/spriteRegister.svg';

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
      <Container>
        {/* <BgBottom></BgBottom> */}
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
                  <IconName />
                  {values.name && (
                    <>
                      <p
                        style={{
                          color: `${getColor(errors.name, values.name)}`,
                        }}
                      >
                        ${errors.name}
                      </p>
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
                  <IconEmail />
                  {values.email && (
                    <>
                      <p
                        style={{
                          color: `${getColor(errors.email, values.email)}`,
                        }}
                      >
                        ${errors.email}
                      </p>
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
                    placeholder="Password"
                    color={getColor(errors.password, values.password)}
                  />
                  <IconPass />
                  {values.password && (
                    <>
                      <p
                        style={{
                          color: `${getColor(
                            errors.password,
                            values.password
                          )}`,
                        }}
                      >
                        ${errors.password}
                      </p>
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
                  <p style={{ color: '#E74A3B' }}>${errorMessage}</p>
                )}
                <ButtonStyled type="submit">Submit</ButtonStyled>
              </FormStyled>
            )}
          </Formik>
          <LinkStyled to="/signin">Sign in</LinkStyled>
        </FormBoxStyled>
      </Container>
    </>
  );
};
