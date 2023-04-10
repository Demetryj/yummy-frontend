import styled from 'styled-components';

export const Button = styled.button`
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
    ${p => p.theme.spasing(6)} ${p => p.theme.spasing(12)},
    // 12px 72px,
    ${p => p.theme.spasing(6)} ${p => p.theme.spasing(36)},
    // 50px 42px,
    ${p => p.theme.spasing(25)} ${p => p.theme.spasing(21)},
    // 14px 18px,
    ${p => p.theme.spasing(7)} ${p => p.theme.spasing(9)},
    // 18px 38px;
    ${p => p.theme.spasing(9)} ${p => p.theme.spasing(19)},
    // 16px 32px,
    ${p => p.theme.spasing(8)} ${p => p.theme.spasing(16)},
    // 12px 28px,
    ${p => p.theme.spasing(6)} ${p => p.theme.spasing(14)},
    // 6px 14px,
    ${p => p.theme.spasing(3)} ${p => p.theme.spasing(7)},
    // 16px 32px;
    ${p => p.theme.spasing(8)} ${p => p.theme.spasing(16)},
    // 16px 52px,
    ${p => p.theme.spasing(8)} ${p => p.theme.spasing(26)},
    // 12px 32px,
    ${p => p.theme.spasing(6)} ${p => p.theme.spasing(16)},
    // 18px 44px,
    ${p => p.theme.spasing(9)} ${p => p.theme.spasing(22)},
    // 14px 64px;
    ${p => p.theme.spasing(7)} ${p => p.theme.spasing(32)},
    // 20px 52px,
    ${p => p.theme.spasing(10)} ${p => p.theme.spasing(26)},
    // 14px 32px;
    ${p => p.theme.spasing(7)} ${p => p.theme.spasing(16)},
    // 24px 52px,
    ${p => p.theme.spasing(12)} ${p => p.theme.spasing(26)},
    // 14px 38px;
    ${p => p.theme.spasing(7)} ${p => p.theme.spasing(19)},
    // 24px 52px,
    ${p => p.theme.spasing(12)} ${p => p.theme.spasing(26)},
    // 22px 44px;
    ${p => p.theme.spasing(11)} ${p => p.theme.spasing(22)},

    font-size:
    ${p => p.theme.fontSizes.s},
    ${p => p.theme.fontSizes.m},
    ${p => p.theme.fontSizes.xm};

    min-width: 130px;

    line-height: 
    // 16px,
    ${p => p.theme.spasing(8)},
    // 18px,
    ${p => p.theme.spasing(9)},
    // 22px,
    ${p => p.theme.spasing(11)},
    // 24px,
    ${p => p.theme.spasing(12)},
`;

