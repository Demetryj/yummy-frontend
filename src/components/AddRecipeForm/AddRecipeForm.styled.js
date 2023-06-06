import styled from 'styled-components';

export const AddRecipePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(36)};

  padding-top: ${p => p.theme.spacing(25)};
  padding-bottom: 100px;

  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => p.theme.spacing(50)};
    padding-top: ${p => p.theme.spacing(28)};
    padding-bottom: ${p => p.theme.spacing(100)};
  }

  @media screen and (${p => p.theme.media.large}) {
    padding-top: ${p => p.theme.spacing(42)};
  }
`;

export const AddRecipeWrap = styled.div`
  @media screen and (${p => p.theme.media.large}) {
    display: flex;
    gap: ${p => p.theme.spacing(50)};
    justify-content: space-between;
  }
`;

export const AboutRecipe = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(12)};
  width: ${p => p.theme.spacing(175)};

  @media screen and (${p => p.theme.media.medium}) {
    gap: ${p => p.theme.spacing(16)};
    /* width: ${p => p.theme.spacing(200)}; */
  }

  gap: ${p => p.theme.spacing(20)};
`;
export const Form = styled.form`
  padding-bottom: 100px;

  @media screen and (${p => p.theme.media.large}) {
    padding-bottom: 0px;
  }
`;

export const FormImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(16)};
  padding-bottom: ${p => p.theme.spacing(22)};

  @media screen and (${p => p.theme.media.medium}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: stretch;
    max-width: ${p => p.theme.spacing(350)};
    padding-bottom: ${p => p.theme.spacing(50)};
    font-size: ${p => p.theme.media.m};
    font-weights: ${p => p.theme.media.regular};
  }

  @media screen and (${p => p.theme.media.large}) {
    display: flex;
    max-width: ${p => p.theme.spacing(400)};
    gap: ${p => p.theme.spacing(20)};
    padding-bottom: ${p => p.theme.spacing(50)};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Input = styled.input`
  border: none;
  padding: ${p => p.theme.spacing(5)} 0px;
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.greyColor
      : p.theme.colors.whiteTextColor};
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};

  &::placeholder {
    color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.blackTextColor
        : p.theme.colors.whiteTextColor};

    opacity: ${p => p.mode === 'light' && '50%'};
  }
`;
export const InputSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.spacing(5)} 0px;

  border-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.greyColor
      : p.theme.colors.whiteTextColor};
`;

export const InputSelectTitle = styled.p`
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};

  opacity: ${p => p.mode === 'light' && '50%'};
`;

export const SelectCategory = styled.select`
  /* padding-right: 13px; */
  border: ${p => p.theme.borders.none};
  outline: none;

  /* padding: 8px 26px 8px 14px; */
  /* width: ${p => p.theme.spacing(61)};

  font-weight: 400;
  font-size: 12px;
  line-height: 12px; */

  /* color: #000000; */

  /* background: #ffffff;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px; */
`;

export const SelectCooking = styled.select`
  /* border: none;
  width: 100px;
  text-align: center; */

  /* padding-right: 13px; */
  border: ${p => p.theme.borders.none};
  outline: none;
`;

export const BoxTitle = styled.h2`
  padding-bottom: ${p => p.theme.spacing(12)};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 24px;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};

  @media screen and (${p => p.theme.media.medium}) {
    padding-bottom: ${p => p.theme.spacing(16)};
  }
`;

export const TextAreaContainer = styled.div`
  max-width: ${p => p.theme.spacing(175)};
  padding-bottom: ${p => p.theme.spacing(9)};

  @media screen and (${p => p.theme.media.medium}) {
    max-width: ${p => p.theme.spacing(250)};

    padding-bottom: ${p => p.theme.spacing(16)};
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(8)};
  width: 100%;
  height: ${p => p.theme.spacing(50)};

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.spacing(3)};
  border-color: ${p =>
    p.mode === 'light' ? 'transparent' : p.theme.colors.whiteColor};

  outline: none;
  scroll-behavior: auto;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.blackTextColor
      : p.theme.colors.whiteTextColor};

  background-color: ${p =>
    p.mode === 'light' ? p.theme.colors.textAreaBg : 'transparent'};

  &::placeholder {
    color: ${p => p.mode !== 'light' && p.theme.colors.whiteTextColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    height: ${p => p.theme.spacing(110)};
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(10)};
  }
`;

export const FollowSPopular = styled.div`
  @media screen and (${p => p.theme.media.large}) {
    max-width: ${p => p.theme.spacing(160)};
  }
`;

export const ButtonAdd = styled.button`
  padding: ${p => p.theme.spacing(6)} ${p => p.theme.spacing(24)};

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.5;

  color: ${p => p.theme.colors.whiteTextColor};
  background-color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.yummyColor
      : p.theme.colors.greenBgColor};

  border-radius: 35px 70px;

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.mode !== 'light' && p.theme.colors.greenColor};

    background-color: ${p =>
      p.mode === 'light'
        ? p.theme.colors.greenBgColor
        : p.theme.colors.whiteColor};
  }

  @media screen and (${p => p.theme.media.medium}) {
    padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(32)};
  }
`;
