import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { theme } from '../../styles/theme';

export const FormStyled = styled(Form)`
  /* width: 400px; */
  padding: 44px 50px;
  background-color: ${theme.colors.lightDarckBgColor};
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FieldWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const FieldStyled = styled(Field)`
  padding: 14px 12px;
  height: 45px;
  border-radius: ${theme.radii.light};
  font-size: ${theme.fontSizes.xm};
  color: ${theme.colors.whiteTextColor};
  background-color: transparent;
  border: 1px solid ${theme.colors.greyTextColor};
  border-color: ${props => props.inputColor || theme.colors.greyTextColor};
`;

export const ButtonStyled = styled.button`
  background-color: ${theme.colors.greenBgColor};
  height: 45px;
  border-radius: ${theme.radii.light};
`;
export const Title = styled.h1`
  font-size: 24px;
  color: ${theme.colors.whiteTextColor};
`;
export const ErrorMessageStyled = styled(ErrorMessage)`
  /* position: absolute; */
  font-size: ${theme.fontSizes.s};
  color: ${props => props.inputColor || 'white'};
  margin-top: 8px;
`;
