import styled from 'styled-components';

import blackDeskTabl from '../../images/dots/black-desk-tabl.png';
import blackDeskTabl2x from '../../images/dots/black-desk-tabl@2x.png';
import blackMob from '../../images/dots/black-mob.png';
import blackMob2x from '../../images/dots/black-mob@2x.png';
import greenDeskTabl from '../../images/dots/green-desk-tabl.png';
import greenDeskTabl2x from '../../images/dots/green-desk-tabl@2x.png';
import greenMob from '../../images/dots/green-mob.png';
import greenMob2x from '../../images/dots/green-mob@2x.png';

export const TitleConteiner = styled.div`
  height: 192px;
  z-index: -1;
  box-sizing: border-box;
  width: 100%;
  padding-top: 114px;

  background-image: url(${greenMob}), url(${blackMob}), url(${greenMob});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${greenMob2x}), url(${blackMob2x}), url(${greenMob2x});
  }
  background-repeat: no-repeat;
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-position: top 80px left 104px, top 145px left 231px,
    top 112px left 329px;

  @media screen and (${p => p.theme.media.medium}) {
    height: 240px;
    padding-top: 136px;

    background-image: url(${greenDeskTabl}), url(${blackDeskTabl}),
      url(${greenDeskTabl});
  }

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${greenDeskTabl2x}), url(${blackDeskTabl2x}),
      url(${greenDeskTabl2x});

    background-repeat: no-repeat;
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: top 91px left 187px, top 160px left 405px,
      top 104px left 682px;
  }

  @media screen and (${p => p.theme.media.large}) {
    height: 308px;
    padding-top: 164px;
    background-position: top 122px left 228px, top 205px left 707px,
      top 135px left 1150px;
  }

  h2 {
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.semiBold};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 28px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.sectionHeader};

    @media screen and (${p => p.theme.media.medium}) {
      font-size: ${p => p.theme.fontSizes.xxl};
      line-height: 32px;
    }
    @media screen and (${p => p.theme.media.large}) {
      font-size: ${p => p.theme.fontSizes.sb};
      line-height: 44px;
    }
  }
`;
