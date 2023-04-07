import styled from 'styled-components';

export const Container = styled.div``

export const TextMain = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 60px;
text-align: center;
letter-spacing: -0.005em;

color: #001833;
`
export const TextSub = styled.p`
padding-left: 63px;
padding-right: 63px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
letter-spacing: -0.02em;

color: #23262A;
`
export const ImageWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 44px;
`
export const Image = styled.image`
 display: block;
//  width: 100%;
 width: 320px;
height: 296px;
object-fit: cover;
 background-color: #DAF7A7;

 @media (min-width: 768px) {
    background-color: orange;
  }
`