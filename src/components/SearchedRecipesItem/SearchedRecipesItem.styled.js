import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;
export const Img = styled.img`
  border-radius: ${p => p.theme.radii.normal};
`;

export const ImgDescWrapper = styled.div`
  position: absolute;
  bottom: 0%;
  right: 50%;
  transform: translate(50%, -50%);

  width: ${p => p.theme.spacing(153.5)};
  height: ${p => p.theme.spacing(26)};

  background-color: ${p => p.theme.colors.bcgWhiteColor};
  border-radius: ${p => p.theme.radii.normal};

  display: flex;
  align-items: center;

  @media screen and (${p => p.theme.media.medium}) {
  }

  @media screen and (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(134)};
    height: ${p => p.theme.spacing(30)};
  }
`;

export const ImgDesc = styled.p`
  padding: ${p => p.theme.spacing(8)};

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 125%;
  letter-spacing: -0.24px;

  color: ${p => p.theme.colors.middleGreyTextColor};
`;
