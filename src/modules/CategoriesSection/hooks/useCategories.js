import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectError,
  selectIsLoading,
  selectPagination,
  selectRecipes,
} from '../redux';

export const useCategories = () => {
  const categoriesList = useSelector(selectCategories);
  const recipesOfCategory = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pagination = useSelector(selectPagination);
  return { categoriesList, recipesOfCategory, isLoading, error, pagination };
};
