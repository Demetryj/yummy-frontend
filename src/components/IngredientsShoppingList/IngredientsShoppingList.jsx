import React from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { Ingredient } from './Ingredient';
import {
  selectShoppingList,
  selectError,
  selectIsLoading,
} from 'redux/shoppingList/selectors';
import {
  Container,
  Panel,
  PanelСontrol,
  Title,
  ShoppingList,
  ClickToUp,
  IsEmptyImage,
  IsEmptyText,
  Wrapper,
} from './IngredientsShoppingList.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Loader } from 'components/Loader';

export const IngredientsShoppingList = () => {
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  function handlerScrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  if (!shoppingList) {
    return;
  }

  return (
    <Container>
      <MainTitle title="Shopping list" />

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
          <ClickToUp onClick={handlerScrollUp}>
            <TbArrowBigUpLinesFilled size={50} />
          </ClickToUp>
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
