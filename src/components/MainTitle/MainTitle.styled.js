import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p =>
    p.mode === 'light'
      ? p.theme.colors.titleTextColor
      : p.theme.colors.whiteTextColor};
  font-size: ${p => p.theme.fontSizes.xl};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.sb};
  }
`;
