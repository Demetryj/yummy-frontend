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
  background: ${p => p.theme.colors.greenColor};
  width: 100%;
  padding-top: ${p => p.theme.spacing(7)};
  padding-bottom: ${p => p.theme.spacing(7)};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontWeights.s};
  line-height: 129%;
  text-align: center;
  border-radius: ${p => p.theme.radii.light};
`;

export const CancelButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.mainTextColor};
  background: #d9d9d9;
  width: 100%;
  padding-top: ${p => p.theme.spacing(7)};
  padding-bottom: ${p => p.theme.spacing(7)};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontWeights.s};
  line-height: 129%;
  text-align: center;
  border-radius: ${p => p.theme.radii.light};
`;

export const TextModal = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 129%;
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
