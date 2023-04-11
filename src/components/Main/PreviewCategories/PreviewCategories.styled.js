import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const MainTitle = styled.h3`
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

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(10)};
@media screen and (${p => p.theme.media.large}) {
    gap: ${p => p.theme.spacing(35)}  
}`

export const ListCard = styled.ul`
margin-bottom: ${p => p.theme.spacing(12)};
display: grid;
grid-template-columns: repeat(auto-fit, 343px);
justify-content: center;
gap: ${p => p.theme.spacing(14)};

@media screen and (${p => p.theme.media.medium}) {
  grid-template-columns: repeat(2, 336px);
  gap: ${p => p.theme.spacing(16)};
  margin-bottom: ${p => p.theme.spacing(20)};
}

@media screen and (${p => p.theme.media.large}) {
  grid-template-columns: repeat(4, 300px);
  gap: ${p => p.theme.spacing(50)} ${p => p.theme.spacing(25)};
  margin-bottom:${p => p.theme.spacing(25)};
}
  }`

export const LinkRecipe = styled(Link)``;

export const ButtonCard = styled(Link)`
padding:${p => p.theme.spacing(5)} ${p => p.theme.spacing(12)};
border-radius: ${p => p.theme.radii.light};

color:${p => p.theme.colors.whiteColor};
background:${p => p.theme.colors.greenTextColor};
float: right;
cursor: pointer;
font-weight: ${p => p.theme.fontWeights.regular};

&:hover,
&:focus {
  border-color: ${p => p.theme.colors.btnDarckBgColor};
  background-color: ${p => p.theme.colors.btnDarckBgColor};
}`

export const LinkDown = styled(Link)`
display: block; 
text-align:center;`

export const ButtonDown = styled.button`
float: center;
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
    margin-right: ${p => p.theme.spacing(9)};
    padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(21)};

    font-size: ${p => p.theme.fontSizes.m};
  }`
