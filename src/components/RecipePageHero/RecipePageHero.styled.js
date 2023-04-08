import styled from 'styled-components';
import recipeMob from 'images/recipePage/recipe_mob.jpg';
import recipeMob2 from 'images/recipePage/recipe_mob@2x.jpg';
import recipeTable from 'images/recipePage/recipe_tabl.jpg';
import recipeTable2 from 'images/recipePage/recipe_tabl@2x.jpg';
import recipeDesk from 'images/recipePage/recipe_desk.jpg';
import recipeDesk2 from 'images/recipePage/recipe_desk@2x.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 144px;
  padding-bottom: 90px;
  padding-left: 38px;
  padding-right: 38px;
  width: 375px;
  height: 100vh;
  background-image: url(${recipeMob});
  background-size: cover;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${recipeMob2});
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 32 px;
    padding-left: 132px;
    padding-right: 132px;
    padding-top: 136px;
    /* padding: ${p => p.theme.spacing(171)} ${p => p.theme.spacing(62)}; */
    width: 768px;
    background-image: url(${recipeTable});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipeTable2});
    }
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 32 px;
    padding-left: 392px;
    padding-right: 392px;
    padding-top: 164px;
    /* padding: ${p => p.theme.spacing(107.5)} ${p => p.theme.spacing(220)}; */
    width: 1440px;
    background-image: url(${recipeDesk});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipeDesk2});
    }
  }
`;
