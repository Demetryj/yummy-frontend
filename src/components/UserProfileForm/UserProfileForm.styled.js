import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { FiUser } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';

export const ProfileForm = styled(Form)`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  border: 1px solid;
  border-color: rgba(35, 38, 42, 0.3);
  width: 100%;
  height: 48px;
  border-radius: ${p => p.theme.radii.light};
  outline: none;
  height: ${p => p.theme.spacing(24)};
  margin-bottom: ${p => p.theme.spacing(12)};
  padding-left: 35px;
  @media screen and ${p => p.theme.media.medium} {
    padding-left: 47px;
    margin-bottom: 32px;
  }
  @media screen and ${p => p.theme.media.large} {
    height: 59px;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #23262a;
    opacity: 0.8;
    @media screen and ${p => p.theme.media.medium} {
      font-size: 18px;
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
  @media screen and ${p => p.theme.media.medium} {
    top: 50px;
  }
  @media screen and ${p => p.theme.media.large} {
    top: 63px;
  }
`;

export const UserIcon = styled(FiUser)`
  width: 18px;
  height: 18px;
  opacity: 0.8;
  position: absolute;
  left: 13px;
  top: 16px;
  @media screen and ${p => p.theme.media.medium} {
    width: 24px;
    height: 24px;
    left: 18px;
    top: 12px;
  }
  @media screen and ${p => p.theme.media.large} {
    width: 24px;
    height: 24px;
    left: 18px;
    top: 18px;
  }
`;

export const IconPencil = styled(HiOutlinePencil)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 18px;
  right: 15px;
  @media screen and ${p => p.theme.media.medium} {
    width: 19px;
    height: 19px;
    top: 16px;
  }
  @media screen and ${p => p.theme.media.large} {
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

  background: #8baa36;
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #fafafa;

  @media screen and ${p => p.theme.media.medium} {
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 16px;
  }

  @media screen and ${p => p.theme.media.large} {
    height: 59px;
  }
`;
