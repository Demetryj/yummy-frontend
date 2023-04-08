import styled from 'styled-components';
import recipeMob from 'images/recipePage/recipe_mob.jpg';
import recipeMob2 from 'images/recipePage/recipe_mob@2x.jpg';
import recipeTable from 'images/recipePage/recipe_tabl.jpg';
import recipeTable2 from 'images/recipePage/recipe_tabl@2x.jpg';
import recipeDesk from 'images/recipePage/recipe_desk.jpg';
import recipeDesk2 from 'images/recipePage/recipe_desk@2x.jpg';
import { FiClock } from 'react-icons/fi';

export const Container = styled.div`
  align-items: center;
  margin-left: 0 auto;
  padding-top: ${p => p.theme.spacing(72)};
  padding-bottom: ${p => p.theme.spacing(45)};
  padding-left: ${p => p.theme.spacing(19)};
  padding-right: ${p => p.theme.spacing(19)};
  width: 100%;

  background-image: url(${recipeMob});
  background-size: cover;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${recipeMob2});
  }
  @media screen and (min-width: 768px) {
    padding-bottom: ${p => p.theme.spacing(16)};
    padding-left: ${p => p.theme.spacing(66)};
    padding-right: ${p => p.theme.spacing(66)};
    padding-top: ${p => p.theme.spacing(68)};
    max-width: 768px;
    background-image: url(${recipeTable});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipeTable2});
    }
  }
  @media screen and (min-width: 1440px) {
    padding-left: ${p => p.theme.spacing(196)};
    padding-right: ${p => p.theme.spacing(196)};
    padding-top: ${p => p.theme.spacing(82)};
    max-width: 1600px;
    background-image: url(${recipeDesk});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipeDesk2});
    }
  }
`;
export const Title = styled.h3`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.greenTextColor};
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.sb};
  }

  @media screen and(min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.sb};
  }
`;
export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.blackTextColor};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.33;
  text-align: center;
  margin-top: ${p => p.theme.spacing(9)};
  margin-bottom: ${p => p.theme.spacing(12)};
  @media screen and (min-width: 768px) {
    margin-top: ${p => p.theme.spacing(12)};
    font-size: ${p => p.theme.fontSizes.xm};
  }

  @media screen and(min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xm};
  }
`;
export const ClockBlock = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.spacing(21)};
`;
export const Time = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.blackTextColor};
  font-size: ${p => p.theme.fontSizes.xs};
  margin-left: ${p => p.theme.spacing(3)};
  @media screen and (min-width: 768px) {
    margin-left: ${p => p.theme.spacing(5)};
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const Clock = styled(FiClock)`
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
