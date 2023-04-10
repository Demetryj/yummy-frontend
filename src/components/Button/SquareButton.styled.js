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
                : ""},
                      "grey": D9D9D9;


    border-radius: ${p => p.theme.radii.light};

    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.mainTextColor};

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
    
    padding: 
    // 28px 170px,
    ${p => p.theme.spasing(14)} ${p => p.theme.spasing(85)},
    // 12px 106px,
    ${p => p.theme.spasing(6)} ${p => p.theme.spasing(53)},
    // 18px 144px,
    ${p => p.theme.spasing(9)} ${p => p.theme.spasing(72)},
    // 18px 38px;
    ${p => p.theme.spasing(9)} ${p => p.theme.spasing(19)},
    // 22x 134px,
    ${p => p.theme.spasing(11)} ${p => p.theme.spasing(67)},
    // 10px 24px,
    ${p => p.theme.spasing(5)} ${p => p.theme.spasing(12)},
    // 16px 50px,
    ${p => p.theme.spasing(8)} ${p => p.theme.spasing(25)},
    // 14px 84px;
    ${p => p.theme.spasing(7)} ${p => p.theme.spasing(42)},
    // 14px 18px,
    ${p => p.theme.spasing(7)} ${p => p.theme.spasing(9)},
    // 12px 72px;
    ${p => p.theme.spasing(6)} ${p => p.theme.spasing(36)},

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
