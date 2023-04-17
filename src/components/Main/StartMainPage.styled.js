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
  background-color: ${p => p.theme.colors.whiteColor};
 
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
  }`

export const PreviewCategoriesContainer = styled.section`
  width: 100%;
  padding-top: ${p => p.theme.spacing(390)};
  margin: 0px auto;
  
  @media screen and (${p => p.theme.media.medium}) {
    padding-top:${p => p.theme.spacing(324.5)};  
  }
  
  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(419)};  
  }`;

export const HeroBox = styled.div`
  @media (${p => p.theme.media.medium}) {
    margin-right: ${p => p.theme.spacing(184)};
    display: flex; 
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 1153px){
    margin-right: ${p => p.theme.spacing(350)};
  }
  
  @media (${p => p.theme.media.large}) {
    margin-right: ${p => p.theme.spacing(415)};
  }`

export const HeroText = styled.h1`
  margin: 132px 12px 0px 12px;
  color: ${p => p.theme.colors.titleTextColor};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.spacing(30)};
  line-height: ${p => p.theme.spacing(30)};
  letter-spacing: -0.005em;
  text-align: center;

  @media (${p => p.theme.media.medium}) {
    margin: 204px 0 0px ;
    font-size: ${p => p.theme.spacing(36)};
    line-height: ${p => p.theme.spacing(36)};
    text-align: left;
  }

  @media (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.spacing(50)};
    line-height: ${p => p.theme.spacing(50)};
  }`

export const Selected = styled.span`
  color: ${p => p.theme.colors.greenTextColor};
  font-weight: ${p => p.theme.fontWeights.regular};;
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
  }`

export const HeroSubText = styled.p`
  margin: 14px 40px 157px 40px;
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: ${p => p.theme.fontWeights.regular};;
  font-size: ${p => p.theme.spacing(7)};
  line-height: ${p => p.theme.spacing(9)};
  text-align: center;
  letter-spacing: ;
  & br {
    display: none;
  }

  @media (${p => p.theme.media.medium}) {
    margin: 24px 0 32px;
    font-size: ${p => p.theme.spacing(7)};
    line-height: ${p => p.theme.spacing(9)};
    text-align: left;
    & br {
    display: flex;
    }
  }

  @media (${p => p.theme.media.large}) {
    margin: 14px 0 50px;
    font-size: ${p => p.theme.spacing(9)};
    line-height: ${p => p.theme.spacing(12)}; 
  }`
