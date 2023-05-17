import styled from 'styled-components';
import BgMob from 'images/spinach/mobile/spinach-menu-mob.png';
import BgMob2x from 'images/spinach/mobile/spinach-menu-mob@2x.png';
import BgTabl from 'images/spinach/tablet/spinach-menu-tabl.png';
import BgTabl2x from 'images/spinach/tablet/spinach-menu-tabl@2x.png';

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
  width: 100%;
  height: 100%;
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.bgMobileMenu
      : p.theme.colors.bgMainDark};
  background-image: url(${BgMob});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 360px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgMob2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${BgTabl});
    background-size: 558px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgTabl2x});
    }
  }
`;
