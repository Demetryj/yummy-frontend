import styled from 'styled-components';
import welcomeMob from 'images/welcomePage/welcome-mob.jpg';
import welcomeMob2x from 'images/welcomePage/welcome-mob@2x.jpg';
import welcomeTablet from 'images/welcomePage/welcome-tablet.jpg';
import welcomeTablet2x from 'images/welcomePage/welcome-tablet@2x.jpg';
import welcomeDask from 'images/welcomePage/welcome-desk.jpg';
import welcomeDask2x from 'images/welcomePage/welcome-desk@2x.jpg';

export const Section = styled.section`
  /* width: 100vw;
  height: 100vh; */

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${welcomeMob});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${welcomeMob2x});
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and ${p => p.theme.media.medium} {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${welcomeTablet});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${welcomeTablet2x});
    }

    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${welcomeDask});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${welcomeDask2x});
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.spacing(137)} ${p => p.theme.spacing(16)}
    ${p => p.theme.spacing(130)};
  width: 375px;
  height: 100vh;

  @media screen and ${p => p.theme.media.medium} {
    padding: ${p => p.theme.spacing(171)} ${p => p.theme.spacing(62)};
    width: 768px;
  }
  @media screen and ${p => p.theme.media.large} {
    padding: ${p => p.theme.spacing(107.5)} ${p => p.theme.spacing(220)};
    width: 1440px;
  }
`;

export const Logo = styled.img`
  margin-bottom: ${p => p.theme.spacing(14)};
  width: 54px;
  height: 54px;
  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.theme.spacing(22)};
    width: 68px;
    height: 68px;
  }
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.spacing(14)};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.xl};
  } ;
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.spacing(22)};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;
  text-align: center;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.theme.spacing(20)};
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 1.33;
  }
`;

export const BtnRegister = styled.button`
  margin-right: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(6)} ${p => p.theme.spacing(12)};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteTextColor};
  border: none;
  /* clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); */
  border-radius: 35px 70px;
  background-color: ${p => p.theme.colors.greenBgColor};
  transition: background-color 250ms;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.btnDarckBgColor};
  }
  @media screen and ${p => p.theme.media.medium} {
    margin-right: ${p => p.theme.spacing(9)};
    padding: ${p => p.theme.spacing(11)} ${p => p.theme.spacing(22)};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const BtnSignin = styled.button`
  margin-right: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(11)};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteTextColor};
  border: ${p => p.theme.borders.medium};
  border-color: ${p => p.theme.colors.whiteTextColor};
  /* clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); */
  border-radius: 35px 70px;
  background-color: transparent;
  transition: color 250ms, border-color 250ms;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenColor};
    border-color: ${p => p.theme.colors.greenColor};
  }
  @media screen and ${p => p.theme.media.medium} {
    margin-right: ${p => p.theme.spacing(9)};
    padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(21)};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
