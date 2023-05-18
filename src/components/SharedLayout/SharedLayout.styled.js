import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${p =>
    p.mode === 'light' ? p.theme.colors.bgMain : p.theme.colors.darckBgColor};
`;

export const MainWrapper = styled.main`
  min-height: 100vh;
`;
