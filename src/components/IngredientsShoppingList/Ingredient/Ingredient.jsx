import { useDispatch } from 'react-redux';
import { deleteIngredientFromShoppingList } from 'redux/shoppingList/operations';
import { RxCross2 } from 'react-icons/rx';

import {
  Product,
  ProductPicture,
  ProductName,
  ProductQuantity,
  Button,
} from './Ingredient.styled';

export const Ingredient = ({ id, ttl, thb, t }) => {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteIngredientFromShoppingList(id));
  }

  return (
    <Product>
      <ProductPicture src={thb} alt="thb" />
      <ProductName>{ttl}</ProductName>

      <ProductQuantity>{t} 400 g</ProductQuantity>

      <Button type="button" onClick={() => handleDelete(id)}>
        <RxCross2 size={25} />
      </Button>
    </Product>
  );
};
