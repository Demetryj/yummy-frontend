import styled from 'styled-components';

export const SelectorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 0 auto;
  gap: ${p => p.theme.spacing(7.5)};

  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => p.theme.spacing(9)};
  }
`;

export const SelectorText = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.33;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.titleTextColor
      : p.theme.colors.whiteTextColor};

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
