import styled from 'styled-components';

export const Card = styled.div`
  display: flex;

  width: 100%;
  height: 152px;

  gap: ${p => (p.location === 'favorite' ? '14px' : '14px')};

  background-color: ${p =>
    p.location === 'favorite'
      ? p.theme.colors.bcgWhiteColor
      : p.theme.colors.bcgWhiteColor};

  padding: ${p =>
    p.location === 'favorite' ? '14px 18px 14px 14px' : '14px 9px'};

  border-radius: ${p => p.theme.radii.normal};

  @media screen and (${p => p.theme.media.medium}) {
    height: 288px;
    gap: ${p => (p.location === 'favorite' ? '24px' : '24px')};
    padding: ${p => (p.location === 'favorite' ? '28px 24px' : '28px 24px')};
  }

  @media screen and (${p => p.theme.media.large}) {
    height: 404px;

    gap: ${p => (p.location === 'favorite' ? '40px' : '40px')};
    padding: ${p => (p.location === 'favorite' ? '40px' : '40px')};
  }
`;

export const Image = styled.div`
  & img {
    width: ${p => (p.location === 'favorite' ? '124px' : '124px')};
    height: ${p => (p.location === 'favorite' ? '124px' : '124px')};

    border-radius: ${p => p.theme.radii.image};

    /* margin-right: 14px; */

    @media screen and (${p => p.theme.media.medium}) {
      width: ${p => (p.location === 'favorite' ? '228px' : '228px')};
      height: ${p => (p.location === 'favorite' ? '232px' : '232px')};

      /* margin-right: 24px; */
    }

    @media screen and (${p => p.theme.media.large}) {
      width: ${p => (p.location === 'favorite' ? '318px' : '318px')};
      height: ${p => (p.location === 'favorite' ? '324px' : '324px')};

      /* margin-right: 40px; */
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  border-radius: ${p =>
    p.location === 'recipes' ? p.theme.radii.normal : 'none'};

  background-color: ${p =>
    p.location === 'recipes' ? p.theme.colors.bcgWhiteColor : 'transparent'};

  /* padding: ${p => (p.location === 'recipes' ? '14px' : '0px')}; */

  @media screen and (${p => p.theme.media.medium}) {
    padding: ${p => (p.location === 'recipes' ? '28px' : '0px')};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding: ${p => (p.location === 'recipes' ? '40px' : '0px')};
  }
`;

export const TitleWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-grow: 0;
`;

export const Title = styled.h3`
  display: inline-block;
  max-width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  max-width: calc(80% - 18px);
  height: fit-content;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.subtitleTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    max-width: 300px;
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media screen and (min-width: 1440px) {
    max-width: 650px;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 50%;
  margin-top: ${p => (p.location === 'favorite' ? '14px' : '14px')};
  margin-bottom: ${p => (p.location === 'favorite' ? '25px' : '12px')};
  text-overflow: ellipsis;
  font-family: ${p => p.theme.fonts.body};
  font-size: 8px;
  font-weight: ${p => p.theme.fontWeights.regular};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.description};
  color: ${p => p.theme.colors.mainTextColor};

  & span {
    max-width: 170px;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
    word-break: break-word;
    hyphens: auto;

    @media screen and (${p => p.theme.media.medium}) {
      max-width: 390px;
    }

    @media screen and (${p => p.theme.media.large}) {
      max-width: 680px;
    }
  }

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.extraContent};
    margin-top: ${p => (p.location === 'favorite' ? '28px' : '14px')};
    margin-bottom: ${p => (p.location === 'favorite' ? '58px' : '12px')};
  }

  @media screen and (${p => p.theme.media.large}) {
    margin-top: 30px 0 25px;
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: ${p => p.theme.lineHeights.content};

    & br {
      display: block;
      content: '';
      margin-bottom: 14px;
    }
  }
`;

export const TimeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.p`
  display: inline-flex;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fonts.medium};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.time};

  letter-spacing: ${p => p.theme.letterSpacings.subheader};

  color: ${p => p.theme.colors.subtitleTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
