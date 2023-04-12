import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  selectShoppingList,
  selectError,
  selectIsLoading,
} from 'redux/shoppingList/selectors';
import { Ingredient } from './Ingredient';
import {
  Panel,
  PanelСontrol,
  Title,
  ShoppingList,
} from './IngredientsShoppingList.styled';

export const IngredientsShoppingList = () => {
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (!shoppingList) {
    return;
  }

  return (
    <>
      <Panel>
        <Title>Products</Title>
        <PanelСontrol>
          <Title>Number</Title>
          <Title>Remove</Title>
        </PanelСontrol>
      </Panel>

      {shoppingList.length > 0 && !error && (
        <ShoppingList>
          {shoppingList.map(({ productId: id, title, thumb, measure }, idx) => {
            return (
              <Ingredient
                key={nanoid()}
                id={id}
                title={title}
                thumb={thumb}
                measure={measure}
              />
            );
          })}
        </ShoppingList>
      )}

      {!isLoading && shoppingList.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: 30 }}>
          Shopping list is empty 🤔
        </p>
      )}
    </>
  );
};
