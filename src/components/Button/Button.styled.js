import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  /* width: 204px; */
  padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(34)};
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.greenColor
      : p.theme.colors.darckBgColor};
  color: ${p => p.theme.colors.whiteColor};
  font-weight: ${p => p.theme.fontSizes.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 114%;
  border-radius: ${p => p.theme.radii.light};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.yummyColor
        : p.theme.colors.greenTextColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    /* display: flex; */
    margin-left: ${p => p.theme.spacing(0)};
    margin-right: ${p => p.theme.spacing(0)};
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(25)};

    font-size: ${p => p.theme.fontSizes.m};
    width: 200px;
  }

  @media screen and (${p => p.theme.media.large}) {
    width: 100%;

    padding-top: ${p => p.theme.spacing(10)};
    padding-bottom: ${p => p.theme.spacing(10)};
  }
`;
