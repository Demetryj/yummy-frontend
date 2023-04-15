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

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipeById } from 'redux/recipes/operations';
const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const recipeData = useSelector(selectRecipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeById({ recipeId }));
  }, [dispatch, recipeId]);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    setRecipe({ ...recipeData[0] });
  }, [recipeData]);

  return (
    <>
      {Object.keys(recipe).length !== 0 && (
        <>
          <RecipePageHero recipe={recipe} />
          <RecipeIngredientList recipe={recipe} />
          <RecipePreparation recipe={recipe} />
        </>
      )}
      {isLoading && !error && !recipe && <Loader />}
    </>
  );
};

export default Recipe;
