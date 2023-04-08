import styled from 'styled-components';

export const Button = styled.button`
     clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
     background-color: ${p => p.theme.colors.greenBgColor};
     color: ${p => p.theme.colors.whiteColor};
     &:hover {
     background-color: ${p => p.theme.colors.btnDarckBgColor};
     }
     border: none;
     font-weight: ${p => p.theme.fontWeights.regular};

     width: 161px;
     padding: 50px 42px;
     font-size: ${p => p.theme.fontSizes.m};
     line-height: 24px;
`;

