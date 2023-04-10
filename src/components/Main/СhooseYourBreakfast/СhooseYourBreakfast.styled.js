import styled from 'styled-components';

export const TextBox = styled.div`
  width: 225px;
  height: 92px;
  background-color: ${p => p.theme.colors.whiteColor};
  border-radius: 8px;
  padding: 8px;
  margin-left: 88px;
  margin-bottom: 115px;

  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
    padding: 12px;
    line-height: 20px;
    letter-spacing: -0.24px;
    width: 261px;
    height: 100px;
    position: absolute;
    right: 32px;
    top: 372px;
  }

  @media (${p => p.theme.media.large}) {
    line-height: 20px;
    padding: 16px;
    width: 298px;
    height: 114px;
    position: absolute;
    right: 122px;
    top: 462px;
  }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.middleGreyTextColor};
  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 18px;
  }

  @media (${p => p.theme.media.large}) {
    line-height: 20px;
  }
`;

export const Selected = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.greenColor};

  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (${p => p.theme.media.large}) {
    line-height: 20px;
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
  line-height: 12px;
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
    line-height: 20px;
  }
`;

export const BsArrowRight = styled.svg`
  width: 18px;
  height: 18px;
  margin-left: 4px;
  display: flex;
`;
