import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/recipes/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { RoundButton } from 'components/Button/RoundButton';
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
        <RoundButton
          onClick={handleRemove}
          text={'Remove from favorites recipes'}
        ></RoundButton>
      )}
      {!inFavorites && !isOwner && (
        <RoundButton
          onClick={handleAdd}
          text={'Add to favorite recipes'}
        ></RoundButton>
      )}
      <ClockBlock>
        <Clock size={14} />
        <Time>{time} min</Time>
      </ClockBlock>
    </Container>
  );
};
