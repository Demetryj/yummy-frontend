import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.div`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 100%;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${p => p.theme.colors.titleTextColor};

  margin-bottom: ${p => p.theme.spacing(25)};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.xxl};
    margin-bottom: ${p => p.theme.spacing(20)};
  }

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.sb};
    margin-bottom: ${p => p.theme.spacing(25)};
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${p => p.theme.spacing(12)};

  width: ${p => p.theme.spacing(147.5)};
  height: ${p => p.theme.spacing(26.5)};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(181)};
    height: ${p => p.theme.spacing(28.5)};
    margin-bottom: ${p => p.theme.spacing(14)};
  }

  @media screen and (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(255)};
    height: ${p => p.theme.spacing(35.5)};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: ${p => p.theme.spacing(26.5)};
  padding-left: ${p => p.theme.spacing(16)};
  border: ${p => p.theme.borders.normal}
    ${p => p.theme.colors.searchBorderColor};
  border-radius: 24px 44px;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.subtitleTextColor};

  &:focus-visible,
  &:focus {
    outline: none;
  }

  @media screen and (${p => p.theme.media.medium}) {
    height: ${p => p.theme.spacing(28.5)};
    padding-left: ${p => p.theme.spacing(19)};
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.media.large}) {
    height: ${p => p.theme.spacing(35)};
    padding-left: ${p => p.theme.spacing(24)};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Btn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: ${p => p.theme.spacing(56.5)};
  height: 100%;

  display: flex;
  align-items: center;

  background-color: ${p => p.theme.colors.greenBgColor};
  color: ${p => p.theme.colors.whiteColor};
  border-radius: 24px 44px;
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(16)};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;

  &:hover {
    background-color: ${p => p.theme.colors.btnDarckBgColor};
    transition: all 250ms linear 0s;
  }

  @media screen and (${p => p.theme.media.medium}) {
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(26)};
    font-size: ${p => p.theme.fontSizes.m};
    justify-content: center;
    width: ${p => p.theme.spacing(80.5)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding: ${p => p.theme.spacing(11.5)} ${p => p.theme.spacing(26)};
  }
`;

export const SelectorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: center;
  z-index: 9999;
  width: ${p => p.theme.spacing(111.5)};
  margin: 0 auto ${p => p.theme.spacing(21)};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(136.5)};
  }
  @media screen and (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(155)};
  }
`;

export const Icon = styled(IoIosArrowDown)`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(50%, -50%);

  color: ${p => p.theme.colors.greenBgColor};
`;

export const SelectorText = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.33;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.titleTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.28;
  }

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 1.33;
  }
`;

export const SelectorType = styled.select`
  height: ${p => p.theme.spacing(17)};
  width: ${p => p.theme.spacing(73)};

  padding-left: ${p => p.theme.spacing(7.5)};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.light};

  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: ${p => p.theme.colors.middleGreyTextColor};
  background-color: ${p => p.theme.colors.whiteColor};
  opacity: 0.5;
  appearance: none;

  &:focus-visible,
  &:focus {
    outline: none;
  }

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.media.large}) {
    height: ${p => p.theme.spacing(24.5)};
    width: ${p => p.theme.spacing(99)};
  }
`;

export const SelectorOption = styled.option`
  background-color: ${p => p.theme.colors.whiteColor};
  border-radius: 0px 0px ${p => p.theme.radii.light} ${p => p.theme.radii.light};

  &:focus-visible,
  &:focus {
    outline: none;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 343px);
  justify-content: center;
  gap: ${p => p.theme.spacing(14)};

  @media screen and (${p => p.theme.media.medium}) {
    grid-template-columns: repeat(2, 336px);
    ${p => p.theme.spacing(16)};
  }

  @media screen and (${p => p.theme.media.large}) {
    grid-template-columns: repeat(4, 300px);
    gap: ${p => p.theme.spacing(50)} ${p => p.theme.spacing(7)};
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
`;
export const Img = styled.img`
border-radius: ${p => p.theme.radii.normal};
`

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
