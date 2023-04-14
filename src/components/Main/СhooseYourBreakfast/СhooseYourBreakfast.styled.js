import styled from 'styled-components';

export const TextBox = styled.div`
  width: 225px;
  height: ${p => p.theme.spacing(46)};
  background-color: ${p => p.theme.colors.whiteColor};
  border-radius: 8px;
  padding: ${p => p.theme.spacing(4)};
  margin-left: ${p => p.theme.spacing(44)};
  margin-bottom: 115px;

  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
    padding: ${p => p.theme.spacing(6)};
    line-height:  ${p => p.theme.spacing(10)};
    letter-spacing: -0.24px;
    width: 261px;
    height: ${p => p.theme.spacing(50)};
    position: absolute;
    right: ${p => p.theme.spacing(16)};
    top: 372px;
  }

  @media (${p => p.theme.media.large}) {
    line-height: ${p => p.theme.spacing(10)};
    padding: ${p => p.theme.spacing(8)};
    width: 298px;
    height: 114px;
    position: absolute;
    right: 122px;
    top: ${p => p.theme.spacing(231)};
  }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.spacing(9)};
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.middleGreyTextColor};
  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 18px;
  }

  @media (${p => p.theme.media.large}) {
    line-height: ${p => p.theme.spacing(10)};
  }
`;

export const Selected = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.spacing(9)};
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.greenColor};

  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (${p => p.theme.media.large}) {
    line-height: ${p => p.theme.spacing(10)};
  }
`;

export const Button = styled.button`
  margin-top: 7px;
  margin-left: 135px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.x};
  line-height: ${p => p.theme.spacing(6)};
  letter-spacing: 0.2px;
  color: ${p => p.theme.colors.middleGreyTextColor};
  &:hover {
    color: ${p => p.theme.colors.greenColor};
    svg path {
      stroke: ${p => p.theme.colors.greenColor};
    }
  }

  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (${p => p.theme.media.large}) {
    margin-left: 164px;
    line-height: ${p => p.theme.spacing(10)};
  }
`;

export const BsArrowRight = styled.svg`
  width: 18px;
  height: 18px;
  margin-left: 4px;
  display: flex;
`;
