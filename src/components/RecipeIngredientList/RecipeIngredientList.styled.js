import styled from 'styled-components';
export const Container = styled.div`
  padding-top: ${p => p.theme.spacing(238)};
  padding-bottom: ${p => p.theme.spacing(25)};
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-bottom: ${p => p.theme.spacing(16)};
    padding-top: ${p => p.theme.spacing(270)};
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Table = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${p => p.theme.radii.normal};
  height: ${p => p.theme.spacing(21)};
  padding: 0 ${p => p.theme.spacing(7)};
  margin-bottom: ${p => p.theme.spacing(12)};
  color: ${p => p.theme.colors.whiteTextColor};
  background-color: ${p => p.theme.colors.greenBgColor};

  @media screen and (min-width: 768px) {
    height: ${p => p.theme.spacing(29)};
    padding: 0 ${p => p.theme.spacing(16)};
    margin-bottom: ${p => p.theme.spacing(25)};
  }

  @media screen and (min-width: 1440px) {
    height: ${p => p.theme.spacing(30)};
    padding: 0 ${p => p.theme.spacing(20)};
    margin-bottom: ${p => p.theme.spacing(25)};
  }
`;
export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 1.5;
  }
`;

export const Label = styled.span`
  margin-left: ${p => p.theme.spacing(8)};

  @media screen and (min-width: 768px) {
    margin-left: ${p => p.theme.spacing(19)};
  }

  @media screen and (min-width: 1440px) {
    margin-left: ${p => p.theme.spacing(55)};
  }
`;
export const InngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(8)};

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(12)};
  }
  @media screen and (min-width: 1440px) {
  }
`;
