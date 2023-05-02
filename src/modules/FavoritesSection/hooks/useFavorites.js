import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectRecipes,
  selectTotal,
} from '../redux';

export const useFavorites = () => {
  const recipes = useSelector(selectRecipes);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return { recipes, total, isLoading, error };
};
