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
  const Error = useSelector(selectError);
  return { categoriesList, recipesOfCategory, isLoading, Error };
};
