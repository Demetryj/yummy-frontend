import styled from 'styled-components';
export const Container = styled.div`
  align-items: center;
  margin-left: 0 auto;
  padding-top: ${p => p.theme.spacing(16)};
  /* padding-bottom: ${p => p.theme.spacing(45)}; */
  padding-left: ${p => p.theme.spacing(8)};
  padding-right: ${p => p.theme.spacing(8)};
  width: 100%;

  @media screen and (min-width: 768px) {
    /* padding-bottom: ${p => p.theme.spacing(16)}; */
    padding-left: ${p => p.theme.spacing(16)};
    padding-right: ${p => p.theme.spacing(16)};
    padding-top: ${p => p.theme.spacing(25)};
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: ${p => p.theme.spacing(50)};
    padding-right: ${p => p.theme.spacing(50)};

    max-width: 1600px;
  }
`;
export const Table = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${p => p.theme.radii.normal};
  height: 42px;
  padding: 0 14px;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.whiteTextColor};
  background-color: ${p => p.theme.colors.greenBgColor};

  @media screen and (min-width: 768px) {
    height: 58px;
    padding: 0 ${p => p.theme.spacing(16)};
    margin-bottom: ${p => p.theme.spacing(25)};
  }

  @media screen and (min-width: 1440px) {
    height: 60px;
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
  gap: 16px;
  margin-bottom: ${p => p.theme.spacing(25)};

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: ${p => p.theme.spacing(48)};
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: ${p => p.theme.spacing(50)};
  }
`;
