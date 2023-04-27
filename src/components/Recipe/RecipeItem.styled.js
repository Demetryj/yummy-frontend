import styled from 'styled-components';

export const Card = styled.div`
  display: flex;

  width: 343px;
  height: 152px;

  gap: ${p => (p.location === 'favorite' ? '14px' : '14px')};

  background-color: ${p =>
    p.location === 'favorite'
      ? p.theme.colors.bcgWhiteColor
      : p.theme.colors.bcgWhiteColor};

  padding: ${p => (p.location === 'favorite' ? '14px 9px' : '14px 9px')};

  border-radius: ${p => p.theme.radii.normal};

  @media screen and (${p => p.theme.media.medium}) {
    height: 288px;
    width: 704px;

    gap: ${p => (p.location === 'favorite' ? '24px' : '24px')};
    padding: ${p => (p.location === 'favorite' ? '28px 24px' : '28px 24px')};
  }

  @media screen and (${p => p.theme.media.large}) {
    height: 404px;
    width: 1240px;

    gap: ${p => (p.location === 'favorite' ? '40px' : '40px')};
    padding: ${p => (p.location === 'favorite' ? '40px' : '40px')};
  }
`;

export const Image = styled.div`
  & img {
    width: ${p => (p.location === 'favorite' ? '124px' : '124px')};
    height: ${p => (p.location === 'favorite' ? '124px' : '124px')};

    border-radius: ${p => p.theme.radii.image};

    &:hover {
      cursor: pointer;
    }

    @media screen and (${p => p.theme.media.medium}) {
      width: ${p => (p.location === 'favorite' ? '228px' : '228px')};
      height: ${p => (p.location === 'favorite' ? '232px' : '232px')};
    }

    @media screen and (${p => p.theme.media.large}) {
      width: ${p => (p.location === 'favorite' ? '318px' : '318px')};
      height: ${p => (p.location === 'favorite' ? '324px' : '324px')};
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex-grow: 1;

  @media screen and (${p => p.theme.media.medium}) {
    justify-content: unset;
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

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
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
  width: ${p => (p.location === 'favorite' ? '155px' : '163px')};
  height: ${p => (p.location === 'favorite' ? '57px' : '51px')};

  margin-top: ${p => (p.location === 'favorite' ? '14px' : '14px')};
  margin-bottom: ${p => (p.location === 'favorite' ? '25px' : '12px')};

  text-overflow: ellipsis;

  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.content};

  color: ${p => p.theme.colors.mainTextColor};

  & span {
    max-width: 100%;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
    word-break: break-word;
    hyphens: auto;

    @media screen and (${p => p.theme.media.medium}) {
      max-width: 100%;
    }

    @media screen and (${p => p.theme.media.large}) {
      max-width: 100%;
    }
  }

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => (p.location === 'favorite' ? '298px' : '404px')};
    height: ${p => (p.location === 'favorite' ? '73px' : '107px')};

    margin-top: ${p => (p.location === 'favorite' ? '18px' : '14px')};
    margin-bottom: ${p => (p.location === 'favorite' ? '58px' : '28px')};

    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.extraContent};
  }

  @media screen and (${p => p.theme.media.large}) {
    width: ${p => (p.location === 'favorite' ? '679px' : '100%')};
    height: ${p => (p.location === 'favorite' ? '158px' : '134px')};

    margin-top: ${p => (p.location === 'favorite' ? '30px' : '20px')};
    margin-bottom: ${p => (p.location === 'favorite' ? '38px' : '67px')};

    font-size: ${p => p.theme.fontSizes.xm};
    line-height: ${p => p.theme.lineHeights.content};
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

  font-weight: ${p => p.theme.fonts.medium};
  font-size: ${p => p.theme.fontSizes.x};
  line-height: ${p => p.theme.lineHeights.time};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};

  color: ${p => p.theme.colors.subtitleTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
