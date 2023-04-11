import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchRecipes } from 'redux/recipes/operations';
import { fetchRecipesByIngredient } from 'redux/ingredients/operations';
import { selectIsLoading } from 'redux/ingredients/selectors';
import { selectIsLoading as recipesLoading } from 'redux/recipes/selectors';

import { MainTitle } from 'components/MainTitle/MainTitle';
import { SearchBar } from 'components/SearchBar';
import { Loader } from 'components/Loader';
import { SearchedRecipesList } from 'components/SearchedRecipesList';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery =
    searchParams.get('searchQuery') ?? localStorage.getItem('query') ?? '';
  const searchType = searchParams.get('searchType') ?? 'title';

  const ingredientsAreLoading = useSelector(selectIsLoading);
  const ingredientsByRecipesAreLoading = useSelector(recipesLoading);

  const dispatch = useDispatch();

  const handleOnSubmit = (query, type) => {
    setSearchParams(
      new URLSearchParams({
        searchQuery: query,
        searchType: type,
      })
    );
  };

  useEffect(() => {
    if (searchQuery === '') return;

    if (searchType === 'title') dispatch(fetchSearchRecipes(searchQuery));

    if (searchType === 'ingredient')
      dispatch(fetchRecipesByIngredient(searchQuery));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchQuery, searchType]);

  return (
    <>
      <MainTitle title="Search" />
      <SearchBar
        handleOnSubmit={handleOnSubmit}
        searchQuery={searchQuery}
        searchType={searchType}
      />
      {ingredientsAreLoading || ingredientsByRecipesAreLoading ? (
        <Loader />
      ) : (
        <SearchedRecipesList type={searchType} />
      )}
    </>
  );
};

export default Search;
