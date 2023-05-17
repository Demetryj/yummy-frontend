import styled from 'styled-components';

export const RectOne = styled.div`
  position: absolute;
  z-index: -10;
  width: 8px;
  height: 8px;
  left: 120px;
  top: 79.92px;
  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);
  @media screen and ${p => p.theme.media.medium} {
    width: 14px;
    height: 14px;
    left: 219px;
    top: 90.92px;
  }
  @media screen and ${p => p.theme.media.large} {
    left: 210px;
    top: 122px;
  }
`;

export const RectTwo = styled.div`
  position: absolute;
  z-index: -10;
  width: 6px;
  height: 6px;
  left: 247px;
  top: 144.54px;
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.btnDarckBgColor
      : p.theme.colors.whiteColor};
  border-radius: 3px;
  transform: rotate(-25deg);
  @media screen and ${p => p.theme.media.medium} {
    width: 12px;
    height: 12px;
    left: 437px;
    top: 160.07px;
  }
  @media screen and ${p => p.theme.media.large} {
    left: 775px;
    top: 205px;
  }
`;

export const RectThree = styled.div`
  position: absolute;
  z-index: -10;
  width: 8px;
  height: 8px;
  left: 335px;
  top: 112.38px;
  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);
  @media screen and ${p => p.theme.media.medium} {
    width: 14px;
    height: 14px;
    left: 700px;
    top: 103.92px;
    @media screen and ${p => p.theme.media.large} {
      left: 1150px;
      top: 135px;
    }
  }
`;
