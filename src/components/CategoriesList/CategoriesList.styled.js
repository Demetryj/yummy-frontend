import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  z-index: 757657;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 28px;
  min-width: 100%;
  max-width: 359px;
  @media screen and ${p => p.theme.media.medium} {
    gap: 55px;
    min-width: 100%;
    max-width: 736px;
  }
  @media screen and ${p => p.theme.media.large} {
    min-width: 100%;
    max-width: 1440px;
  }
  overflow: scroll;
  border-bottom: ${p => p.theme.borders.normal} #e0e0e0;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CategoryItem = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding: 10px 0 32px;
  font-family: 'Poppins';
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 14px;
  @media screen and ${p => p.theme.media.medium} {
    padding: 10px 0 28px;
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 18px;
  }

  color: #e0e0e0;

  &.active {
    color: ${p => p.theme.colors.greenBgColor};
    border-bottom: ${p =>
      p.theme.borders.medium + ' ' + p.theme.colors.greenBgColor};
  }
  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;

    width: 100%;
    height: 2px;
    background: ${p => p.theme.colors.greenBgColor};
  }
`;
