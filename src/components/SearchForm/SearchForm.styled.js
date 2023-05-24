import styled from 'styled-components';

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
  width: 90%;
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

  transition: ${p => p.theme.transitions.main};

  &:hover {
    color: ${p => p.mode !== 'light' && p.theme.colors.yummyColor};
    background-color: ${p =>
      p.mode === 'light' && p.theme.colors.btnDarckBgColor};
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
