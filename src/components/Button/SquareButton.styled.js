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
    
    font-size:
    ${p => p.theme.fontSizes.s},
    ${p => p.theme.fontSizes.m},
    ${p => p.theme.fontSizes.xm};

    min-width: 130px;

    line-height: 
    16px,
    18px,
    21px,
    24px;
`;
