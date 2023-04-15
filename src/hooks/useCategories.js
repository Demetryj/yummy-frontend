import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/recipes';
import {
  selectError,
  selectIsLoading,
  selectRecipes,
} from 'redux/recipes/selectors';

export const useCategories = () => {
  const categoriesList = useSelector(selectCategories);
  const recipesOfCategory = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  return { categoriesList, recipesOfCategory, isLoading, isError };
};
