import styled from 'styled-components';
import bigMob1 from 'images/spinach/mobile/spinach-down-left-mob.png';
import bigMob2 from 'images/spinach/mobile/spinach-down-left-mob@2x.png';
import smallMob1 from 'images/spinach/mobile/spinach-down-right-mob.png';
import smallMob2 from 'images/spinach/mobile/spinach-down-right-mob@2x.png';
import bigTab1 from 'images/spinach/tablet/spinach-down-left-tabl.png';
import bigTab2 from 'images/spinach/tablet/spinach-down-left-tabl@2x.png';
import smallTab1 from 'images/spinach/tablet/spinach-down-right-tabl.png';
import smallTab2 from 'images/spinach/tablet/spinach-down-right-table@2x.png';
import bigDesk1 from 'images/spinach/desktop/spinach-down-left-desk.png';
import bigDesk2 from 'images/spinach/desktop/spinach-down-left-desk@2x.png';
import smallDesk1 from 'images/spinach/desktop/spinach-down-right-desk.png';
import smallDesk2 from 'images/spinach/desktop/spinach-down-right-desk@2x.png';

export const SpinatLeft = styled.div`
  background-image: url(${bigMob1});
  background-repeat: no-repeat;
  background-size: 315px 487px;
  background-position: bottom 245px left;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -5;
  bottom: 0;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bigMob2});
  }
  @media screen and ${p => p.theme.media.medium} {
    background-image: url(${bigTab1});
    background-repeat: no-repeat;
    background-size: 500px 790px;
    background-position: bottom 220px left;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bigTab2});
    }
  }
  @media screen and ${p => p.theme.media.large} {
    background-image: url(${bigDesk1});
    background-repeat: no-repeat;
    background-size: 696px 1037px;
    background-position: bottom 15px left;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bigDesk2});
    }
  }
`;

export const SpinatRight = styled.div`
  background-image: url(${smallMob1});
  background-repeat: no-repeat;
  background-size: 179px 155px;
  background-position: bottom right;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
  bottom: 0;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${smallMob2});
  }
  @media screen and ${p => p.theme.media.medium} {
    background-image: url(${bigTab1}), url(${smallTab1});
    background-repeat: no-repeat;
    background-size: 341px 261px;
    background-position: bottom right;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${smallTab2});
    }
  }
  @media screen and ${p => p.theme.media.large} {
    background-image: url(${smallDesk1});
    background-repeat: no-repeat;
    background-size: 531px 391px;
    background-position: bottom right;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${smallDesk2});
    }
  }
`;
