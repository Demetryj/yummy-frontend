import { useCategories } from '../../hooks';
import { CategoryItem, List } from './CategoriesList.styled';
import { getCategoriesList } from '../../redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const CategoriesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesList());
    window.scrollTo({
      top: 0,
    });
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
