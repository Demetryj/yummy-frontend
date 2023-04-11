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
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  transform: translateY(${p => p.theme.spacing(152)});
  width: ${p => p.theme.spacing(167)};
  padding: ${p => p.theme.spacing(16)} ${p => p.theme.spacing(14)}
    ${p => p.theme.spacing(20)} ${p => p.theme.spacing(14)};
  background-color: ${p => p.theme.colors.lightDarckBgColor};
  border-radius: ${p => p.theme.radii.modalProfile};
  @media screen and ${p => p.theme.media.medium} {
    transform: translateY(${p => p.theme.spacing(222)});
    width: ${p => p.theme.spacing(250)};
    padding: ${p => p.theme.spacing(22)} ${p => p.theme.spacing(25)};
  }
  @media screen and ${p => p.theme.media.large} {
    transform: translateY(${p => p.theme.spacing(77)});
    margin-right: ${p => p.theme.spacing(90)};
  }
`;

export const LinkStyled = styled(Link)`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.spacing(10)};
  position: relative;
  display: block;
  text-align: center;
  text-decoration: underline;
  color: ${p => p.theme.colors.whiteTextColor};
  transform: translateY(${p => p.theme.spacing(47)});
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
  background-image: url(${registerMob}), url(${registerBottomMob});
  background-repeat: no-repeat;
  background-size: ${p => p.theme.spacing(142)}, 100%;
  background-position: 50% ${p => p.theme.spacing(43)}, bottom;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${registerMob2x}), url(${registerBottomMob});
  }
  @media screen and ${p => p.theme.media.medium} {
    background-size: ${p => p.theme.spacing(204)}, 100%;
    background-position: 50% ${p => p.theme.spacing(48)}, bottom;
    background-image: url(${registerTab}), url(${registerBottomTab});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerTab2x}), url(${registerBottomTab});
    }
  }
  @media screen and ${p => p.theme.media.large} {
    background-position: ${p => p.theme.spacing(77)} ${p => p.theme.spacing(77)},
      bottom;
    background-size: ${p => p.theme.spacing(266)}, 100%;
    background-image: url(${registerDesk}), url(${registerBottomDesk});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerDesk2x}), url(${registerBottomDesk});
    }
  } ;
`;

export const BgBottom = styled.div`
  background-image: url(${registerBottomMob});
`;
