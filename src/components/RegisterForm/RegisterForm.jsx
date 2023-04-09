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
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { getColor } from 'utils/authColors';

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
        <FormBoxStyled>
          <Formik
            // validateOnChange={false}
            // validateOnBlur={false}
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
                  {/* ---------NAME-------- */}
                  <FieldStyled
                    name="name"
                    type="text"
                    placeholder="Name"
                    color={getColor(errors.name, values.name)}
                  />
                  <IconName />
                  {errors.name && (
                    <>
                      <p
                        style={{
                          color: `${getColor(errors.name, values.name)}`,
                        }}
                      >
                        ${errors.name}
                      </p>
                    </>
                  )}
                  {values.name && (
                    <IconCheck color={getColor(errors.name, values.name)} />
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
                  {errors.email && (
                    <>
                      <p
                        style={{
                          color: `${getColor(errors.email, values.email)}`,
                        }}
                      >
                        ${errors.email}
                      </p>
                    </>
                  )}
                  {values.email && (
                    <IconCheck color={getColor(errors.email, values.email)} />
                  )}
                </FieldWrapperStyled>
                {/* -------PASSWORD---------- */}
                <FieldWrapperStyled>
                  <FieldStyled
                    name="password"
                    type="password"
                    placeholder="Password"
                    color={getColor(errors.password, values.password)}
                  />
                  <IconPass />
                  {errors.password && (
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
                    </>
                  )}
                  {values.password && (
                    <IconCheck
                      color={getColor(errors.password, values.password)}
                    />
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
