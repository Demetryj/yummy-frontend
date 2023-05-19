import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { СhooseYourBreakfast } from './СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from './Search';
import { PreviewCategories } from './PreviewCategories/PreviewCategories';
import {
  HeroContainer,
  HeroBox,
  HeroTitle,
  Selected,
  HeroSubText,
  PreviewCategoriesContainer,
} from './StartMainPage.styled';
import { selectStaticRecipes, selectIsLoading } from 'redux/recipes/selectors';
import { fetchRecipesMainPage } from 'redux/recipes/operations';
import { Loader } from 'components/Loader';

export const StartMainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(fetchRecipesMainPage());
  }, [dispatch]);

  const recipesStatic = useSelector(selectStaticRecipes);

  return (
    <>
      {recipesStatic && !isLoading ? (
        <>
          <HeroContainer mode={theme}>
            <HeroBox>
              <HeroTitle mode={theme}>
                <Selected>So</Selected>Yummy
              </HeroTitle>
              <HeroSubText mode={theme}>
                "What to cook?" is not only a recipe app, it is, in fact, <br />{' '}
                your cookbook. You can add your own recipes to <br /> save them
                for the future.
              </HeroSubText>
              <СhooseYourBreakfast />
              <Search mode={theme} />
            </HeroBox>
          </HeroContainer>
          <PreviewCategoriesContainer>
            <PreviewCategories recipes={recipesStatic} mode={theme} />
          </PreviewCategoriesContainer>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
