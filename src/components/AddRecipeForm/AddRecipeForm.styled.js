import styled from 'styled-components';

export const AddRecipePage = styled.div`
  padding-top: ${p => p.theme.spacing(25)};
  padding-bottom:100px;
  
  @media screen and ${p => p.theme.media.medium} {
    display: flex;
    padding-top: ${p => p.theme.spacing(36)};
    justify-content: center;
    padding-bottom: ${p=>p.theme.spacing(100)};

  }

  @media screen and ${p => p.theme.media.large} {
    padding-top: ${p => p.theme.spacing(50)};
    justify-content: center;
  }
`;

export const AddRecipeWrap = styled.div`
  @media screen and ${p => p.theme.media.large} {
    display: flex;
    gap: ${p => p.theme.spacing(50)};
    justify-content: center;
  }
`;

export const AboutRecipe = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(12)};
  width: ${p => p.theme.spacing(175)};

  @media screen and ${p => p.theme.media.medium} {
    gap: ${p => p.theme.spacing(16)};
    /* width: ${p => p.theme.spacing(200)}; */
  }

  gap: ${p => p.theme.spacing(20)};
`;
export const Form = styled.form`
  /* max-width: 800px; */
`;

export const PageTitle = styled.h1`
  line-height: 28px;
  display: inline-block;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.xl};
  padding-bottom: ${p => p.theme.spacing(36)};
  color: ${p => p.theme.colors.titleTextColor};
  @media screen and ${p => p.theme.media.medium} {
    line-height: 32px;
    padding-bottom: ${p => p.theme.spacing(50)};
    font-size: ${p => p.theme.fontSizes.xxl};
  }
  @media screen and ${p => p.theme.media.large} {
    font-size: ${p => p.theme.fontSizes.sb};
  }
`;

export const FormImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: ${p => p.theme.spacing(16)};
  padding-bottom:  ${p => p.theme.spacing(22)};

  @media screen and ${p => p.theme.media.medium} {
display: flex;
flex-direction: row;
align-items: center;
align-items: stretch;
max-width: ${p => p.theme.spacing(350)};
padding-bottom: ${p => p.theme.spacing(50)};
font-size:${p => p.theme.media.m};
font-weights: ${p => p.theme.media.regular};
  }

  
  @media screen and ${p => p.theme.media.large} {
    display:flex;
    max-width: ${p => p.theme.spacing(400)};
    gap: ${p => p.theme.spacing(20)};
    padding-bottom: ${p => p.theme.spacing(50)};
    font-size: ${p => p.theme.fontSizes.m};
  }

    `;

export const Input = styled.input`
  decoration: none;
  border: none;
  padding: ${p => p.theme.spacing(5)} 0px;
  border-bottom: ${p => p.theme.borders.normal};
  color: ${p => p.theme.colors.greyTextColor};
`;
export const InputSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.spacing(5)} 0px;
`;
export const Select = styled.select`
  border: none;
`;

export const BoxTitle = styled.h2`
  padding-bottom: ${p => p.theme.spacing(12)};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 24px;

  @media screen and ${p => p.theme.media.medium} {
    padding-bottom: ${p => p.theme.spacing(16)};
  }
`;

export const TextAreaContainer = styled.div`
  max-width: ${p => p.theme.spacing(175)};
  padding-bottom: ${p => p.theme.spacing(9)};

  @media screen and ${p => p.theme.media.medium} {
    max-width: ${p => p.theme.spacing(250)};

    padding-bottom: ${p => p.theme.spacing(16)};
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  scroll-behavior: auto;
  height: ${p => p.theme.spacing(50)};
  border-radius: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.textAreaBg};
  padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(8)};

  @media screen and ${p => p.theme.media.medium} {
    height: ${p => p.theme.spacing(110)};
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(10)};
  }
`;

export const FollowSPopular = styled.div`
  @media screen and ${p => p.theme.media.large} {
    max-width: ${p => p.theme.spacing(160)};
  }
`;


export const ButtonAdd = styled.button`
padding: 10px 0;
    cursor: pointer;
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.regular};
    color: ${p =>
        p.theme === 'black'
            ? p.theme.colors.btnDarckBgColor
            : p.styled === 'olive'
                ? p.theme.colors.greenColor
                : p.styled === 'white'
                    ? p.theme.colors.whiteColor
                    : ""
    };
    background-color: ${p =>
        p.theme === 'black'
            ? p.theme.colors.btnDarckBgColor
            : p.styled === 'olive'
                ? p.theme.colors.greenColor
                    : p.styled === 'transparent'
                        ? 'transparent'
                        : ""
    };
    border: none;
    border-radius: 35px 70px;
    border: ${({ styled, theme }) => {
        switch (styled) {
            case 'white':
                return `${p => p.theme.borders.normal} ${theme.colors.whiteColor}`;
            case 'olive':
                return `${p => p.theme.borders.normal} ${theme.colors.greenColor}`;
            default:
                return `${p => p.theme.borders.normal} transparent`;
        }
    }};
    &:hover {
     color: ${p =>
        p.theme === 'black'
            ? p.theme.colors.btnDarckBgColor
            : p.styled === 'olive'
                ? p.theme.colors.greenColor
                : p.styled === 'white'
                    ? p.theme.colors.whiteColor
                    : ""
    };
     background-color: ${p =>
        p.theme === 'black'
            ? p.theme.colors.btnDarckBgColor
            : p.styled === 'olive'
                ? p.theme.colors.greenColor
                : p.styled === 'white'
                    ? p.theme.colors.whiteColor
                    : p.styled === 'transparent'
                        ? 'transparent'
                        : ""
    };
      border: ${({ styled, theme }) => {
        switch (styled) {
            case 'olive':
                return `${p => p.theme.borders.normal} ${theme.colors.greenColor}`;
            default:
                return `${p => p.theme.borders.normal} transparent`;
        }
    }};
  
    border: 
    ${p => p.theme.borders.normal} ${p => p.theme.colors.greenColor};
     };
    padding: 
     // 12px 24px;
    ${p => p.theme.spacing(6)} ${p => p.theme.spacing(12)},
    // 12px 72px,
    ${p => p.theme.spacing(6)} ${p => p.theme.spacing(36)},
    // 50px 42px,
    ${p => p.theme.spacing(25)} ${p => p.theme.spacing(21)},
    // 14px 18px,
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(9)},
    // 18px 38px;
    ${p => p.theme.spacing(9)} ${p => p.theme.spacing(19)},
    // 16px 32px,
    ${p => p.theme.spacing(8)} ${p => p.theme.spacing(16)},
    // 12px 28px,
    ${p => p.theme.spacing(6)} ${p => p.theme.spacing(14)},
    // 6px 14px,
    ${p => p.theme.spacing(3)} ${p => p.theme.spacing(7)},
    // 16px 32px;
    ${p => p.theme.spacing(8)} ${p => p.theme.spacing(16)},
    // 16px 52px,
    ${p => p.theme.spacing(8)} ${p => p.theme.spacing(26)},
    // 12px 32px,
    ${p => p.theme.spacing(6)} ${p => p.theme.spacing(16)},
    // 18px 44px,
    ${p => p.theme.spacing(9)} ${p => p.theme.spacing(22)},
    // 14px 64px;
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(32)},
    // 20px 52px,
    ${p => p.theme.spacing(10)} ${p => p.theme.spacing(26)},
    // 14px 32px;
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(16)},
    // 24px 52px,
    ${p => p.theme.spacing(12)} ${p => p.theme.spacing(26)},
    // 14px 38px;
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(19)},
    // 24px 52px,
    ${p => p.theme.spacing(12)} ${p => p.theme.spacing(26)},
    // 22px 44px;
    ${p => p.theme.spacing(11)} ${p => p.theme.spacing(22)},
    font-size:
    ${p => p.theme.fontSizes.s},
    ${p => p.theme.fontSizes.m},
    ${p => p.theme.fontSizes.xm};
    min-width: 130px;
    line-height: 
    // 16px,
    ${p => p.theme.spacing(8)},
    // 18px,
    ${p => p.theme.spacing(9)},
    // 22px,
    ${p => p.theme.spacing(11)},
    // 24px,
    ${p => p.theme.spacing(12)},
`;