import styled from 'styled-components';
import plateImgMob from 'images/mainPage/mainpage1x_mob.png';
import plateImgMob2 from 'images/mainPage/mainpage2x_mob.png';
import plateImgTab from 'images/mainPage/mainpage1x_tab.png';
import plateImgTab2 from 'images/mainPage/mainpage2x_tab.png';
import plateImgDesk from 'images/mainPage/mainpage1x_desk.png';
import plateImgDesk2 from 'images/mainPage/mainpage2x_desk.png';

export const ContainerHero = styled.div`
background-image: url(${plateImgMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${p => p.theme.colors.whiteColor};
  display: flex;
  height: 777px;
  margin-bottom: 60px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${plateImgMob2});
    }
  @media (min-width: 768px) {
    background-image: url(${plateImgTab});
    height: 640px;
    margin-bottom: 72px;
   
    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${plateImgTab2});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${plateImgDesk});
    height: 800px;
    margin-bottom: 100px;
    
    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${plateImgDesk2});
    }
  }`

//    padding: 0 16px;
// @media (min-width: 768px) {  padding: 0 32px; }
//  @media (min-width: 1440px) { padding: 0 100px; }

export const MainBox = styled.div`
@media (min-width: 768px) {
    display: flex;
    margin-right: 368px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    margin-right: 830px;
  }`
  
export const Container = styled.div``

export const ContainerP = styled.div`
@media (min-width: 768px) and (max-width: 1439px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
}`

export const TextMain = styled.h1`
margin: 132px 12px 0px 12px;
  color: ${p => p.theme.colors.titleTextColor};
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  display: flex;
  text-align: center;
  letter-spacing: -0.005em;

  @media (min-width: 768px) {
    margin: 204px 0 0px ;
    font-size: 72px;
    line-height: 72px;
    text-align: left;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }`

export const Selected = styled.span`
color: ${p => p.theme.colors.greenTextColor};
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.005em;
  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }`

export const TextSub = styled.p`
margin: 14px 40px 157px 40px;
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: ;
  & br {
    display: none;
  }

  @media (min-width: 768px) {
    margin: 24px 0 32px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    & br {
    display: flex;
    }
  }

  @media (min-width: 1440px) {
    margin: 14px 0 50px;
    font-size: 18px;
    line-height: 24px;
    
  }`