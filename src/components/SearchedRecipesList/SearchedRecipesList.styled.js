import styled from 'styled-components';

export const List = styled.ul`
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
  }
`;
