import styled from 'styled-components';

export const RectOne = styled.div`
  position: absolute;
  /* z-index: -10; */
  width: 8px;
  height: 8px;
  left: 135px;
  top: 76px;
  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);
  @media screen and ${p => p.theme.media.medium} {
    width: 14px;
    height: 14px;
    left: 220px;
    top: 85px;
  }
  @media screen and ${p => p.theme.media.large} {
    left: 328px;
    top: 120px;
  }
`;

export const RectTwo = styled.div`
  position: absolute;
  /* z-index: -10; */
  width: 6px;
  height: 6px;
  right: 120px;
  top: 156px;
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
    top: 168px;
  }
  @media screen and ${p => p.theme.media.large} {
    left: 807px;
    top: 205px;
  }
`;

export const RectThree = styled.div`
  position: absolute;
  /* z-index: -10; */
  width: 8px;
  height: 8px;
  right: 16px;
  top: 110px;
  background: #8baa36;
  border-radius: 3px;
  transform: rotate(-25deg);
  @media screen and ${p => p.theme.media.medium} {
    width: 14px;
    height: 14px;
    right: 32px;
    top: 98px;
    @media screen and ${p => p.theme.media.large} {
      right: 172px;
      top: 135px;
    }
  }
`;
