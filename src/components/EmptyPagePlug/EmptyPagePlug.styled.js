import styled from 'styled-components';

export const EmptyPlugWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (${p => p.theme.media.medium}) {
    gap: 32px;
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
  color: ${p => p.theme.colors.blackTextColor};
  opacity: 0.5;

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const EmptyPlugImgWrapper = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 24px;

  @media screen and (${p => p.theme.media.medium}) {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
