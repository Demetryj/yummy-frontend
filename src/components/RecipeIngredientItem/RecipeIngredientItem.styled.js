import styled from 'styled-components';

export const RecipeContainer = styled.li`
  border-radius: ${li => li.theme.radii.normal};
  background-color: ${li => li.theme.colors.footerLogoBgColor};
`;

export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${p => p.theme.spacing(4)};

  @media screen and (min-width: 768px) {
    margin-right: ${p => p.theme.spacing(12)};
  }

  @media screen and (min-width: 1440px) {
    margin-right: ${p => p.theme.spacing(20)};
  }

  & img {
    border-radius: ${p => p.theme.radii.normal};
    width: 57px;
    height: 57px;

    @media screen and (min-width: 768px) {
      width: 136px;
      height: 136px;
    }

    @media screen and (min-width: 1440px) {
      width: 172px;
      height: 172px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(15)}
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(7)};

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding: ${p => p.theme.spacing(15)} ${p => p.theme.spacing(29)}
      ${p => p.theme.spacing(11)} ${p => p.theme.spacing(14)};
  }

  @media screen and (min-width: 1440px) {
    padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(35)}
      ${p => p.theme.spacing(3)} ${p => p.theme.spacing(18)};
  }
`;

export const TextContainer = styled.div`
  max-width: 114px;
  height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    max-width: 208px;
    height: 114px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 547px;
    height: 104px;
  }
`;

export const IngName = styled.p`
  display: block;
  margin-bottom: 4px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.17;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.subtitleTextColor};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.17;
    margin-bottom: ${p => p.theme.spacing(4)};
  }
`;

export const IngDescr = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: 8px;
  line-height: 1.38;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.subtitleTextColor};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.17;
  }
`;
export const IngQuantity = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  padding: ${p => p.theme.spacing(2)};

  max-width: 70px;
  min-width: 47px;
  border-radius: 4px;
  background: ${p => p.theme.colors.greenBgColor};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: 10px;
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteTextColor};

  @media screen and (min-width: 768px) {
    max-width: 150px;
    min-width: 68px;
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 1.5;
  }
`;
