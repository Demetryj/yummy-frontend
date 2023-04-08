import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FieldWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${p => p.theme.spacing(6)};
  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.theme.spacing(12)};
  }
`;
export const FieldStyled = styled(Field)`
  padding: ${p => p.theme.spacing(6)} ${p => p.theme.spacing(20)};
  height: 45px;
  border-radius: ${p => p.theme.radii.light};
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.whiteTextColor};
  background-color: transparent;
  border: 1px solid;
  border-color: ${props => props.color || props.theme.colors.blackTextColor};
  ::placeholder {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.whiteTextColor};
    opacity: 0.8;
    @media screen and ${p => p.theme.media.medium} {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const ButtonStyled = styled.button`
  background-color: ${p => p.theme.colors.greenBgColor};
  height: ${p => p.theme.spacing(22)};
  border-radius: ${p => p.theme.radii.light};
  margin-top: ${p => p.theme.spacing(7)};
  @media screen and ${p => p.theme.media.medium} {
    margin-top: ${p => p.theme.spacing(13)};
  }
`;
export const ButtonTemp = styled(ButtonStyled)`
  margin-top: ${p => p.theme.spacing(12)};
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.spacing(9)};
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.signin || p.theme.spacing(16)};
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
  font-size: 14px;
  line-height: 21px;
  position: relative;
  display: block;
  text-align: center;
  text-decoration: underline;
  /* color: ${p => p.theme.colors.whiteTextColor}; */
  transform: translateY(95px);
  @media screen and ${p => p.theme.media.medium} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(15px, 15px);
`;
