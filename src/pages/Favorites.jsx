import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectFavoriteRecipes,
  selectIsLoading,
  selectTotalFavoriteRecipes,
} from 'redux/recipes/selectors';

import { getFavorite } from '../redux/recipes/favoritesOperations';
import { PaginationComp } from 'components/Pagination/Pagination';

import { RecipeItem } from 'components/Recipe/RecipeItem';
import { ContentWrapper, Wrapper } from 'components/Favorites/Favorites.styled';
import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { Loader } from 'components/Loader/Loader';
import { EmptyPagePlug } from 'components/EmptyPagePlug/EmptyPagePlug';

import { onScrollUp } from 'utils/scrollUp';

import img from '../images/default.jpg';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteRecipes);

  const total = useSelector(selectTotalFavoriteRecipes);

  const isLoading = useSelector(selectIsLoading);
  const perPage = 4;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getFavorite({ page: page, per_page: perPage }));
  }, [dispatch, page]);

  const handleChange = (event, value) => {
    setPage(value);
    onScrollUp();
  };

  return (
    <Wrapper>
      <Container>
        <Title>Favorites</Title>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {favorites && favorites.length > 0 ? (
              <ContentWrapper>
                {favorites.map(item => {
                  return (
                    <li key={item._id}>
                      <RecipeItem
                        location="favorite"
                        id={item._id}
                        img={item.preview ?? img}
                        title={item.title ?? 'No name'}
                        text={
                          <span>{item.description ?? 'No description'}</span>
                        }
                        time={item.time ? `${item.time} min` : ''}
                      />
                    </li>
                  );
                })}
              </ContentWrapper>
            ) : (
              <EmptyPagePlug text="You currently don't have any favorite recipes added. Let's add some!" />
            )}
            {favorites && favorites.length > 0 && (
              <PaginationComp
                count={Math.ceil(total / perPage)}
                page={page}
                handleChange={handleChange}
              />
            )}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Favorites;
