import styled from 'styled-components';

export const Button = styled.button`
     border-radius: 6px;
     background-color: ${p => p.theme.colors.greenColor};
     color: ${p => p.theme.colors.whiteColor};
     &:hover {
     color: ${p => p.theme.colors.btnDarckBgColor};
     }
     font-weight: ${p => p.theme.fontWeights.regular};

     width: 204px;
     padding: 11px 71px;
     font-size: ${p => p.theme.fontSizes.s};
     line-height: 16px;

        @media screen and ${(p) => p.theme.media.medium} {
            width: 171px;
            padding: 16px 50px;
            font-size: ${p => p.theme.fontSizes.m};
            line-height: 18px;
        }
    
        @media screen and ${(p) => p.theme.media.large} {
             width: 339px;
             padding: 21px 134px;
        }
`;