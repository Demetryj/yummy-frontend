import { useSelector } from 'react-redux';
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
          {shoppingList.map(({ _id: id, ttl, thb, t }, idx) => (
            <Ingredient key={idx} id={id} ttl={ttl} thb={thb} t={t} />
          ))}
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
