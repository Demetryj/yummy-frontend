import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/recipes/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Clock,
  Time,
  ClockBlock,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ recipe }) => {
  const { title, description, time, favorites, _id, owner } = recipe;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
        <button onClick={handleRemove}>Remove from favorites recipes</button>
      )}
      {!inFavorites && !isOwner && (
        <button onClick={handleAdd}>Add to favorite recipes</button>
      )}
      <ClockBlock>
        <Clock size={14} />
        <Time>{time} min</Time>
      </ClockBlock>
    </Container>
  );
};
