import styled from 'styled-components';
import recipeMob from 'images/recipePage/recipe_mob.jpg';
import recipeMob2 from 'images/recipePage/recipe_mob@2x.jpg';
import recipeTable from 'images/recipePage/recipe_tabl.jpg';
import recipeTable2 from 'images/recipePage/recipe_tabl@2x.jpg';

import recipe from 'images/recipePage/recipe_desk.jpg';
import recipe2 from 'images/recipePage/recipe_desk@2x.jpg';
import { FiClock } from 'react-icons/fi';
import { Loader } from 'components/Loader';

export const Container = styled.div`
  align-items: center;
  margin: 0 auto;
  padding-top: ${p => p.theme.spacing(72)};
  padding-bottom: ${p => p.theme.spacing(45)};
  padding-left: ${p => p.theme.spacing(19)};
  padding-right: ${p => p.theme.spacing(19)};
  width: 100%;
  height: 455px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;

  background-image: url(${recipeMob});

  background-size: cover;
  background-position: center;
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
    height: 495px;

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
    padding-bottom: ${p => p.theme.spacing(16)};
    background-image: url(${recipe});
    height: 493px;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipe2});
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
  /* width: 300px; */
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-top: ${p => p.theme.spacing(12)};
    font-size: ${p => p.theme.fontSizes.xm};
    /* width: 506px; */
  }

  @media screen and(min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xm};
    /* width: 656px; */
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
  width: ${p => p.theme.spacing(7)};
  height: ${p => p.theme.spacing(7)};
  @media screen and (min-width: 768px) {
    width: ${p => p.theme.spacing(10)};
    height: ${p => p.theme.spacing(10)};
  }
`;
export const BtnFavorite = styled.button`
  margin-top: ${p => p.theme.spacing(12)};
  padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(9)};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
  text-align: center;
  color: ${p => p.theme.colors.greenColor};
  border: ${p => p.theme.borders.medium};
  margin-left: auto;
  margin-right: auto;
  display: block;
  border-color: ${p => p.theme.colors.greenColor};
  /* clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); */
  border-radius: 35px 70px;
  background-color: transparent;
  transition: color 250ms, border-color 250ms;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.whiteColor};
    border-color: ${p => p.theme.colors.greenColor};
    background-color: ${p => p.theme.colors.greenColor};
  }
  @media screen and ${p => p.theme.media.medium} {
    padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(22)};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const LoaderFav = styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  color: ${p => p.theme.colors.greenBgColor};
  background-color: transparent;
`;
export const LoaderUnFav = styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  color: ${p => p.theme.colors.whiteColor};
  background-color: transparent;
`;
export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 506px;
  }

  @media screen and(min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xm};
    width: 656px;
  }
`;
