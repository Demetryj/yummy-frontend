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
  background-size: ${p => p.theme.spacing(158)} ${p => p.theme.spacing(244)};
  background-position: bottom ${p => p.theme.spacing(123)} left;
  width: 100%;
  height: 100%;
  /* position: absolute; */
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
    background-size: ${p => p.theme.spacing(250)} ${p => p.theme.spacing(395)};
    background-position: bottom ${p => p.theme.spacing(110)} left;

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
    background-size: ${p => p.theme.spacing(348)} ${p => p.theme.spacing(519)};
    background-position: bottom ${p => p.theme.spacing(8)} left;

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
  background-size: ${p => p.theme.spacing(90)} ${p => p.theme.spacing(78)};
  background-position: bottom right;
  /* position: absolute; */
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
