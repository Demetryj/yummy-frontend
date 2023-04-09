import styled from 'styled-components';

export const Button = styled.button`
    clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
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
    11px 71px,
    50px 42px,
    14px 18px,
    14px 18px;
    18px 39px;
    

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

