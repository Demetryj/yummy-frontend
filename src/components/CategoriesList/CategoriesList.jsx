import { useCategories } from 'hooks';
import { CategoryItem, List } from './CategoriesList.styled';
import { fetchCategoriesList } from 'redux/recipes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const CategoriesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);
  const { categoriesList } = useCategories();
  return (
    <List>
      {categoriesList.map(category => (
        <li key={category}>
          <CategoryItem to={`/categories/${category}`}>{category}</CategoryItem>
        </li>
      ))}
    </List>
  );
};
