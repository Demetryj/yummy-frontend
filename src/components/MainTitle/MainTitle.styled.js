import styled from 'styled-components';

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.titleTextColor};
  @media screen and (min-width: 440px) {
            font-size: ${p => p.theme.fontSize.xl};
        }
    
        @media screen and ${(p) => p.theme.media.medium} {
            font-size: ${p => p.theme.fontSize.xxl};
        }
    
        @media screen and ${(p) => p.theme.media.large} {
            font-size: ${p => p.theme.fontSize.sb};
        }
`;