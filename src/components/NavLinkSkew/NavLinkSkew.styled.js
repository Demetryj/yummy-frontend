import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkSkewStyled = styled(NavLink)`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 10px;

  color: ${p =>
    p.styled === 'black'
      ? p.theme.colors.whiteTextColor
      : p.styled === 'olive'
      ? p.theme.colors.whiteTextColor
      : p.styled === 'other'
      ? p.theme.colors.whiteTextColor
      : p.styled === 'transparent'
      ? p.theme.colors.whiteTextColor
      : 'red'};

  padding: ${p =>
    p.location === 'favorite' || p.location === 'recipes'
      ? '6px 14px'
      : '16px 30px'};

  background-color: ${p =>
    p.styled === 'black'
      ? p.theme.colors.btnDarckBgColor
      : p.styled === 'olive'
      ? p.theme.colors.greenTextColor
      : p.styled === 'transparent'
      ? 'transparent'
      : p.styled === 'other'
      ? 'transparent'
      : 'red'};

  outline: none;
  border: none;

  border-top-left-radius: ${p => p.theme.radii.bordeTopLeft};
  border-top-right-radius: ${p => p.theme.radii.bordeTopRight};
  border-bottom-left-radius: ${p => p.theme.radii.bordeBotLeft};
  border-bottom-right-radius: ${p => p.theme.radii.bordeBotRight};

  min-width: 85px;
  text-align: center;

  border: ${p =>
    p.styled === 'other'
      ? `1px solid ${p.theme.colors.greenTextColor}`
      : p.styled === 'transparent'
      ? `1px solid ${p.theme.colors.whiteTextColor}`
      : '1px solid transparent'};

  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

  &:hover {
    color: ${p =>
      p.styled === 'black'
        ? p.theme.colors.whiteTextColor
        : p.styled === 'olive'
        ? p.theme.colors.whiteTextColor
        : p.styled === 'other'
        ? p.theme.colors.whiteTextColor
        : p.styled === 'transparent'
        ? p.theme.colors.greenTextColor
        : 'red'};

    background-color: ${p =>
      p.styled === 'black'
        ? p.theme.colors.greenTextColor
        : p.styled === 'olive'
        ? p.theme.colors.btnDarckBgColor
        : p.styled === 'transparent'
        ? 'transparent'
        : p.styled === 'other'
        ? p.theme.colors.greenTextColor
        : 'red'};

    border: ${p =>
      p.styled === 'transparent'
        ? `1px solid ${p.theme.colors.greenTextColor}`
        : '1px solid transparent'};
  }

  @media screen and (${p => p.theme.media.medium}) {
    min-width: 130px;
    font-size: ${p => p.theme.fontSizes.s};

    padding: ${p =>
      p.location === 'favorite' || p.location === 'recipes'
        ? '12px 32px'
        : '16px 40px'};
  }

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: ${p =>
      p.location === 'favorite' || p.location === 'recipes'
        ? '18px 44px'
        : '20px 40px'};
    min-width: 160px;
  }
`;
