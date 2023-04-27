import styled from 'styled-components';

export const MainConteiner = styled.div`
  padding: 0;

  @media screen and (${p => p.theme.media.medium}) {
    padding: 0;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding: 0;
  }
`;
