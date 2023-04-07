import styled from 'styled-components';

export const Main = styled.main`
  padding: 100px 58px;
  text-align: center;

  @media screen and (${p => p.theme.media.medium}) {
    padding: 100px 0 204px;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding: 138px 0 203px;
  }
`;

export const Img = styled.img`
  width: 259px;
  height: 170px;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(7)};

  @media screen and (${p => p.theme.media.medium}) {
    width: 498px;
    height: 327px;
    margin-bottom: ${p => p.theme.spacing(16)};
  }

  @media screen and (${p => p.theme.media.large}) {
    height: 331px;
  }
`;

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 111%;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  margin-bottom: ${p => p.theme.spacing(4)};

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

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 133%;
  }
`;
