import styled from 'styled-components';

export const EmptyPlugWrapper = styled.div`
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(25)};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => p.theme.spacing(16)};
  }
`;

export const EmptyPlugText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  font-feature-settings: 'liga' off;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};
  opacity: 0.5;

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const EmptyPlugImgWrapper = styled.div`
  width: ${p => p.theme.spacing(104)};
  height: ${p => p.theme.spacing(66.5)};
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(12)};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(175)};
    height: ${p => p.theme.spacing(112.5)};
    margin-bottom: ${p => p.theme.spacing(16)};
  }
`;
