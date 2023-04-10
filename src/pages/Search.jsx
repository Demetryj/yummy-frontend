import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { SearchBar, SearchList } from 'components/SearchFragments';
import { fetchSearchRecipes } from 'redux/recipes/operations';
import { fetchRecipesByIngredient } from 'redux/ingredients/operations';
import { Title } from 'components/SearchFragments/SearchFragments.styled';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const searchQuery = searchParams.get('searchQuery') ?? '';
  const searchType = searchParams.get('searchType') ?? 'title';
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
    if (searchQuery === '' || searchType === '') return;

    const fetchRecipes = async () => {
      try {
        const data =
          searchType === 'title'
            ? await dispatch(fetchSearchRecipes(searchQuery))
            : await dispatch(fetchRecipesByIngredient(searchQuery));
        console.log('data:', data);
        setRecipes(data.payload[0].recipeData);
        // setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, [dispatch, searchQuery, searchType]);

  return (
    <main>
      <Title>Search</Title>
      <SearchBar
        handleOnSubmit={handleOnSubmit}
        searchQuery={searchQuery}
        searchType={searchType}
      />
      <SearchList recipes={recipes} />
    </main>
  );
};

export default Search;
