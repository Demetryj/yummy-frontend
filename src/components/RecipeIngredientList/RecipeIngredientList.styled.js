import styled from 'styled-components';
export const Container = styled.div`
  align-items: center;
  margin: 0 auto;
  padding-top: ${p => p.heightHero - 40}px;

  width: 100%;

  @media screen and ${p => p.theme.media.medium} {
    padding-top: ${p => p.heightHero - 26}px;
  }

  @media screen and ${p => p.theme.media.large} {
    padding-top: ${p => p.heightHero - 30}px;
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

  @media screen and ${p => p.theme.media.medium} {
    height: ${p => p.theme.spacing(29)};
    padding: 0 ${p => p.theme.spacing(16)};
    margin-bottom: ${p => p.theme.spacing(25)};
  }

  @media screen and ${p => p.theme.media.large} {
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

  @media screen and ${p => p.theme.media.medium} {
    font-size: ${p => p.theme.fontSizes.xm};
    line-height: 1.5;
  }
`;

export const Label = styled.span`
  margin-left: ${p => p.theme.spacing(8)};

  @media screen and ${p => p.theme.media.medium} {
    margin-left: ${p => p.theme.spacing(19)};
  }

  @media screen and ${p => p.theme.media.large} {
    margin-left: ${p => p.theme.spacing(55)};
  }
`;
export const InngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0;
  gap: ${p => p.theme.spacing(8)};

  @media screen and ${p => p.theme.media.medium} {
    gap: ${p => p.theme.spacing(12)};
  }
`;
