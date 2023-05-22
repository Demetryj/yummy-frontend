import styled from 'styled-components';

export const RecipeContainer = styled.div`
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.footerLogoBgColor
      : p.theme.colors.bgModalDark};
`;

export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${p => p.theme.spacing(4)};

  @media screen and ${p => p.theme.media.medium} {
    margin-right: ${p => p.theme.spacing(12)};
  }

  @media screen and ${p => p.theme.media.large} {
    margin-right: ${p => p.theme.spacing(20)};
  }

  & img {
    border-radius: ${p => p.theme.radii.normal};
    width: ${p => p.theme.spacing(29)};
    height: ${p => p.theme.spacing(29)};

    @media screen and ${p => p.theme.media.medium} {
      width: ${p => p.theme.spacing(68)};
      height: ${p => p.theme.spacing(68)};
    }

    @media screen and ${p => p.theme.media.large} {
      width: ${p => p.theme.spacing(86)};
      height: ${p => p.theme.spacing(86)};
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(15)}
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(7)};

  &:hover {
    cursor: pointer;
  }

  @media screen and ${p => p.theme.media.medium} {
    padding: ${p => p.theme.spacing(16)} ${p => p.theme.spacing(29)}
      ${p => p.theme.spacing(16)} ${p => p.theme.spacing(20)};
  }

  @media screen and ${p => p.theme.media.large} {
    padding: ${p => p.theme.spacing(14)} ${p => p.theme.spacing(35)}
      ${p => p.theme.spacing(14)} ${p => p.theme.spacing(29)};
  }
`;

export const TextContainer = styled.div`
  max-width: ${p => p.theme.spacing(57)};
  height: ${p => p.theme.spacing(27)};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media screen and ${p => p.theme.media.medium} {
    max-width: ${p => p.theme.spacing(104)};
    height: ${p => p.theme.spacing(57)};
  }

  @media screen and ${p => p.theme.media.medium} {
    max-width: ${p => p.theme.spacing(274)};
    height: ${p => p.theme.spacing(52)};
  }
`;
export const IngDescr = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.38;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.subtitleTextColor};
  display: none;
  position: absolute;
  z-index: 10;
  top: 25%;
  left: 30%;
  padding: ${p => p.theme.spacing(5)};
  background-color: white;
  border: 1px solid ${p => p.theme.colors.greenBgColor};
  width: ${p => p.theme.spacing(70)};
  border-radius: ${p => p.theme.radii.normal};

  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.17;
    top: 25%;
    left: 40%;
    width: ${p => p.theme.spacing(80)};
  }
  @media screen and ${p => p.theme.media.large} {
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 1.17;
    top: 25%;
    left: 30%;
    width: ${p => p.theme.spacing(120)};
  }
`;
export const IngName = styled.p`
  display: block;
  padding: 20px;
  margin-bottom: ${p => p.theme.spacing(2)};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.17;
  letter-spacing: -0.24px;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};
  &:hover ~ ${IngDescr} {
    display: block;
  }
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.17;
    margin-bottom: ${p => p.theme.spacing(4)};
  }
`;

export const IngQuantity = styled.p`
  display: block;
  text-align: center;
  margin-left: auto;
  padding: ${p => p.theme.spacing(2)};
  min-width: ${p => p.theme.spacing(23)};
  max-width: ${p => p.theme.spacing(50)};

  border-radius: ${p => p.theme.radii.superLight};
  background: ${p => p.theme.colors.greenBgColor};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.x};
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteTextColor};

  @media screen and ${p => p.theme.media.medium} {
    max-width: ${p => p.theme.spacing(75)};
    min-width: ${p => p.theme.spacing(34)};
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 1.5;
  }
`;
export const CustomCheckbox = styled.span`
  margin-left: ${p => p.theme.spacing(8)};
  position: relative;
  display: inline-block;
  width: ${p => p.theme.spacing(9)};
  height: ${p => p.theme.spacing(9)};
  background: transparent;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: ${p => p.theme.radii.superLight};
  & svg {
    display: block;
    width: ${p => p.theme.spacing(4)};
    height: ${p => p.theme.spacing(4)};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);

    @media screen and ${p => p.theme.media.medium} {
      width: ${p => p.theme.spacing(9)};
      height: ${p => p.theme.spacing(9)};
    }

    @media screen and ${p => p.theme.media.large} {
    }
  }

  @media screen and ${p => p.theme.media.medium} {
    border: 2px solid rgba(126, 126, 126, 0.5);
    width: ${p => p.theme.spacing(18)};
    height: ${p => p.theme.spacing(18)};
    margin-left: ${p => p.theme.spacing(39)};
  }

  @media screen and ${p => p.theme.media.large} {
    margin-left: ${p => p.theme.spacing(75)};
  }
`;

export const RealCheckbox = styled.input`
  display: none;
  &:checked + ${CustomCheckbox} svg {
    transform: translate(-50%, -50%) scale(1);
  }
`;
