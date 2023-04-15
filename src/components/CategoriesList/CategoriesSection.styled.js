import styled from 'styled-components';

export const CategoriesSection = styled.section`
  padding-top: ${p => p.theme.spacing(57)};

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: ${p => p.theme.spacing(68)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(82)};
  }
`;
