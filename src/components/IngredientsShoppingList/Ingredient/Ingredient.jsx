import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { deleteIngredientFromShoppingList } from 'redux/shoppingList/operations';
import defaultImage from 'images/plugs/apple 93x97@2x.png';
import {
  Product,
  ProductPicture,
  ProductName,
  ProductQuantity,
  Button,
} from './Ingredient.styled';

export const Ingredient = ({ id, title, thumb, measure }) => {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteIngredientFromShoppingList({ id, measure }));
  }

  return (
    <Product>
      <ProductPicture src={thumb ? thumb : defaultImage} alt={title} />
      <ProductName>{title}</ProductName>

      <ProductQuantity>{measure ? measure : 1}</ProductQuantity>
      <Button type="button" onClick={() => handleDelete(id)}>
        <RxCross2 size={25} />
      </Button>
    </Product>
  );
};
