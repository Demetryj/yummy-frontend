import styled from 'styled-components';

export const ButtonScrSt = styled.button`
  position: fixed;
  bottom: 20vh;
  right: 10vw;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: rgba(139, 170, 54, 0.3);
  font-size: 50px;
  box-shadow: 0px 0px 22px -5px rgba(139, 170, 54, 0.75) inset;
  animation: bounce-in-bottom 1.1s both;
  & > svg {
    color: rgb(139, 170, 54);
    text-shadow: 0px 0px 24px rgba(0, 0, 0);
  }
  &:hover {
    animation: shadow-drop-2-lr 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes shadow-drop-2-lr {
    0% {
      transform: translateZ(0);
      box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;
    }
    100% {
      transform: translateZ(50px);
      box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35),
        12px 0 20px -12px rgba(0, 0, 0, 0.35);
    }
  }

  @-webkit-keyframes bounce-in-bottom {
    0% {
      transform: translateY(500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-bottom {
    0% {
      transform: translateY(500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
`;
