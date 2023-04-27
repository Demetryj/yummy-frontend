import styled from 'styled-components';

export const TitleConteiner = styled.div`
  z-index: -1;
  box-sizing: border-box;
  width: 100%;
  padding-top: 34px;
  margin-bottom: 50px;

  @media screen and (${p => p.theme.media.medium}) {
    padding-top: 56px;
    margin-bottom: 100px;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: 84px;
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
