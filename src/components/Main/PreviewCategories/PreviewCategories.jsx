import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipesPopular, selectIsLoading } from '../../../redux/recipes/selectors';
import { fetchRecipesMainPage } from '../../../redux/recipes/operations';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { MainTitle } from '../../MainTitle/MainTitle';
import { List, BtnRecipe, Button } from "./PreviewCategories.styled";
import { useEffect } from 'react';
import { useMedia } from "hooks/useMedia";

export const PreviewCategories = () => {
  const { isMobile, isTablet, isDesktop} = useMedia();
  let numCard;

  if (isMobile){numCard = 1} 
  else if(isTablet){numCard = 2}
  else {numCard = 4};

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(()=> {
    dispatch(fetchRecipesMainPage());
  },[]);
  
  const recipesPopular = useSelector(selectRecipesPopular); 
    return (
    <>
       <List>
        {recipesPopular && !isLoading ? Object.keys(recipesPopular).map((key) => {
          const recipes = recipesPopular[key];
      return <li key={uuidv4()}> 
      <MainTitle title={key}/>
      <List>
        {recipes.slice(0,numCard).map((recipe) => { 
          return  <BtnRecipe to={`/recipe/${recipe._id}`}>
          <li key={recipe._id}>{recipe.title}</li>
          </BtnRecipe>})}
      </List>
      <Link to={`/categories/${recipesPopular[key].category}`}> 
      <Button>See all</Button>
      </Link>
    </li>
  }) : <Loader/>}
       </List>
       <Link to='/categories'>
       <Button>Other categories</Button>
       </Link>
      </>
  );
};

