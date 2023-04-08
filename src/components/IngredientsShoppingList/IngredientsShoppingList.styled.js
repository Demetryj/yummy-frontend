import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(5)};
  margin-top: 3.125rem;
  background-color: ${p => p.theme.colors.greenTextColor};
  border-radius: ${p => p.theme.radii.normal};
  @media screen and ${p => p.theme.media.medium} {
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(10)};
  }
  @media screen and ${p => p.theme.media.large} {
    padding: 17px ${p => p.theme.spacing(20)};
  }
`;

export const TitleСontrol = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  @media screen and ${p => p.theme.media.medium} {
    gap: 4.875rem;
  }
  @media screen and ${p => p.theme.media.large} {
    gap: 8.875rem;
  }
`;

export const Title = styled.div`
  font-family: 'Poppins';
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;
  color: ${p => p.theme.colors.whiteTextColor};
  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.xm};
  }
  @media screen and ${p => p.theme.media.large} {
    line-height: 1.44;
  }
`;

export const ShoppingList = styled.ul`
  display: grid;
  text-align: center;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(1, 1fr);
  margin: ${p => p.theme.spacing(0)} auto;
  margin-top: ${p => p.theme.spacing(16)};
  gap: 3.0625rem;
  @media screen and ${p => p.theme.media.medium} {
    margin-top: ${p => p.theme.spacing(25)};
    gap: 5.44rem;
  }
`;
