import styled from 'styled-components';

export const SearchFormContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${p => p.theme.spacing(147.5)};
  height: ${p => p.theme.spacing(26)};

  background-color: ${p => p.theme.colors.whiteTextColor};
  border-top-left-radius: ${p => p.theme.radii.modalProfile};
  border-top-right-radius: ${p => p.theme.spacing(40)};
  border-bottom-left-radius: ${p => p.theme.spacing(40)};
  border-bottom-right-radius: ${p => p.theme.radii.modalProfile};
  border: ${p => p.theme.colors.whiteTextColor};
  color: ${p => p.theme.colors.greyTextColor};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.spacing(9)};

  @media (${p => p.theme.media.medium}) {
    margin: ${p => p.theme.spacing(0)} ${p => p.theme.spacing(0)}
      ${p => p.theme.spacing(97.5)};
    width: ${p => p.theme.spacing(184.5)};
    height: ${p => p.theme.spacing(29.5)};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.spacing(12)};
  }

  @media (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(255)};
    height: ${p => p.theme.spacing(35.5)};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.spacing(12)};
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  border-top-left-radius: ${p => p.theme.radii.modalProfile};
  border-top-right-radius: ${p => p.theme.spacing(40)};
  border-bottom-left-radius: ${p => p.theme.spacing(40)};
  border-bottom-right-radius: ${p => p.theme.radii.modalProfile};

  /* @media (${p => p.theme.media.medium}) {
    box-shadow: 0 1px 0 1px ${p => p.theme.colors.greenTextColor};
  }

  @media (${p => p.theme.media.large}) {
    box-shadow: 0 2px 0 2px ${p => p.theme.colors.greenTextColor};
  } */
`;

export const Input = styled.input`
  width: 100%;
  border-top-left-radius: ${p => p.theme.radii.modalProfile};
  border-top-right-radius: ${p => p.theme.spacing(40)};
  border-bottom-left-radius: ${p => p.theme.spacing(40)};
  border-bottom-right-radius: ${p => p.theme.radii.modalProfile};
  border: 1px solid
    ${p =>
      p.mode === 'light'
        ? p.theme.colors.greyColor
        : p.theme.colors.whiteColor};

  background-color: ${p =>
    p.mode === 'light' ? p.theme.colors.whiteColor : p.theme.colors.bgMainDark};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.spacing(9)};
  padding-left: ${p => p.theme.spacing(16)};
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.titleTextColor
      : p.theme.colors.whiteColor};

  @media (${p => p.theme.media.medium}) {
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.spacing(12)};
  }

  /* &:hover {
    border: ${p => p.theme.borders.none};
    outline: ${p => p.theme.borders.none};
  }

  &:active {
    border: ${p => p.theme.borders.none};
    outline: ${p => p.theme.borders.none};
  }

  &:focus {
    border: ${p => p.theme.borders.none};
    outline: ${p => p.theme.borders.none};
  } */

  &::placeholder {
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.spacing(9)};
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.greyTextColor
        : p.theme.colors.whiteTextColor};

    @media (${p => p.theme.media.medium}) {
      font-size: ${p => p.theme.fontSizes.m};
      line-height: ${p => p.theme.spacing(12)};
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  display: block;
  width: ${p => p.theme.spacing(56.5)};
  height: ${p => p.theme.spacing(26.5)};
  top: ${p => p.theme.spacing(-0.25)};
  right: ${p => p.theme.spacing(-0.25)};

  border-top-left-radius: ${p => p.theme.radii.modalProfile};
  border-top-right-radius: ${p => p.theme.spacing(40)};
  border-bottom-left-radius: ${p => p.theme.spacing(40)};
  border-bottom-right-radius: ${p => p.theme.radii.modalProfile};

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.spacing(10.5)};
  text-align: center;

  color: ${p => p.theme.colors.whiteTextColor};
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.yummyColor
      : p.theme.colors.greenBgColor};
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  outline: ${p => p.theme.borders.none};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.mode !== 'light' && p.theme.colors.yummyColor};
    background: ${p => p.theme.colors.greenTextColor};
  }

  @media (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(80.5)};
    height: ${p => p.theme.spacing(30)};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.spacing(12)};
  }

  @media (${p => p.theme.media.large}) {
    width: ${p => p.theme.spacing(80.5)};
    height: ${p => p.theme.spacing(35.5)};
  }
`;
