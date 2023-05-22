import styled from 'styled-components';

export const Card = styled.div`
  display: flex;

  width: ${p => p.theme.spacing(171.5)};
  height: ${p => p.theme.spacing(76)};

  gap: ${p =>
    p.location === 'favorite' ? p.theme.spacing(7) : p.theme.spacing(7)};

  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.bcgWhiteColor
      : p.theme.colors.bgModalDark};

  padding: ${p => (p.location === 'favorite' ? '14px 9px' : '14px 9px')};

  border-radius: ${p => p.theme.radii.normal};

  @media screen and (${p => p.theme.media.medium}) {
    height: ${p => p.theme.spacing(144)};
    width: ${p => p.theme.spacing(352)};

    gap: ${p =>
      p.location === 'favorite' ? p.theme.spacing(12) : p.theme.spacing(12)};
    padding: ${p => (p.location === 'favorite' ? '28px 24px' : '28px 24px')};
  }

  @media screen and (${p => p.theme.media.large}) {
    height: ${p => p.theme.spacing(202)};
    width: ${p => p.theme.spacing(620)};

    gap: ${p =>
      p.location === 'favorite' ? p.theme.spacing(20) : p.theme.spacing(20)};
    padding: ${p =>
      p.location === 'favorite' ? p.theme.spacing(20) : p.theme.spacing(20)};
  }
`;

export const Image = styled.div`
  & img {
    width: ${p =>
      p.location === 'favorite' ? p.theme.spacing(62) : p.theme.spacing(62)};
    height: ${p =>
      p.location === 'favorite' ? p.theme.spacing(62) : p.theme.spacing(62)};

    border-radius: ${p => p.theme.radii.image};

    &:hover {
      cursor: pointer;
    }

    @media screen and (${p => p.theme.media.medium}) {
      width: ${p =>
        p.location === 'favorite'
          ? p.theme.spacing(114)
          : p.theme.spacing(114)};
      height: ${p =>
        p.location === 'favorite'
          ? p.theme.spacing(116)
          : p.theme.spacing(116)};
    }

    @media screen and (${p => p.theme.media.large}) {
      width: ${p =>
        p.location === 'favorite'
          ? p.theme.spacing(159)
          : p.theme.spacing(159)};
      height: ${p =>
        p.location === 'favorite'
          ? p.theme.spacing(162)
          : p.theme.spacing(162)};
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: ${p => p.theme.spacing(93.5)};
  height: ${p => p.theme.spacing(62)};

  @media screen and (${p => p.theme.media.medium}) {
    justify-content: unset;
    width: ${p => p.theme.spacing(202)};
    height: ${p => p.theme.spacing(116)};
  }

  @media screen and (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(414)};
    height: ${p => p.theme.spacing(162)};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${p => (p.location === 'favorite' ? 'start' : 'center')};
  gap: ${p => p.theme.spacing(9)};
  flex-grow: 0;

  @media screen and (${p => p.theme.media.medium}) {
    align-items: ${p => (p.location === 'favorite' ? 'center' : 'start')};
  }
`;

export const Title = styled.h3`
  display: inline-block;
  max-width: ${p => p.theme.spacing(65)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  max-width: calc(80% - 18px);
  height: fit-content;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    max-width: ${p => p.theme.spacing(150)};

    font-size: ${p => p.theme.fontSizes.l};
  }

  @media screen and (${p => p.theme.media.large}) {
    max-width: ${p => p.theme.spacing(325)};
  }
`;

export const Description = styled.div`
  width: ${p =>
    p.location === 'favorite' ? p.theme.spacing(77.5) : p.theme.spacing(81.5)};
  height: ${p =>
    p.location === 'favorite' ? p.theme.spacing(28.5) : p.theme.spacing(25.5)};

  margin-top: ${p =>
    p.location === 'favorite' ? p.theme.spacing(2) : p.theme.spacing(5)};
  margin-bottom: ${p =>
    p.location === 'favorite' ? p.theme.spacing(6) : p.theme.spacing(6)};

  text-overflow: ellipsis;

  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.content};

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteTextColor};

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
  }

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p =>
      p.location === 'favorite' ? p.theme.spacing(149) : p.theme.spacing(202)};
    height: ${p =>
      p.location === 'favorite'
        ? p.theme.spacing(36.5)
        : p.theme.spacing(53.5)};

    margin-top: ${p =>
      p.location === 'favorite' ? p.theme.spacing(9) : p.theme.spacing(7)};
    margin-bottom: ${p =>
      p.location === 'favorite' ? p.theme.spacing(28) : p.theme.spacing(14)};

    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.extraContent};
  }

  @media screen and (${p => p.theme.media.large}) {
    width: ${p =>
      p.location === 'favorite'
        ? p.theme.spacing(339.5)
        : p.theme.spacing(401)};
    height: ${p =>
      p.location === 'favorite' ? p.theme.spacing(79) : p.theme.spacing(67)};

    margin-top: ${p =>
      p.location === 'favorite' ? p.theme.spacing(15) : p.theme.spacing(10)};
    margin-bottom: ${p =>
      p.location === 'favorite' ? p.theme.spacing(19) : p.theme.spacing(33.5)};

    font-size: ${p => p.theme.fontSizes.xm};
    line-height: ${p => p.theme.lineHeights.content};
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Time = styled.p`
  display: inline-flex;

  font-weight: ${p => p.theme.fonts.medium};
  font-size: ${p => p.theme.fontSizes.x};
  line-height: ${p => p.theme.lineHeights.time};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
