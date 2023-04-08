import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/recipes/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Container } from './RecipePageHero.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';

export const RecipePageHero = ({ recipe }) => {
  const { title, description, time, favorites, _id } = recipe;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [inFavorites, setInFavorites] = useState(() => {
    favorites.includes(user._id);
  });

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
      <MainTitle color="greenBgColor">{title}</MainTitle>
      <p>{description}</p>
      {inFavorites ? (
        <button onClick={handleRemove}>Remove from favorites recipes</button>
      ) : (
        <button onClick={handleAdd}>Add to favorite recipes</button>
      )}

      <p>{time}</p>
    </Container>
  );
};
