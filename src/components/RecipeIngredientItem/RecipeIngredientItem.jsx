import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  addIngredientToShoppingList,
  deleteIngredientFromShoppingList,
} from 'redux/shoppingList/operations';
import { selectError } from 'redux/shoppingList/selectors';
import { getPoster } from 'utils/getPlugImageIngredient';
import sprite from 'images/symbol-defs.svg';
import plug from 'images/plugs/apple 128x128.png';
import {
  RecipeContainer,
  ImageBlock,
  Label,
  IngName,
  IngDescr,
  IngQuantity,
  CustomCheckbox,
  RealCheckbox,
} from './RecipeIngredientItem.styled';

export const RecipeIngredientItem = ({ ingrediento, mode }) => {
  const { thb, ttl, measure, id, desc } = ingrediento;

  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const addToShoppingList = () => {
    if (!checked) {
      dispatch(
        addIngredientToShoppingList({
          id: id,
          measure: measure,
        })
      );
      setChecked(true);
      if (!error) {
        toast.success('Ingredient is added to shopping list', {
          duration: 2000,
        });
      } else {
        toast.error('Something is wrong. try again later', {
          duration: 2000,
        });
      }
      return;
    } else {
      dispatch(
        deleteIngredientFromShoppingList({
          id: id,
          measure: measure,
        })
      );
      setChecked(false);
      if (!error) {
        toast.success('Ingredient is removed from shopping list', {
          duration: 2000,
        });
      } else {
        toast.error('Something is wrong. Try again later', {
          duration: 2000,
        });
      }
      return;
    }
  };

  return (
    <RecipeContainer mode={mode}>
      <Label>
        <ImageBlock>
          <img src={getPoster(thb, plug)} alt="poster" />
        </ImageBlock>

        <IngName mode={mode}>{ttl}</IngName>
        <IngDescr>{desc}</IngDescr>
        <IngQuantity>{measure}</IngQuantity>
        <RealCheckbox
          type="checkbox"
          onChange={addToShoppingList}
          checked={checked}
        />
        <CustomCheckbox>
          <svg>
            <use href={sprite + '#icon-checkbox'} />
          </svg>
        </CustomCheckbox>
      </Label>
    </RecipeContainer>
  );
};
