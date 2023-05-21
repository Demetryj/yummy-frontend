import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredientFromShoppingList } from 'redux/shoppingList/operations';
import { selectError } from 'redux/shoppingList/selectors';
import { selectTheme } from 'redux/theme/selectors';
import defaultImage from 'images/plugs/apple 93x97@2x.png';
import {
  Product,
  ProductPicture,
  ProductName,
  ProductQuantity,
  Button,
} from './Ingredient.styled';

import * as toast from 'utils/toasts';
import * as icons from './icons';

export const Ingredient = ({ id, title, thumb, measure }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const theme = useSelector(selectTheme);

  function handleDelete(id) {
    if (!id || error) {
      return toast.error('Something is wrong. Try again later');
    }

    dispatch(deleteIngredientFromShoppingList({ id, measure }));

    toast.success(
      'Ingredient removed from shopping list',
      <icons.TbShoppingCartX size={20} color="#fff" />
    );
  }

  return (
    <Product>
      <ProductPicture src={thumb || defaultImage} alt={title} />
      <ProductName mode={theme}>{title || 'Product'}</ProductName>

      <ProductQuantity>{measure || 1}</ProductQuantity>
      <Button type="button" onClick={() => handleDelete(id)}>
        <icons.RxCross2
          size={25}
          color={theme === 'light' ? '#22252A' : '#FAFAFA'}
        />
      </Button>
    </Product>
  );
};
