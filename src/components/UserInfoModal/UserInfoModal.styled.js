import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: absolute;
  padding: ${p => p.theme.spacing(9)};
  width: ${p => p.theme.spacing(163)};
  height: ${p => p.theme.spacing(163)};
  background: ${p => p.theme.colors.whiteColor};
  border-radius: 24px;

  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  top: 2%;
  left: 50%;
  transform: translate(-50%);

  @media screen and ${p => p.theme.media.large} {
    width: ${p => p.theme.spacing(250)};
    height: ${p => p.theme.spacing(212)};
    top: ${p => p.theme.spacing(39)};
    padding-top: ${p => p.theme.spacing(30)};
    padding-bottom: ${p => p.theme.spacing(30)};
    padding-left: ${p => p.theme.spacing(25)};
    padding-right: ${p => p.theme.spacing(25)};
  }
`;
