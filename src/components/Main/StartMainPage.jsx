import { СhooseYourBreakfast } from "./СhooseYourBreakfast/СhooseYourBreakfast";
import { Search } from "./Search/Search";
import { PreviewCategories } from "./PreviewCategories/PreviewCategories";
import {
<<<<<<< HEAD
Container,
ContainerP,
=======
>>>>>>> 3e5a0b2 (use p => p.theme in styling)
ContainerHero,
MainBox, 
TextMain,
Selected,
TextSub,
} from "./StartMainPage.styled"
import { Selected } from "./СhooseYourBreakfast/СhooseYourBreakfast.styled";
import { SearchItemNotFound } from 'components/SearchFragments/SearchItemNotFound';
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
       (<><ContainerHero>
      <TextMain><Selected>So</Selected>Yummy</TextMain>
      <TextSub>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</TextSub>  
      <Container><СhooseYourBreakfast/></Container>
      <Container><Search/></Container>
      </ContainerHero>
      <ContainerP>
        <PreviewCategories recipes={recipesPopular}/>
        </ContainerP></>) : (<Loader/>) }
      </> 
  )
}