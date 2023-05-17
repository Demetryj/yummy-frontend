import styled from 'styled-components';

export const UserName = styled.p`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 170%;

  color: ${p =>
    p.mode === 'light' ? p.theme.colors.yummyColor : p.theme.colors.whiteColor};

  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
