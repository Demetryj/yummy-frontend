import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchShoppingList } from 'redux/shoppingList/operations';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList';

const ShoppingList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  return (
    <>
      <IngredientsShoppingList />
    </>
  );
};

export default ShoppingList;
