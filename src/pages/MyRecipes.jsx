import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOwnRecipes,
  // selectIsLoading,
  selectOwnTotalRecipes,
} from 'redux/recipes/selectors';
import { getOwnRecipes } from 'redux/recipes/ownRecipesOperations';

import { PaginationComp } from 'components/Pagination/Pagination';

import { RecipeItem } from '../components/Recipe/RecipeItem';
import {
  ContentWrapper,
  Wrapper,
} from '../components/Favorites/Favorites.styled';
import { Container } from 'components/Container/Container';
import { Title } from '../components/Title/Title';
// import { Loader } from 'components/Loader/Loader';
import { EmptyPagePlug } from 'components/EmptyPagePlug/EmptyPagePlug';

import { onScrollUp } from 'utils/scrollUp';
import img from '../images/default.jpg';

const MyRecipes = () => {
  const dispatch = useDispatch();

  const recipes = useSelector(selectOwnRecipes);

  const total = useSelector(selectOwnTotalRecipes);

  // const isLoading = useSelector(selectIsLoading);

  const perPage = 4;

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getOwnRecipes({ page: page, per_page: perPage }));
  }, [dispatch, page]);

  const handleChange = (event, value) => {
    setPage(value);
    onScrollUp();
  };

  return (
    <Wrapper>
      <Container>
        <Title>My recipes</Title>

        <>
          {recipes && recipes.length > 0 ? (
            <ContentWrapper>
              {recipes.map(item => {
                return (
                  <li key={item._id}>
                    <RecipeItem
                      location="recipes"
                      id={item._id}
                      img={item.preview ?? img}
                      title={item.title ?? 'No name'}
                      text={<span>{item.description ?? 'No description'}</span>}
                      time={item.time ? `${item.time} min` : ''}
                    />
                  </li>
                );
              })}
            </ContentWrapper>
          ) : (
            <EmptyPagePlug
              location="recipes"
              text="You currently don't have any own recipes added. Let's add some!"
            />
          )}
          {recipes && recipes.length > 0 && (
            <PaginationComp
              count={Math.ceil(total / perPage)}
              page={page}
              handleChange={handleChange}
            />
          )}
        </>
      </Container>
    </Wrapper>
  );
};

export default MyRecipes;
