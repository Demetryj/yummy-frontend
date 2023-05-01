import styled from 'styled-components';

export const ButtonScrSt = styled.button`
  position: fixed;
  bottom: 10vh;
  right: 1vw;
  z-index: 555;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: rgba(139, 170, 54, 0.6);
  font-size: 50px;
  box-shadow: 0px 0px 22px -5px rgba(139, 170, 54, 0.75) inset;
  & > svg {
    color: rgb(139, 170, 54);
    text-shadow: 0px 0px 24px rgba(0, 0, 0);
  }
`;
