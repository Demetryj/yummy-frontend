import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

export const TextBox = styled.div`
  width: ${p => p.theme.spacing(112.5)};
  height: ${p => p.theme.spacing(46)};
  background-color: ${p => p.theme.colors.whiteColor};
  border-radius: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};
  margin-left: ${p => p.theme.spacing(44)};
  margin-bottom: ${p => p.theme.spacing(57.5)};

  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
    padding: ${p => p.theme.spacing(6)};
    line-height: ${p => p.theme.spacing(10)};
    letter-spacing: -0.24px;
    width: ${p => p.theme.spacing(130.5)};
    height: ${p => p.theme.spacing(50)};
    position: absolute;
    right: ${p => p.theme.spacing(16)};
    top: ${p => p.theme.spacing(186)};
  }

  @media (${p => p.theme.media.large}) {
    line-height: ${p => p.theme.spacing(10)};
    padding: ${p => p.theme.spacing(8)};
    width: ${p => p.theme.spacing(149)};
    height: ${p => p.theme.spacing(57)};
    position: absolute;
    right: ${p => p.theme.spacing(61)};
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
    line-height: ${p => p.theme.spacing(9)};
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
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  margin-top: ${p => p.theme.spacing(3.5)};
  margin-left: auto;

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.x};
  line-height: ${p => p.theme.spacing(6)};
  letter-spacing: ${p => p.theme.spacing(0.1)};
  color: ${p => p.theme.colors.middleGreyTextColor};
  background-color: transparent;

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
    line-height: ${p => p.theme.spacing(10)};
  }
`;

export const ArrowRight = styled(BsArrowRight)`
  width: ${p => p.theme.spacing(9)};
  height: ${p => p.theme.spacing(9)};
`;
