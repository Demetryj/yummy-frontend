import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  selectShoppingList,
  selectError,
  selectIsLoading,
} from 'redux/shoppingList/selectors';
import { Ingredient } from './Ingredient';
import {
  Container,
  Panel,
  PanelСontrol,
  Title,
  ShoppingList,
  IsEmptyImage,
  IsEmptyText,
  Wrapper,
} from './IngredientsShoppingList.styled';
import { Loader } from 'components/Loader';

export const IngredientsShoppingList = () => {
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (!shoppingList) {
    return;
  }

  return (
    <Container>
      <Panel>
        <Title>Products</Title>
        <PanelСontrol>
          <Title>Number</Title>
          <Title>Remove</Title>
        </PanelСontrol>
      </Panel>

      {shoppingList.length > 0 && !error && (
        <ShoppingList>
          {shoppingList.map(({ productId: id, title, thumb, measure }) => {
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

      {isLoading && <Loader />}
      {shoppingList.length <= 0 && !isLoading && !error && (
        <Wrapper>
          <IsEmptyImage />
          <IsEmptyText>Shopping list is empty...</IsEmptyText>
        </Wrapper>
      )}
    </Container>
  );
};
