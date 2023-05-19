import styled from 'styled-components';
import plateImgMob from 'images/mainPage/mainpage1x_mob.png';
import plateImgMob2 from 'images/mainPage/mainpage2x_mob.png';
import plateImgTab from 'images/mainPage/mainpage1x_tab.png';
import plateImgTab2 from 'images/mainPage/mainpage2x_tab.png';
import plateImgDesk from 'images/mainPage/mainpage1x_desk.png';
import plateImgDesk2 from 'images/mainPage/mainpage2x_desk.png';

export const HeroContainer = styled.section`
  width: 100%;
  padding: ${p => p.theme.spacing(0)} ${p => p.theme.spacing(8)};
  height: ${p => p.theme.spacing(388.5)};
  position: absolute;
  left: ${p => p.theme.spacing(0)};
  top: ${p => p.theme.spacing(0)};

  background-image: url(${plateImgMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${p =>
    p.mode === 'light' ? p.theme.colors.whiteColor : p.theme.colors.bgMainDark};

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${plateImgMob2});
  }

  @media (${p => p.theme.media.medium}) {
    padding: ${p => p.theme.spacing(0)} ${p => p.theme.spacing(16)};

    height: ${p => p.theme.spacing(320)};
    background-image: url(${plateImgTab});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${plateImgTab2});
    }
  }

  @media (${p => p.theme.media.large}) {
    padding: ${p => p.theme.spacing(0)} ${p => p.theme.spacing(50)};

    height: ${p => p.theme.spacing(400)};
    background-image: url(${plateImgDesk});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${plateImgDesk2});
    }
  }
`;

export const PreviewCategoriesContainer = styled.section`
  width: 100%;
  padding-top: ${p => p.theme.spacing(390)};
  margin: 0px auto;

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: ${p => p.theme.spacing(324.5)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(419)};
  }
`;

export const HeroBox = styled.div`
  @media (${p => p.theme.media.medium}) {
    margin-right: 45vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: ${p => p.theme.spacing(700)}) {
    margin-right: 50vw;
  }

  @media (${p => p.theme.media.large}) {
    margin-right: ${p => p.theme.spacing(390)};
  }

  @media (min-width: ${p => p.theme.spacing(950)}) {
    margin-right: 60vw;
  }

  @media (min-width: ${p => p.theme.spacing(1450)}) {
    margin-right: 70vw;
  }
`;

export const HeroTitle = styled.h1`
  width: ${p => p.theme.spacing(151.5)};
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(66)};
  margin-bottom: ${p => p.theme.spacing(7)};
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.yummyColor
      : p.theme.colors.whiteTextColor};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.spacing(30)};
  line-height: ${p => p.theme.spacing(30)};
  letter-spacing: -0.005em;

  @media (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(182)};
    margin: 204px 0px 24px 0px;
    font-size: ${p => p.theme.spacing(36)};
    line-height: ${p => p.theme.spacing(36)};
    text-align: left;
  }

  @media (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(252.5)};
    font-size: ${p => p.theme.spacing(50)};
    line-height: ${p => p.theme.spacing(50)};
  }
`;

export const Selected = styled.span`
  color: ${p => p.theme.colors.greenTextColor};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.spacing(30)};
  line-height: ${p => p.theme.spacing(30)};
  text-align: center;
  letter-spacing: -0.005em;

  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.spacing(36)};
    line-height: ${p => p.theme.spacing(36)};
  }

  @media (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.spacing(50)};
    line-height: ${p => p.theme.spacing(50)};
  }
`;

export const HeroSubText = styled.p`
  width: ${p => p.theme.spacing(126)};
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(78.5)};
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteTextColor};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.spacing(7)};
  line-height: ${p => p.theme.spacing(9)};
  text-align: center;

  & br {
    display: none;
  }

  @media (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(181)};
    margin: 24px 0 32px;
    font-size: ${p => p.theme.spacing(7)};
    line-height: ${p => p.theme.spacing(9)};
    text-align: left;
    & br {
      display: flex;
    }
  }

  @media (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(232.5)};
    margin-bottom: ${p => p.theme.spacing(7)};
    font-size: ${p => p.theme.spacing(9)};
    line-height: ${p => p.theme.spacing(12)};
  }
`;
