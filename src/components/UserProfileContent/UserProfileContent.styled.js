import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

export const Cross = styled(RxCross2)`
  position: absolute;
  top: -18px;
  right: -12px;
  width: 20px;
  height: 20px;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.closeBtnColor
      : p.theme.colors.whiteColor};
  cursor: pointer;

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    width: 24px;
    height: 24px;
    top: -16px;
    right: -9px;
  }
  @media screen and (${p => p.theme.media.large}) {
    top: -36px;
    right: -32px;
  }
`;

export const UserIcon = styled(FiUser)`
  width: 40px;
  height: 40px;
  color: ${p => p.theme.colors.textAreaBg};
  @media screen and (${p => p.theme.media.large}) {
    width: 47px;
    height: 47px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: ${p => p.theme.radii.light};
  outline: none;
  height: ${p => p.theme.spacing(24)};
  margin-bottom: ${p => p.theme.spacing(12)};
  margin-top: ${p => p.theme.spacing(27)};
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
`;
