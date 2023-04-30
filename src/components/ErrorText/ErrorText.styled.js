import styled from 'styled-components';
export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1;
  text-align: center;
  letter-spacing: -0.02em;

  color: ${p => p.theme.colors.blackTextColor};
  padding-top: ${p => p.theme.spacing(90)};
  @media screen and ${p => p.theme.media.medium} {
    padding-top: ${p => p.theme.spacing(150)};
    font-size: ${p => p.theme.fontSizes.xm};
  }

  @media screen and ${p => p.theme.media.large} {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
