import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const FooterWrap = styled.div`
  /* position: relative;
  z-index: 100; */
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.spacing(14)};
  padding-bottom: ${p => p.theme.spacing(9)};
  max-width: 375px;

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: ${p => p.theme.spacing(25)};
    padding-bottom: ${p => p.theme.spacing(12)};
    padding-left: ${p => p.theme.spacing(16)};
    padding-right: ${p => p.theme.spacing(16)};
    max-width: 768px;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-left: ${p => p.theme.spacing(50)};
    padding-right: ${p => p.theme.spacing(50)};
    max-width: 1440px;
  }
`;

export const BenefitsList = styled.ul`
  list-style: disc;
  list-style-position: inside;
  color: ${p => p.theme.colors.whiteColor};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 129%;
  letter-spacing: -0.02em;

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 133%;
    list-style-position: outside;
    padding-left: ${p => p.theme.spacing(13)};
  }
`;

export const BenefitsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(5)};
  }
`;

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.whiteColor};
  transition: color 250ms;

  &:hover,
  &:focus {
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.greenTextColor
        : p.theme.colors.mainTextColor};
  }
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(7)};
  @media screen and (${p => p.theme.media.medium}) {
    align-items: flex-start;
  }
`;

export const ListItem = styled.li`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 129%;
  letter-spacing: -0.02em;
  cursor: pointer;
  @media screen and (${p => p.theme.media.medium}) {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.spacing(10)};
    }
  }
`;

export const IconItem = styled(NavLink)`
  color: ${p =>
    p.mode === 'light' ? p.theme.colors.greenColor : p.theme.colors.whiteColor};
  transition: color 250ms;

  &:hover,
  &:focus {
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.whiteColor
        : p.theme.colors.yummyColor};
  }
`;

export const Title = styled.h2`
  margin-left: ${p => p.theme.spacing(4)};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 100%;
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.whiteColor};
  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Subtitle = styled.b`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 27px;
  color: ${p => p.theme.colors.whiteColor};
  margin-bottom: ${p => p.theme.spacing(7)};
`;

export const IconText = styled(AiOutlineCopyrightCircle)`
  width: ${p => p.theme.spacing(7)};
  height: ${p => p.theme.spacing(7)};

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.yummyColor
      : p.theme.colors.whiteTextColor};
`;

export const Paragraph = styled.p`
  font-size: ${p => p.theme.fontSizes.x};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 100%;
  letter-spacing: -0.01em;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.yummyColor
      : p.theme.colors.whiteTextColor};
  &:not(:last-child) {
    margin-right: ${p => p.theme.spacing(7)};
  }
  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 129%;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteColor};
`;

export const IconList = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  gap: ${p => p.theme.spacing(7)};
  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => p.theme.spacing(9)};
  }
`;

export const Logo = styled.img`
  width: ${p => p.theme.spacing(16)};
  height: ${p => p.theme.spacing(16)};
  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(22)};
    height: ${p => p.theme.spacing(22)};
  }
`;
