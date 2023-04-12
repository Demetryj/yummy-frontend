import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const ListCategories = styled.ul`
width: 100%;

display: flex;
justify-content: start;
flex-direction: column;
gap: ${p => p.theme.spacing(10)}; // відступ між лішками списку
 
@media screen and (${p => p.theme.media.large}) {
    gap: ${p => p.theme.spacing(35)}  
}`

export const Categoty = styled.h3`
margin-bottom: ${p => p.theme.spacing(16)};
font-weight: ${p => p.theme.fontWeights.semiBold};
color: ${p => p.theme.colors.titleTextColor};
font-size: ${p => p.theme.fontSizes.xl};
      @media screen and ${(p) => p.theme.media.medium} {
        margin-bottom:${p => p.theme.spacing(20)};
          font-size: ${p => p.theme.fontSizes.xxl};
      }
  
      @media screen and ${(p) => p.theme.media.large} {
        margin-bottom: ${p => p.theme.spacing(25)};
          font-size: ${p => p.theme.fontSizes.sb};
      }
`;

export const ListCard = styled.ul`
width: 100%;
margin-bottom: ${p => p.theme.spacing(20)};
display: flex;
flex-wrap: wrap;
gap: ${p => p.theme.spacing(0)};

@media screen and (${p => p.theme.media.medium}) {
  margin-bottom: ${p => p.theme.spacing(20)};
  gap: ${p => p.theme.spacing(16)};
}

@media screen and (${p => p.theme.media.large}) {
  margin-bottom:${p => p.theme.spacing(25)};
  gap: ${p => p.theme.spacing(7)};
}`

export const LinkRecipe = styled.div`
width: ${p => p.theme.spacing(171.5)};

@media screen and (${p => p.theme.media.medium}) {
  width: ${p => p.theme.spacing(168)};
}

@media screen and (${p => p.theme.media.large}){
 width: ${p => p.theme.spacing(150)};
}`;

export const Wrap = styled.div`
text-align: right;
`

export const ButtonSeeAll = styled(Link)`
font-family: inherit;
padding:${p => p.theme.spacing(5)} ${p => p.theme.spacing(12)};
border-radius: ${p => p.theme.radii.light};

color:${p => p.theme.colors.whiteColor};
background:${p => p.theme.colors.greenTextColor};
font-weight: ${p => p.theme.fontWeights.regular};
cursor: pointer;

&:hover,
&:focus {
  border-color: ${p => p.theme.colors.btnDarckBgColor};
  background-color: ${p => p.theme.colors.btnDarckBgColor};
}`

export const LinkDown = styled(Link)`
display: block; 
text-align: center;`

export const ButtonDown = styled.button`
margin-top: 40px;
margin-bottom: 82px;

padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(11)};

font-weight: ${p => p.theme.fontWeights.regular};
font-size: ${p => p.theme.fontSizes.s};
line-height: 1.5;

color: ${p => p.theme.colors.yummyColor};

border: ${p => p.theme.borders.medium};
  border-color: ${p => p.theme.colors.greenTextColor};
  /* clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); */
  border-radius: 35px 70px;

  background-color: transparent;
  transition: color 250ms, border-color 250ms;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.whiteColor};
    border-color: ${p => p.theme.colors.greenColor};
    background-color: ${p => p.theme.colors.greenColor};
  }

  @media screen and ${p => p.theme.media.medium} {
    padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(21)};

    font-size: ${p => p.theme.fontSizes.m};
  }`
