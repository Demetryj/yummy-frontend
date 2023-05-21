import styled from 'styled-components';

export const Container = styled.section`
  padding-top: ${p => p.theme.spacing(25)};
  padding-bottom: ${p => p.theme.spacing(50)};

  @media screen and ${p => p.theme.media.medium} {
    padding-top: ${p => p.theme.spacing(28)};
    padding-bottom: ${p => p.theme.spacing(100)};
  }

  @media screen and ${p => p.theme.media.large} {
    padding-top: ${p => p.theme.spacing(42)};
    /* padding-bottom: ${p => p.theme.spacing(118)}; */
  }
`;

export const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(5)};
  margin-top: ${p => p.theme.spacing(25)};
  background-color: ${p => p.theme.colors.greenTextColor};
  border-radius: ${p => p.theme.radii.normal};
  @media screen and ${p => p.theme.media.medium} {
    margin-top: ${p => p.theme.spacing(36)};
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(10)};
  }
  @media screen and ${p => p.theme.media.large} {
    padding: ${p => p.theme.spacing(8)} ${p => p.theme.spacing(20)};
  }
`;

export const PanelСontrol = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${p => p.theme.spacing(12)};
  @media screen and ${p => p.theme.media.medium} {
    gap: ${p => p.theme.spacing(39)};
  }
  @media screen and ${p => p.theme.media.large} {
    gap: ${p => p.theme.spacing(71)};
  }
`;

export const Title = styled.div`
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
  position: relative;
  display: grid;
  text-align: center;
  /* grid-template-rows: repeat(5, 1fr); */
  grid-template-columns: repeat(1, 1fr);
  margin: ${p => p.theme.spacing(0)} auto;
  margin-top: ${p => p.theme.spacing(16)};
  gap: ${p => p.theme.spacing(25)};

  @media screen and ${p => p.theme.media.medium} {
    margin-top: ${p => p.theme.spacing(25)};
    gap: ${p => p.theme.spacing(45)};
  }
`;
