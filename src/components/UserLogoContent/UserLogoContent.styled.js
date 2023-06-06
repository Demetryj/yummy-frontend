import styled from 'styled-components';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

export const EditButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  margin-right: auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteColor};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenColor};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: ${p => p.theme.spacing(62.5)};
  height: ${p => p.theme.spacing(21.5)};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(69)};
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${p => p.theme.colors.greenBgColor};

  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  gap: ${p => p.theme.spacing(2)};

  color: ${p => p.theme.colors.whiteTextColor};
  border-radius: 35px 70px;

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yummyColor};
  }

  &:hover > svg,
  &:focus > svg {
    color: ${p => p.theme.colors.yummyColor};
  }
`;

export const Arrow = styled(HiOutlineArrowSmRight)`
  width: ${p => p.theme.spacing(9)};
  height: ${p => p.theme.spacing(9)};
  color: ${p => p.theme.colors.whiteColor};
  transition: ${p => p.theme.transitions.main};
`;
