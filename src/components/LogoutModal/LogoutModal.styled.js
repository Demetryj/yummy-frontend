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
  width: 330px;
  height: 179px;
  background: #fafafa;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  top: 2%;
  left: 50%;
  transform: translate(-50%);

  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(240)};
    height: ${p => p.theme.spacing(107)};
    padding-top: ${p => p.theme.spacing(25)};
    padding-bottom: ${p => p.theme.spacing(25)};
    padding-left: ${p => p.theme.spacing(20)};
    padding-right: ${p => p.theme.spacing(20)};
  }

  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(250)};
    height: ${p => p.theme.spacing(107)};
  }
`;
