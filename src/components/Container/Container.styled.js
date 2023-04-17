import styled from 'styled-components';

export const MainConteiner = styled.div`
  padding: 0 16px;

  @media screen and (${p => p.theme.media.medium}) {
    padding: 0 32px;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding: 0 100px;
  }
`;
