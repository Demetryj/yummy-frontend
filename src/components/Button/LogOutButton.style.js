import styled from 'styled-components';

export const Button = styled.button`
     border-radius: 6px;
     background-color: ${p => p.theme.colors.greenColor};
     color: ${p => p.theme.colors.whiteColor};
     &:hover {
     background-color: ${p => p.theme.colors.btnDarckBgColor};
     color: ${p => p.theme.colors.whiteColor};
     }
     font-weight: ${p => p.theme.fontWeights.regular};

     width: 137px;
     padding: 14px 18px;
     font-size: ${p => p.theme.fontSizes.s};
     line-height: 18px;

        @media screen and ${(p) => p.theme.media.medium} {
            width: 192px;
            padding: 18px 39px;
            font-size: ${p => p.theme.fontSizes.m};
        }
`;