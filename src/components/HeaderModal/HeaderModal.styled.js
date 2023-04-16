import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 25;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: #ebf3d4;
`;
