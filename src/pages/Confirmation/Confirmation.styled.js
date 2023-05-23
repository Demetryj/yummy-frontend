import styled from 'styled-components';

export const Section = styled.section`
  padding: ${p => p.theme.spacing(50)} ${p => p.theme.spacing(29)};
  text-align: center;

  @media screen and (${p => p.theme.media.medium}) {
    padding: ${p => p.theme.spacing(50)} 0 ${p => p.theme.spacing(102)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding: ${p => p.theme.spacing(69)} 0 ${p => p.theme.spacing(101.5)};
  }
`;

export const Img = styled.img`
  width: ${p => p.theme.spacing(129.5)};
  height: ${p => p.theme.spacing(85)};
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(7)};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(249)};
    height: ${p => p.theme.spacing(163.5)};
    margin-bottom: ${p => p.theme.spacing(16)};
  }

  @media screen and (${p => p.theme.media.large}) {
    height: ${p => p.theme.spacing(165.5)};
  }
`;

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 111%;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-bottom: ${p => p.theme.spacing(4)};

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 100%;
    margin-bottom: ${p => p.theme.spacing(7)};
  }
`;

export const Desc = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 129%;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  opacity: 0.5;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 133%;
  }
`;
