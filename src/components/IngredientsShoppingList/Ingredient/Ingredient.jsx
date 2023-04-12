import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { deleteIngredientFromShoppingList } from 'redux/shoppingList/operations';
import {
  Product,
  ProductPicture,
  ProductName,
  ProductQuantity,
  Button,
} from './Ingredient.styled';

export const Ingredient = forwardRef(({ id, title, thumb, measure }, ref) => {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteIngredientFromShoppingList({ id, measure }));
  }

  return (
    <Product ref={ref}>
      <ProductPicture src={thumb} alt={title} />
      <ProductName>{title}</ProductName>

      <ProductQuantity>{measure}</ProductQuantity>

      <Button type="button" onClick={() => handleDelete(id)}>
        <RxCross2 size={25} />
      </Button>
    </Product>
  );
});
