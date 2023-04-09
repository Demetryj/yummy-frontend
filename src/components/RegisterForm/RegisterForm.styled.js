import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import registerMob from 'images/registrationLogin/Order-food-pana-1mob.png';
import registerMob2x from 'images/registrationLogin/Order-food-pana-1mob@2x.png';
import registerTab from 'images/registrationLogin/Order-food-pana-1tabl.png';
import registerTab2x from 'images/registrationLogin/Order-food-pana-1tabl@2x.png';
import registerDesk from 'images/registrationLogin/Order-food-pana-desk.png';
import registerDesk2x from 'images/registrationLogin/Order-food-pana-desk@2x.png';
import { FiLock, FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

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
  height: ${p => p.theme.spacing(22)};
  border-radius: ${p => p.theme.radii.light};
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.whiteTextColor};
  background-color: transparent;
  border: ${p => p.theme.borders.normal};
  border-color: ${props => props.color || props.theme.colors.blackTextColor};
  ::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 21px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.whiteTextColor};
    opacity: 0.8;
    @media screen and ${p => p.theme.media.medium} {
      font-size: ${p => p.theme.fontSizes.xm};
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
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.signin || p.theme.spacing(16)};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 30px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${props => props.color};
  margin-top: ${p => p.theme.spacing(4)};
`;

export const FormBoxStyled = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  transform: translateY(305px);
  width: ${p => p.theme.spacing(167)};
  padding: ${p => p.theme.spacing(16)} ${p => p.theme.spacing(14)}
    ${p => p.theme.spacing(20)} ${p => p.theme.spacing(14)};
  background-color: ${p => p.theme.colors.lightDarckBgColor};
  border-radius: ${p => p.theme.radii.modalProfile};
  @media screen and ${p => p.theme.media.medium} {
    transform: translateY(444px);
    width: ${p => p.theme.spacing(250)};
    padding: ${p => p.theme.spacing(22)} ${p => p.theme.spacing(25)};
  }
  @media screen and ${p => p.theme.media.large} {
    transform: translateY(155px);
    margin-right: ${p => p.theme.spacing(90)};
  }
`;

export const LinkStyled = styled(Link)`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 21px;
  position: relative;
  display: block;
  text-align: center;
  text-decoration: underline;
  color: ${p => p.theme.colors.whiteTextColor};
  transform: translateY(95px);
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 24px;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(15px, 15px);
`;

export const IconName = styled(FiUser)`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(15px, 15px);
  width: ${p => p.theme.spacing(9)};
`;
export const IconEmail = styled(HiOutlineMail)`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(15px, 15px);
  width: ${p => p.theme.spacing(9)};
`;
export const IconPass = styled(FiLock)`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(15px, 15px);
  width: ${p => p.theme.spacing(9)};
`;

export const IconCheck = styled.div`
  position: absolute;
  right: ${p => p.theme.spacing(9)};
  width: ${p => p.theme.spacing(9)};
  height: ${p => p.theme.spacing(9)};
  background-color: ${props => props.color};
  transform: translate(0, 15px);
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: ${p => p.theme.colors.darckBgColor}; */
  background-image: url(${registerMob});
  background-repeat: no-repeat;
  background-size: ${p => p.theme.spacing(142)};
  background-position: 50% ${p => p.theme.spacing(43)};
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${registerMob2x});
  }
  @media screen and ${p => p.theme.media.medium} {
    background-size: ${p => p.theme.spacing(204)};
    background-position: 50% ${p => p.theme.spacing(48)};
    background-image: url(${registerTab});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerTab2x});
    }
  }
  @media screen and ${p => p.theme.media.large} {
    background-position: ${p => p.theme.spacing(77)} ${p => p.theme.spacing(77)};
    background-size: ${p => p.theme.spacing(266)};
    background-image: url(${registerDesk});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerDesk2x});
    }
  }
`;
