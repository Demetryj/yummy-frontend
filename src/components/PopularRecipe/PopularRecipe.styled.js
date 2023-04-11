import styled from 'styled-components';

export const Container = styled.div`
  width: ${p => p.theme.spacing(175)};
  @media screen and ${p => p.theme.media.medium} {
    width: ${p => p.theme.spacing(350)};
  }
  @media screen and ${p => p.theme.media.large} {
display: flex;
flex-direction: column ;
  }
`;
export const BoxTitle = styled.h2`
  line-height: 24px;
  display: inline-block;
  padding-bottom: ${p => p.theme.spacing(16)};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.l};
  @media screen and ${p => p.theme.media.medium} {
    padding-bottom: ${p => p.theme.spacing(20)};
  }
`;

export const RecipeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(12)};
  @media screen and ${p => p.theme.media.medium} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: ${p => p.theme.spacing(16)};
  }
  @media screen and ${p => p.theme.media.large} {
display: flex;
flex-direction: column ;
  }

`;

export const ImageDiv = styled.div`
  border-radius: ${p => p.theme.spacing(4)};
`;

export const Image = styled.div`
  display: block;
  width: ${p => p.theme.spacing(50)};
  height: ${p => p.theme.spacing(42)};
  /* max-width: ${p => p.theme.spacing(50)}; */
  /* max-height: ${p => p.theme.spacing(40)}; */
`;

export const Card = styled.div`
  display: flex;
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.popularRecBorder};
  padding-bottom: 16px;
  width: 330px;
`;
export const CardTitle = styled.h4`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 20px;
`;
export const CardText = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 16px;
  color: ${p => p.theme.colors.lightGreyTextColor};
`;

export const AboutRecipe = styled.div`
  padding: 0 10px;
  /* display: flex;
  flex-direction: column;
  gap: 3px; */
`;
