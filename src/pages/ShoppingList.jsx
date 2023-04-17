import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchShoppingList } from 'redux/shoppingList/operations';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList';
import { onScrollUp } from 'utils/scrollUp';

const ShoppingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
    onScrollUp();
  }, [dispatch]);

  return <IngredientsShoppingList />;
};

export default ShoppingList;
