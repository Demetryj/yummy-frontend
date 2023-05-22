import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { BiUser } from 'react-icons/bi';
import { HiOutlinePencil } from 'react-icons/hi';

export const ProfileForm = styled(Form)`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteColor};
  opacity: 0.8;
  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 27px;
  }

  border: 1px solid;
  border-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteColor};
  width: 100%;
  height: 48px;
  border-radius: ${p => p.theme.radii.light};
  outline: none;
  height: ${p => p.theme.spacing(24)};
  margin-bottom: ${p => p.theme.spacing(12)};
  padding-left: 35px;
  @media screen and (${p => p.theme.media.medium}) {
    padding-left: 47px;
    margin-bottom: 32px;
  }
  @media screen and (${p => p.theme.media.large}) {
    height: 59px;
  }
  ::placeholder {
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 21px;
    letter-spacing: -0.02em;
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.mainTextColor
        : p.theme.colors.whiteColor};
    opacity: 0.8;
    @media screen and (${p => p.theme.media.medium}) {
      font-size: ${p => p.theme.fontSizes.xm};
      line-height: 27px;
    }
  }
`;

export const AvaLabel = styled.label`
  :hover {
    cursor: pointer;
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  color: red;
  top: 49px;
  @media screen and (${p => p.theme.media.medium}) {
    top: 50px;
  }
  @media screen and (${p => p.theme.media.large}) {
    top: 63px;
  }
`;

export const UserIcon = styled(BiUser)`
  width: 18px;
  height: 18px;
  opacity: 0.8;
  position: absolute;
  left: 13px;
  top: 16px;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteColor};

  @media screen and (${p => p.theme.media.medium}) {
    width: 24px;
    height: 24px;
    left: 18px;
    top: 12px;
  }
  @media screen and (${p => p.theme.media.large}) {
    top: 18px;
  }
`;

export const IconPencil = styled(HiOutlinePencil)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 18px;
  right: 15px;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteColor};

  @media screen and (${p => p.theme.media.medium}) {
    width: 19px;
    height: 19px;
    top: 16px;
  }
  @media screen and (${p => p.theme.media.large}) {
    top: 20px;
  }
`;

export const P = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 21px;
  padding-bottom: 21px;
  gap: 8px;

  width: 100%;
  height: 49px;
  left: 24px;
  top: 246px;

  background-color: ${p => p.theme.colors.greenBgColor};
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${p => p.theme.colors.whiteColor};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yummyColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 16px;
  }

  @media screen and (${p => p.theme.media.large}) {
    height: 59px;
  }
`;
