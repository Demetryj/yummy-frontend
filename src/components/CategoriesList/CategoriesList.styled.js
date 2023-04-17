import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles';

export const List = styled.ul`
  position: relative;
  margin: 0;
  list-style: none;
  display: flex;
  gap: ${p => theme.spacing(14)};
  max-width: 100%;
  padding-top: ${p => theme.spacing(25)};
  @media screen and ${p => p.theme.media.medium} {
    gap: ${p => theme.spacing(25.5)};
  }
  @media screen and ${p => p.theme.media.large} {
    padding-top: ${p => theme.spacing(50)};
  }
  overflow: scroll;
  border-bottom: ${p => p.theme.borders.normal} #e0e0e0;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CategoryItem = styled(NavLink)`
  color: ${p => p.theme.colors.greyTextColor};
  position: relative;
  display: inline-block;
  padding-top: ${p => theme.spacing(5)};
  padding-bottom: ${p => theme.spacing(16)};
  font-family: 'Poppins';
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 14px;
  @media screen and ${p => p.theme.media.medium} {
    padding-top: ${p => theme.spacing(5)};
    padding-bottom: ${p => theme.spacing(14)};
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
