import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 10000;
`;

export const Content = styled.div`
  position: absolute;
  padding: ${p => p.theme.spacing(9)};
  width: ${p => p.theme.spacing(80)};
  height: ${p => p.theme.spacing(65)};
  left: ${p => p.theme.spacing(77)};
  top: ${p => p.theme.spacing(36)};
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.whiteColor
      : p.theme.colors.darckBgColor};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid;
  border-color: ${p => p.theme.colors.greenColor};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(89)};
    height: ${p => p.theme.spacing(67)};
    left: ${p => p.theme.spacing(232)};
    top: ${p => p.theme.spacing(39)};
  }
  @media screen and (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(87)};
    height: ${p => p.theme.spacing(67)};
    left: ${p => p.theme.spacing(526)};
    top: ${p => p.theme.spacing(39)};
  }
`;

export const EditButton = styled.button`
  background: transparent;
  margin-right: auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #23262a;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  left: 17px;
`;

export const LogoutButton = styled.button`
  position: relative;
  background: #8baa36;

  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #fafafa;

  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 50px 42px;
  border: none;

  top: 30;
  left: 0;
`;

export const Arrow = styled(AiOutlineArrowRight)`
  position: absolute;
  top: 52px;
  right: 20px;
  color: white;
`;
