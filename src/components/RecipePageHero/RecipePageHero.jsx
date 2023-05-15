import { selectUser } from 'redux/auth/selectors';
import { selectError, selectIsLoading } from 'redux/recipes/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/recipes/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState, createRef, useEffect } from 'react';
import { LoaderSmall } from 'components/LoaderSmall/LoaderSmall';
import toast from 'react-hot-toast';

import {
  Container,
  Title,
  Text,
  Clock,
  Time,
  ClockBlock,
  BtnFavorite,
  Wrapper,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ recipe, getHeightHero }) => {
  const { title, description, time, favorites, _id, owner } = recipe;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [inFavorites, setInFavorites] = useState(favorites.includes(user._id));

  const isOwner = owner && owner === user._id ? true : false;
  const refComponent = createRef();
  useEffect(() => {
    const height = refComponent.current.getBoundingClientRect().height;
    getHeightHero(height);
  }, [refComponent, getHeightHero]);
  const handleAdd = () => {
    dispatch(addToFavorites(_id));
    setInFavorites(true);
    if (!error) {
      toast.success('Recipe is added to favorites', {
        duration: 2000,
      });
    } else {
      toast.error('Something is wrong. try again later', {
        duration: 2000,
      });
    }
    return;
  };
  const handleRemove = () => {
    dispatch(removeFromFavorites(_id));
    setInFavorites(false);
    if (!error) {
      toast.success('Recipe is removed from favorites', {
        duration: 2000,
      });
    } else {
      toast.error('Something is wrong. try again later', {
        duration: 2000,
      });
    }

    return;
  };

  return (
    <Container ref={refComponent}>
      <Wrapper>
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
        {time && (
          <ClockBlock>
            <Clock size={14} />
            <Time>{time} min</Time>
          </ClockBlock>
        )}
      </Wrapper>
    </Container>
  );
};
