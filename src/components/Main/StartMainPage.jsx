import { СhooseYourBreakfast } from './СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from './Search/Search';
import { PreviewCategories } from './PreviewCategories/PreviewCategories';
import {
  HeroContainer,
  HeroBox,
  HeroText,
  Selected,
  HeroSubText,
  PreviewCategoriesContainer,
} from './StartMainPage.styled';
import { selectStaticRecipes, selectIsLoading } from 'redux/recipes/selectors';
import { fetchRecipesMainPage } from 'redux/recipes/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'components/Loader';

export const StartMainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(() => {
    dispatch(fetchRecipesMainPage());
  }, [dispatch]);

  const recipesStatic = useSelector(selectStaticRecipes);

  return (
    <>
      {recipesStatic && !isLoading ? (
        <>
          <HeroContainer>
            <HeroBox>
              <HeroText>
                <Selected>So</Selected>Yummy
              </HeroText>
              <HeroSubText>
                "What to cook?" is not only a recipe app, it is, in fact, <br />{' '}
                your cookbook. You can add your own recipes to <br /> save them
                for the future.
              </HeroSubText>
              <СhooseYourBreakfast />
              <Search />
            </HeroBox>
          </HeroContainer>
          <PreviewCategoriesContainer>
            <PreviewCategories recipes={recipesStatic} />
          </PreviewCategoriesContainer>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
