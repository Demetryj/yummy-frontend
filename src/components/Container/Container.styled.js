import styled from 'styled-components';

export const MainConteiner = styled.div`
  /* padding: 0; */
  padding-top: ${p => p.theme.spacing(25)};

  @media screen and (${p => p.theme.media.medium}) {
    /* padding: 0; */
    padding-top: ${p => p.theme.spacing(28)};
  }

  @media screen and (${p => p.theme.media.large}) {
    /* padding: 0; */
    padding-top: ${p => p.theme.spacing(42)};
  }
`;
