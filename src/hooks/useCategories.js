import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/recipes';
import {
  selectError,
  selectIsLoading,
  selectPagination,
  selectRecipes,
} from 'redux/recipes/selectors';

export const useCategories = () => {
  const categoriesList = useSelector(selectCategories);
  const recipesOfCategory = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pagination = useSelector(selectPagination);
  return { categoriesList, recipesOfCategory, isLoading, error, pagination };
};
