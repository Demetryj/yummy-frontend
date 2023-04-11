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
        : ''};

    background-color: ${p =>
      p.theme === 'black'
        ? p.theme.colors.btnDarckBgColor
        : p.styled === 'olive'
        ? p.theme.colors.greenColor
        : p.styled === 'transparent'
        ? 'transparent'
        : ''},
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
         : ''};

     background-color: ${p =>
       p.theme === 'black'
         ? p.theme.colors.btnDarckBgColor
         : p.styled === 'olive'
         ? p.theme.colors.greenColor
         : p.styled === 'white'
         ? p.theme.colors.whiteColor
         : p.styled === 'transparent'
         ? 'transparent'
         : ''};
}
    padding: 
    // 28px 170px,
    ${p => p.theme.spacing(14)} ${p => p.theme.spacing(85)},
    // 12px 106px,
    ${p => p.theme.spacing(6)} ${p => p.theme.spacing(53)},
    // 18px 144px,
    ${p => p.theme.spacing(9)} ${p => p.theme.spacing(72)},
    // 18px 38px;
    ${p => p.theme.spacing(9)} ${p => p.theme.spacing(19)},
    // 22x 134px,
    ${p => p.theme.spacing(11)} ${p => p.theme.spacing(67)},
    // 10px 24px,
    ${p => p.theme.spacing(5)} ${p => p.theme.spacing(12)},
    // 16px 50px,
    ${p => p.theme.spacing(8)} ${p => p.theme.spacing(25)},
    // 14px 84px;
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(42)},
    // 14px 18px,
    ${p => p.theme.spacing(7)} ${p => p.theme.spacing(9)},
    // 12px 72px;
    ${p => p.theme.spacing(6)} ${p => p.theme.spacing(36)},

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
