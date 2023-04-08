import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

export const FormStyled = styled(Form)`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const FieldWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 12px;
`;
export const FieldStyled = styled(Field)`
  padding: 14px 12px;
  height: 45px;
  border-radius: ${p => p.theme.radii.light};
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.whiteTextColor};
  background-color: transparent;
  border: 1px solid;
  border-color: ${props => props.color || 'black'};
`;

export const ButtonStyled = styled.button`
  background-color: ${p => p.theme.colors.greenBgColor};
  height: 45px;
  border-radius: ${p => p.theme.radii.light};
`;
export const ButtonTemp = styled(ButtonStyled)`
  margin-top: 25px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    font-size: 28px;
    line-height: 30px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${props => props.color};
  margin-top: 8px;
`;

export const FormBoxStyled = styled.div`
  margin: 0 auto;
  width: 335px;
  padding: 32px 28px 40px 28px;
  background-color: ${p => p.theme.colors.lightDarckBgColor};
  border-radius: 30px;
  @media screen and ${p => p.theme.media.medium} {
    width: 500px;
    padding: 44px 50px;
  }
`;

export const LinkStyled = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  position: relative;
  display: block;
  text-align: center;
  text-decoration: underline;
  /* color: ${p => p.theme.colors.whiteTextColor}; */
  transform: translateY(95px);
`;
