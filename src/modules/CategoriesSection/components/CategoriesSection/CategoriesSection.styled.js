import styled from 'styled-components';

export const CategoriesSectionStyled = styled.section`
  width: 100%;
  max-width: 343px;
  padding-top: ${p => p.theme.spacing(25)};

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: ${p => p.theme.spacing(28)};
    max-width: 704px;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(42)};
    max-width: 1240px;
  }
`;
