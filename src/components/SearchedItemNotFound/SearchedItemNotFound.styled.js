import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
`;

export const Img = styled.img`
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

export const Desc = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 100%;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  opacity: 0.5;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
