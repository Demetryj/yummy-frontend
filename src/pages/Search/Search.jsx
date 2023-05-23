import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

import { selectTheme } from 'redux/theme/selectors';
import { fetchSearchRecipes } from 'redux/recipes/operations';
import { fetchRecipesByIngredient } from 'redux/ingredients/operations';
import { selectIsLoading } from 'redux/ingredients/selectors';
import { selectIsLoading as recipesLoading } from 'redux/recipes/selectors';

import { MainTitle } from 'components/MainTitle/MainTitle';
import { SearchBar } from 'components/SearchBar';
import { Loader } from 'components/Loader';
import { SearchedRecipesList } from 'components/SearchedRecipesList';

import { ListSection, SearchSection } from './Search.styled';
import { onScrollUp } from 'utils/scrollUp';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { search } = useLocation();
  const searchParamsFromMain = new URLSearchParams(search);
  const requestFromMain = searchParamsFromMain.get('query');

  const navigate = useNavigate();

  const searchQuery = searchParams.get('searchQuery') ?? requestFromMain ?? '';
  const searchType = searchParams.get('searchType') ?? 'title';

  const ingredientsAreLoading = useSelector(selectIsLoading);
  const ingredientsByRecipesAreLoading = useSelector(recipesLoading);

  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);

  const handleOnSubmit = (query, type) => {
    setSearchParams(
      new URLSearchParams({
        searchQuery: query,
        searchType: type,
      })
    );
    navigate(`?searchQuery=${query}&searchType=${type}`);

    // Add the current search to the browser history
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set('searchQuery', query);
    currentUrl.searchParams.set('searchType', type);
    window.history.pushState({}, '', currentUrl.toString());
  };

  useEffect(() => {
    onScrollUp();

    if (searchQuery === '') return;

    if (searchType === 'title') dispatch(fetchSearchRecipes(searchQuery));

    if (searchType === 'ingredient')
      dispatch(fetchRecipesByIngredient(searchQuery));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchQuery, searchType]);

  return (
    <>
      <SearchSection>
        <MainTitle title="Search" />
        <SearchBar
          handleOnSubmit={handleOnSubmit}
          searchQuery={searchQuery}
          searchType={searchType}
          mode={theme}
        />
      </SearchSection>
      <ListSection>
        {ingredientsAreLoading || ingredientsByRecipesAreLoading ? (
          <Loader />
        ) : (
          <SearchedRecipesList type={searchType} />
        )}
      </ListSection>
    </>
  );
};

export default Search;
