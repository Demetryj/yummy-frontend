import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-top: ${p => p.theme.spacing(25)};

  @media screen and (${p => p.theme.media.medium}) {
    margin-top: ${p => p.theme.spacing(20)};
  }

  @media screen and (${p => p.theme.media.large}) {
    margin-top: ${p => p.theme.spacing(25)};
  }
`;
