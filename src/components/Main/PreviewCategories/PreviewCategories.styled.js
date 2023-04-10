import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


export const List = styled.ul``

export const ListCard = styled.ul`
display: grid;
  grid-template-columns: repeat(auto-fit, 343px);
  justify-content: center;
  gap: ${p => p.theme.spacing(14)};

  @media screen and (${p => p.theme.media.medium}) {
    grid-template-columns: repeat(2, 336px);
    ${p => p.theme.spacing(16)};
  }

  @media screen and (${p => p.theme.media.large}) {
    grid-template-columns: repeat(4, 300px);
    gap: ${p => p.theme.spacing(50)} ${p => p.theme.spacing(7)};
  }`

export const BtnRecipe = styled(Link)`
color: #3E4462;`

export const Button = styled.button``