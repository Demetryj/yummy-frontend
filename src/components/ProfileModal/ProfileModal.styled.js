import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  position: absolute;
  width: ${p => p.theme.spacing(80)};
  height: ${p => p.theme.spacing(65)};
  left: ${p => p.theme.spacing(115)};
  top: ${p => p.theme.spacing(66)};
  transform: translate(-50%, -50%);

  border: 1px solid #8baa36;
  border-radius: ${p => p.theme.radii.normal};

  padding: ${p => p.theme.spacing(9)};
  background-color: ${p => p.theme.colors.whiteColor};

  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
