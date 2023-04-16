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

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipeById } from 'redux/recipes/operations';

const Recipe = () => {
  const [heightHero, setHeightHero] = useState(0);
  const { recipeId } = useParams();
  const [recipe] = useSelector(selectRecipes);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
    onScrollUp();
  }, [dispatch, recipeId]);

  return (
    <>
      {recipe && (
        <RecipePageHero getHeightHero={setHeightHero} recipe={recipe} />
      )}
      {recipe && (
        <RecipeIngredientList heightHero={heightHero} recipe={recipe} />
      )}
      {recipe && <RecipePreparation recipe={recipe} />}
      {isLoading && !error && !recipe && <Loader />}
    </>
  );
};

export default Recipe;
