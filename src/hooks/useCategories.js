import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/recipes';
import { selectIsLoading, selectRecipes } from 'redux/recipes/selectors';

export const useCategories = () => {
  const categoriesList = useSelector(selectCategories);
  const recipesOfCategory = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  return { categoriesList, recipesOfCategory, isLoading };
};
