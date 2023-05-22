import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const MenuBtn = styled(HiOutlineMenuAlt2)`
  width: ${p => p.theme.spacing(14)};
  height: ${p => p.theme.spacing(14)};
  color: ${p =>
    p.mode === 'light' ? p.theme.colors.yummyColor : p.theme.colors.whiteColor};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(16)};
    height: ${p => p.theme.spacing(16)};
  }

  cursor: pointer;
`;

export const NavItem = styled(NavLink)`
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.yummyColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.mainTextColor
        : p.theme.colors.whiteTextColor};
  }

  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.greenTextColor};
  }
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(16)};
  @media screen and (${p => p.theme.media.large}) {
    display: flex;
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 100%;
  letter-spacing: -0.02em;
  cursor: pointer;

  @media screen and (${p => p.theme.media.medium}) {
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontWeights.s};
    line-height: 160%;
  }
`;

export const Paragraph = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: 170%;

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const CrossContainer = styled.div`
  padding: ${p => p.theme.spacing(4)};
  width: ${p => p.theme.spacing(16)};
  height: ${p => p.theme.spacing(16)};
  cursor: pointer;
`;

export const CloseBtn = styled(VscChromeClose)`
  width: ${p => p.theme.spacing(6.7)};
  height: ${p => p.theme.spacing(6.7)};

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.closeBtnColor
      : p.theme.colors.whiteColor};
`;
