import styled from 'styled-components';

export const TitleConteiner = styled.div`
  z-index: -1;
  box-sizing: border-box;
  width: 100%;
  padding-top: ${p => p.theme.spacing(17)};
  margin-bottom: ${p => p.theme.spacing(25)};

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: ${p => p.theme.spacing(28)};
    margin-bottom: ${p => p.theme.spacing(50)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(42)};
  }

  h2 {
    font-weight: ${p => p.theme.fontWeights.semiBold};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: ${p => p.theme.colors.sectionHeader};

    @media screen and (${p => p.theme.media.medium}) {
      font-size: ${p => p.theme.fontSizes.xxl};
    }
    @media screen and (${p => p.theme.media.large}) {
      font-size: ${p => p.theme.fontSizes.sb};
    }
  }
`;
