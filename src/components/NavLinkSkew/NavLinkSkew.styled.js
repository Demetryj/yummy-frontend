import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkSkewStyled = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.x};
  line-height: ${p => p.theme.lineHeights.searchSelect};

  color: ${p => p.theme.colors.whiteTextColor};

  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(7)};

  background-color: ${p => p.theme.colors.greenTextColor};

  outline: none;
  border: none;

  border-top-left-radius: ${p => p.theme.radii.bordeTopLeft};
  border-top-right-radius: ${p => p.theme.radii.bordeTopRight};
  border-bottom-left-radius: ${p => p.theme.radii.bordeBotLeft};
  border-bottom-right-radius: ${p => p.theme.radii.bordeBotRight};

  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.mode !== 'light' && p.theme.colors.greenTextColor};

    background-color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.yummyColor
        : p.theme.colors.bcgWhiteColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};

    padding: ${p => p.theme.spacing(6)} ${p => p.theme.spacing(16)};
  }

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(22)};
  }
`;
