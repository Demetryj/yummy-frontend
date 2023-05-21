import styled from 'styled-components';

export const IngredientsContainet = styled.div`
  max-width: ${p => p.theme.spacing(175)};
  padding-bottom: ${p => p.theme.spacing(22)};

  @media screen and (${p => p.theme.media.medium}) {
    max-width: ${p => p.theme.spacing(350)};
  }

  /* max-width: 600px; */
  /* padding-bottom: 100px; */
`;
export const BoxTitle = styled.h2`
  display: inline-block;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 24px;

  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.subtitleTextColor
      : p.theme.colors.whiteTextColor};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: ${p => p.theme.spacing(45)};
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(5)};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.lightGreyTextColor};
  border-radius: ${p => p.theme.spacing(9)};
`;
export const IngListSetting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${p => p.theme.spacing(12)};

  @media screen and (${p => p.theme.media.medium}) {
    padding-bottom: ${p => p.theme.spacing(16)};
  }
`;

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(18)};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectCustomisation = styled.div`
  width: ${p => p.theme.spacing(100)};

  @media screen and (${p => p.theme.media.medium}) {
    width: ${p => p.theme.spacing(200)};
  }
`;

export const Input = styled.input`
  max-width: 50px;
  border: ${p => p.theme.borders.none};
  text-align: end;
  height: ${p => p.theme.spacing(25)};
  border-radius: 6px 0 0 6px;
  background-color: ${p => p.theme.colors.inputBgColor};

  @media screen and (${p => p.theme.media.medium}) {
    height: ${p => p.theme.spacing(30)};
  }
`;

export const SelectUnit = styled.select`
  max-width: 60px;

  border: ${p => p.theme.borders.none};
  height: ${p => p.theme.spacing(25)};
  padding: ${p => p.theme.spacing(2.5)};
  border-radius: 0 6px 6px 0;
  background-color: ${p => p.theme.colors.inputBgColor};

  @media screen and (${p => p.theme.media.medium}) {
    height: ${p => p.theme.spacing(30)};
  }
`;
