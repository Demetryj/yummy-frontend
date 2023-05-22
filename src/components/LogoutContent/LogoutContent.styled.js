import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';

export const Cross = styled(RxCross2)`
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  top: -27px;
  right: -7px;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteTextColor};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    width: 24px;
    height: 24px;
    top: -27px;
    right: -18px;
  }
`;

export const GreenButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.whiteColor};
  background-color: ${p => p.theme.colors.greenColor};
  width: 100%;
  margin-right: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(10.5)};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontWeights.s};
  line-height: 129%;
  text-align: center;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.light};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.btnDarckBgColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    margin-right: ${p => p.theme.spacing(8)};
    padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(19.5)};
    font-size: ${p => p.theme.fontWeights.m};
  }
`;

export const CancelButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.mainTextColor};
  background: ${p => p.theme.colors.greyColor};
  width: 100%;
  padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(10.5)};

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontWeights.s};
  line-height: 1.29;
  text-align: center;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.light};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.bcgWhiteColor};
    border: ${p => p.mode === 'light' && '1px solid #23262A'};
  }

  @media screen and (${p => p.theme.media.medium}) {
    padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(19.5)};
    font-size: ${p => p.theme.fontWeights.m};
  }
`;

export const TextModal = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.mainTextColor
      : p.theme.colors.whiteTextColor};
  margin-bottom: ${p => p.theme.spacing(12)};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.xm};
    margin-bottom: ${p => p.theme.spacing(16)};
  }
`;
