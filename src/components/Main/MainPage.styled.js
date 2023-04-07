import styled from 'styled-components';
import salat from 'images/mainPage/vegetable-plate-mob.png';

export const ContainerHero = styled.div`
width: 100%;

background-color: yellow;
background-image: url(${salat});

background-repeat: no-repeat;
background-position: left 28px top 322px, top 54px left 577px, left 325px
top 103px, left -132px top 48px;
background-size: auto;

  // position: relative;
  // z-index: 1;`
  
// .hero-container {
//   position: relative;
//   z-index: 1;
//   @include tablet {
//     min-height: 324px;
//     padding-top: 10px;
//   }

// .ellipse {
//   position: absolute;
//   z-index: -2;
//   @include tablet {
//     padding-left: 0;
//     right: 185px;
//     bottom: 40px;
//     width: 335px;
//     height: 333px;
//   }

// .icecream-img {
//   position: absolute;
//   z-index: -1;
//   @media screen and(min-width:768px) {
//     right: 303px;
//     width: 143px;
//     height: 336px;
//   }

export const Container = styled.div``

export const TextMain = styled.h1`
font-weight: 400;
font-size: 60px;
line-height: 60px;
text-align: center;
letter-spacing: -0.005em;

color: #001833;`

export const TextSub = styled.p`
padding-left: 47px;
padding-right: 47px;
text-align: center;

font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
letter-spacing: -0.02em;

color: #23262A;`

export const ImageWrap = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// margin-top: 44px;`

export const Image = styled.image`
// display: block;
// //  width: 100%;
// width: 320px;
// height: 296px;

//  @media (min-width: 768px) {
//     background-color: orange;
//   }`