import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BenefitsList = styled.ul`
  list-style: disc;
  list-style-position: inside;
  color: ${p => p.theme.colors.whiteColor};

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 129%;
  letter-spacing: -0.02em;
`;

export const BenefitsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(5)};
  }
`;

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.whiteColor};
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
  @media screen and ${p => p.theme.media.medium} {
    align-items: flex-start;
  }
`;

export const ListItem = styled.li`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 129%;
  letter-spacing: -0.02em;
  cursor: pointer;
  @media screen and ${p => p.theme.media.medium} {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.spacing(10)};
    }
  }
`;

export const Title = styled.h2`
  margin-left: ${p => p.theme.spacing(4)};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 100%;
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.whiteColor};
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.xl};
  }
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

export const IconList = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  gap: ${p => p.theme.spacing(7)};
  @media screen and ${p => p.theme.media.medium} {
    gap: ${p => p.theme.spacing(9)};
  }
`;

export const IconItem = styled.li``;

export const Logo = styled.img`
  width: ${p => p.theme.spacing(16)};
  height: ${p => p.theme.spacing(16)};
  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(22)};
    height: ${p => p.theme.spacing(22)};
  }
`;
