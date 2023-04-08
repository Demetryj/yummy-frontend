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
import { Box } from 'components/Box';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipeById } from 'redux/recipes/operations';
const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe] = useSelector(selectRecipes);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [dispatch, recipeId]);
  return (
    <div
    // width={{ xs: 375, md: 768, lg: 1440 }}
    // height={200}
    // p={{ xs: 10, md: 25, lg: 50 }}
    // bg="greenBgColor"
    >
      {recipe && <RecipePageHero recipe={recipe} />}
      {recipe && <RecipeIngredientList recipe={recipe} />}
      {recipe && <RecipePreparation recipe={recipe} />}
      {isLoading && !error && !recipe && <Loader />}
    </div>
  );
};

export default Recipe;
