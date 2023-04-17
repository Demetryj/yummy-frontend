import styled from 'styled-components';

export const MainConteiner = styled.div`
  padding: 0 16px;
  background-color: ${p => p.theme.colors.lightBgColor};
  @media screen and (${p => p.theme.media.medium}) {
    padding: 0 32px;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding: 0 100px;
  }
`;
