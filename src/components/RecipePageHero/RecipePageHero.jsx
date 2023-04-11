import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/recipes/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/recipes/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { LoaderSmall } from 'components/LoaderSmall/LoaderSmall';

import {
  Container,
  Title,
  Text,
  Clock,
  Time,
  ClockBlock,
  BtnFavorite,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ recipe }) => {
  const { title, description, time, favorites, _id, owner } = recipe;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [inFavorites, setInFavorites] = useState(() => {
    favorites.includes(user._id);
  });
  const isOwner = owner && owner._id === user._id ? true : false;

  const handleAdd = () => {
    dispatch(addToFavorites(_id));
    setInFavorites(true);
    return;
  };
  const handleRemove = () => {
    dispatch(removeFromFavorites(_id));
    setInFavorites(false);

    return;
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Text>{description}</Text>
      {inFavorites && !isOwner && (
        <BtnFavorite disabled={isLoading} onClick={handleRemove}>
          Remove from favorites recipes {isLoading && <LoaderSmall />}
        </BtnFavorite>
      )}
      {!inFavorites && !isOwner && (
        <BtnFavorite disabled={isLoading} onClick={handleAdd}>
          Add to favorite recipes {isLoading && <LoaderSmall />}
        </BtnFavorite>
      )}
      <ClockBlock>
        <Clock size={14} />
        <Time>{time} min</Time>
      </ClockBlock>
    </Container>
  );
};
