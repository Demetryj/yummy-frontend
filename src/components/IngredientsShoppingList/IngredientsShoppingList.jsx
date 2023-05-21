import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectShoppingList,
  selectError,
  selectIsLoading,
} from 'redux/shoppingList/selectors';

import { Ingredient } from './Ingredient';
import { MainTitle } from 'components/MainTitle';
import { EmptyPagePlug } from 'components/EmptyPagePlug';
import { Loader } from 'components/Loader';
import { ScrollUpButton } from 'components/Button/ScrollUpButton';

import {
  Container,
  Panel,
  PanelСontrol,
  Title,
  ShoppingList,
} from './IngredientsShoppingList.styled';

export const IngredientsShoppingList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (!shoppingList) {
    return;
  }

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      return setIsVisible(true);
    }
    setIsVisible(false);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  window.addEventListener('scroll', toggleVisibility);

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
          {shoppingList.map(({ productId: id, title, thumb, measure }, idx) => {
            return (
              <Ingredient
                key={`${id}.${measure}.${idx}`}
                id={id}
                title={title}
                thumb={thumb}
                measure={measure}
              />
            );
          })}
        </ShoppingList>
      )}

      {isVisible && <ScrollUpButton handleClick={scrollToTop} />}
      {isLoading && <Loader />}
      {shoppingList.length <= 0 && !isLoading && !error && (
        <EmptyPagePlug text="Shopping list is empty..." />
      )}
    </Container>
  );
};
