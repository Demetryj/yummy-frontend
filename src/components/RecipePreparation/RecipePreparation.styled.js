import styled from 'styled-components';

export const ImageBlock = styled.div`
  & img {
    border-radius: ${p => p.theme.radii.normal};
    width: 100%;
    height: ${p => p.theme.spacing(125)};
    object-fit: cover;

    @media screen and ${p => p.theme.media.medium} {
      height: ${p => p.theme.spacing(166)};
      width: ${p => p.theme.spacing(217)};
    }

    @media screen and ${p => p.theme.media.large} {
      width: ${p => p.theme.spacing(217)};
    }
  }
`;

export const Container = styled.div`
  padding-top: ${p => p.theme.spacing(25)};
  padding-bottom: ${p => p.theme.spacing(50)};
  width: 100%;

  @media screen and ${p => p.theme.media.medium} {
    padding-bottom: ${p => p.theme.spacing(100)};
    padding-top: ${p => p.theme.spacing(50)};
  }
  @media screen and ${p => p.theme.media.large} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const InstructionWrapper = styled.div`
  margin-bottom: ${p => p.theme.spacing(20)};

  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.theme.spacing(22)};
  }

  @media screen and ${p => p.theme.media.large} {
    /* width: ${p => p.theme.spacing(284)}; */
    margin-right: 50px;
    margin-bottom: 0;
  }
`;

export const InstructionTitle = styled.title`
  display: block;
  margin-bottom: ${p => p.theme.spacing(15)};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and ${p => p.theme.media.medium} {
    margin-bottom: ${p => p.theme.spacing(16)};
    letter-spacing: -0.24px;
  }
`;

export const InstructionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.17;
  letter-spacing: -0.02em;
  gap: 14px;

  @media screen and ${p => p.theme.media.medium} {
    gap: ${p => p.theme.spacing(9)};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.29;
  }
`;

export const InstructionText = styled.li`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: flex-start;
  gap: ${p => p.theme.spacing(7)};

  & span {
    display: flex;
    justify-content: center;
    gap: ${p => p.theme.spacing(5)};
    width: ${p => p.theme.spacing(10)};
    height: ${p => p.theme.spacing(10)};
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(4)}
      ${p => p.theme.spacing(1)};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.5;
    color: ${p => p.theme.colors.whiteTextColor};
    background: ${p => p.theme.colors.greenBgColor};
    border-radius: ${p => p.theme.radii.round};
    flex: none;

    @media screen and ${p => p.theme.media.medium} {
      padding: 0 ${p => p.theme.spacing(4)} ${p => p.theme.spacing(1)};
      font-size: ${p => p.theme.fontSizes.s};
      line-height: 1.5;
    }
  }

  & p {
    padding-top: ${p => p.theme.spacing(1)};
    width: ${p => p.theme.spacing(155)};
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.blackTextColor
        : p.theme.colors.whiteTextColor};

    @media screen and ${p => p.theme.media.medium} {
      width: ${p => p.theme.spacing(330)};
    }

    @media screen and ${p => p.theme.media.large} {
      width: 100%;
    }
  }
`;
