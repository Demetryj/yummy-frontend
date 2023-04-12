import { СhooseYourBreakfast } from './СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from './Search/Search';
import { PreviewCategories } from './PreviewCategories/PreviewCategories';
import {
ContainerHero,
MainBox, 
TextMain,
Selected,
TextSub,
Container
} from "./StartMainPage.styled";
import { selectRecipesPopular, selectIsLoading } from 'redux/recipes/selectors';
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

  const recipesPopular = useSelector(selectRecipesPopular);

    return ( 
      <>
      {recipesPopular && !isLoading ? 
      (
        <>
          <ContainerHero>
            <MainBox>
              <TextMain><Selected>So</Selected>Yummy</TextMain>
              <TextSub>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</TextSub>  
              <СhooseYourBreakfast/>
              <Search/>
            </MainBox>
          </ContainerHero>
          <Container>
            <PreviewCategories recipes={recipesPopular}/>
          </Container>
        </>
      ) : (<Loader/>) }
      </> 
  )
};
