import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.whiteColor};
  /* @media screen and ${p => p.theme.media.medium} {
    color: ${p => p.theme.colors.mainTextColor};
  } */
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenTextColor};
  }
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(7)};
  /* @media screen and ${p => p.theme.media.large} {
    display: flex;
    flex-direction: row;
  } */
`;

export const ListItem = styled.li`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 129%;
  letter-spacing: -0.02em;
  cursor: pointer;

  /* @media screen and ${p => p.theme.media.medium} {
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 160%;
  } */
`;

export const Title = styled.h2`
  margin-left: ${p => p.theme.spacing(4)};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 100%;
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.whiteColor};
`;

export const Paragraph = styled.p`
  font-size: ${p => p.theme.fontSizes.x};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 100%;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.yummyColor};
  opacity: 0.5;
  &:not(:last-child) {
    margin-right: ${p => p.theme.spacing(7)};
  }
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
