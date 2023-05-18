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
  width: 330px;
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.whiteColor
      : p.theme.colors.bgModalDark};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding-top: 44px;
  padding-bottom: 44px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(240)};
    padding-top: ${p => p.theme.spacing(25)};
    padding-bottom: ${p => p.theme.spacing(25)};
    padding-left: ${p => p.theme.spacing(20)};
    padding-right: ${p => p.theme.spacing(20)};
  }

  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(250)};
  }
`;
