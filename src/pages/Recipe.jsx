import { RecipeIngredientList } from 'components/RecipeIngredientList/RecipeIngredientList';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';
import { useParams } from 'react-router-dom';
import {
  selectError,
  selectIsLoading,
  selectRecipes,
} from 'redux/recipes/selectors';
import { Loader } from 'components/Loader/Loader.jsx';
import { onScrollUp } from 'utils/scrollUp';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipeById } from 'redux/recipes/operations';
const Recipe = () => {
  const { recipeId } = useParams();

  const recipes = useSelector(selectRecipes);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  console.log(recipes);
  console.log(recipeId);
  useEffect(() => {
    dispatch(getRecipeById(recipeId));
    onScrollUp();
  }, [dispatch, recipeId]);

  // return (
  //   <>
  //     {recipe && <RecipePageHero recipe={recipe} />}
  //     {recipe && <RecipeIngredientList recipe={recipe} />}
  //     {recipe && <RecipePreparation recipe={recipe} />}
  //     {isLoading && !error && !recipe && <Loader />}
  //     {error && <p>Something is wrong. Please try again later.</p>}
  //   </>
  // );
};

export default Recipe;
