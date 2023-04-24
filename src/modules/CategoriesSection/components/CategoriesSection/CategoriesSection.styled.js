import styled from 'styled-components';

export const CategoriesSectionStyled = styled.section`
  width: 100%;
  max-width: 343px;
  padding-top: ${p => p.theme.spacing(57)};

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: ${p => p.theme.spacing(68)};
    max-width: 704px;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(82)};
    max-width: 1240px;
  }
`;
