import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';
import { FiLock, FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import registerMob from 'images/registrationLogin/Order-food-pana-1mob.png';
import registerMob2x from 'images/registrationLogin/Order-food-pana-1mob@2x.png';
import registerTab from 'images/registrationLogin/Order-food-pana-1tabl.png';
import registerTab2x from 'images/registrationLogin/Order-food-pana-1tabl@2x.png';
import registerDesk from 'images/registrationLogin/Order-food-pana-desk.png';
import registerDesk2x from 'images/registrationLogin/Order-food-pana-desk@2x.png';
import registerBottomMob from 'images/registrationLogin/auth-bg-mob.png';
import registerBottomTab from 'images/registrationLogin/auth-bg-tab.png';
import registerBottomDesk from 'images/registrationLogin/auth-bg-desk.png';

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
  padding: 0 ${p => p.theme.spacing(20)};
  height: ${p => p.theme.spacing(22)};
  border-radius: ${p => p.theme.radii.light};
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.whiteTextColor};
  background-color: transparent;
  border: ${p => p.theme.borders.normal};
  border-color: ${props => props.color || props.theme.colors.blackTextColor};
  :hover {
    border-color: #ffffff;
  }
  ::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.spacing(10)};
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.whiteTextColor};
    opacity: 0.8;
    @media screen and ${p => p.theme.media.medium} {
      font-size: ${p => p.theme.fontSizes.xm};
      line-height: ${p => p.theme.spacing(13)};
    }
  }
`;

export const ButtonStyled = styled.button`
  background-color: ${p => p.theme.colors.greenBgColor};
  height: ${p => p.theme.spacing(22)};
  border-radius: ${p => p.theme.radii.light};
  margin-top: ${p => p.theme.spacing(7)};
  :hover {
    color: ${p => p.theme.colors.whiteTextColor};
  }
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
  line-height: ${p => p.theme.spacing(14)};
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.signin || p.theme.spacing(16)};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.spacing(15)};
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${props => props.color};
  margin-top: ${p => p.theme.spacing(4)};
`;

export const ErrorText = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${props => props.color};
  margin-top: ${p => p.theme.spacing(4)};
`;

export const FormBoxStyled = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: -32px;
  width: ${p => p.theme.spacing(167)};
  padding: ${p => p.theme.spacing(16)} ${p => p.theme.spacing(14)}
    ${p => p.theme.spacing(20)} ${p => p.theme.spacing(14)};
  background-color: ${p => p.theme.colors.lightDarckBgColor};
  border-radius: ${p => p.theme.radii.modalProfile};
  @media screen and ${p => p.theme.media.medium} {
    margin-top: -12px;
    width: ${p => p.theme.spacing(250)};
    padding: ${p => p.theme.spacing(22)} ${p => p.theme.spacing(25)};
  }
  @media screen and ${p => p.theme.media.large} {
    /* margin-right: ${p => p.theme.spacing(90)}; */
    margin-top: 0;
  }
`;

export const LinkStyled = styled(Link)`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.spacing(10)};
  position: absolute;
  display: block;
  text-align: center;
  text-decoration: underline;
  color: ${p => p.theme.colors.whiteTextColor};
  left: 50%;
  transform: translate(-50%, ${p => p.theme.spacing(33)});
  :hover {
    color: ${p => p.theme.colors.greenBgColor};
  }
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.spacing(12)};
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(${p => p.theme.spacing(7)}, ${p => p.theme.spacing(7)});
`;

export const IconName = styled(FiUser)`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(${p => p.theme.spacing(7)}, ${p => p.theme.spacing(7)});
  width: ${p => p.theme.spacing(9)};
`;
export const IconEmail = styled(HiOutlineMail)`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(${p => p.theme.spacing(7)}, ${p => p.theme.spacing(7)});
  width: ${p => p.theme.spacing(9)};
`;
export const IconPass = styled(FiLock)`
  position: absolute;
  color: ${p => p.theme.colors.whiteTextColor};
  opacity: 0.8;
  transform: translate(${p => p.theme.spacing(7)}, ${p => p.theme.spacing(7)});
  width: ${p => p.theme.spacing(9)};
`;

export const IconCheck = styled.div`
  right: ${p => p.theme.spacing(7)};
  width: ${p => p.theme.spacing(9)};
  height: ${p => p.theme.spacing(9)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${p => p.theme.spacing(7)};
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${registerBottomMob});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${registerBottomMob});
  }
  @media screen and ${p => p.theme.media.medium} {
    background-image: url(${registerBottomTab});
  }
  @media screen and ${p => p.theme.media.large} {
    background-image: url(${registerBottomDesk});
  }
`;

export const Image = styled.div`
  width: ${p => p.theme.spacing(142)};
  height: ${p => p.theme.spacing(125)};
  margin-left: auto;
  margin-right: auto;
  background-image: url(${registerMob});
  background-repeat: no-repeat;
  background-size: 100%;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${registerMob2x});
  }
  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(205)};
    height: ${p => p.theme.spacing(180)};
    background-image: url(${registerTab});
    background-size: ${p => p.theme.spacing(204)};
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerTab2x});
    }
  }
  @media screen and ${p => p.theme.media.large} {
    width: ${p => p.theme.spacing(266)};
    height: ${p => p.theme.spacing(234)};
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

export const WrapperRegister = styled.div`
  max-width: ${p => p.theme.spacing(573)};
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.spacing(43)};
  @media screen and ${p => p.theme.media.medium} {
    padding-top: ${p => p.theme.spacing(48)};
  }
  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(77)};
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spacing(57)};
  }
`;
