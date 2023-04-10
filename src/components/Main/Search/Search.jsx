import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSearchRecipes } from 'redux/recipes/operations';
import { selectRecipes, selectIsLoading } from 'redux/recipes/selectors';
import { Loader } from 'components/Loader';
import {
  Input,
  Button,
  SearchForm,
  SearchFormContainer,
} from './Search.styled';
import { useState } from 'react';

export const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const recipes = useSelector(selectRecipes);
  const navigate = useNavigate();

  const changeHandleSearch = e => {
    const { value } = e.currentTarget;
    setInput(value.trim());

    if (input === '') {
      return;
    } else {
      localStorage.setItem('query', value.toLowerCase());
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const queryInput = localStorage.getItem('query');

    if (!queryInput || input === '') {
      console.log('in toaster');
      console.log('queryInput: ', queryInput);
      return toast.error('Please enter title.', {
        duration: 2000,
        position: 'top-center',
      });
    }

    if (input === '') {
      return;
    } else {
      navigate('/search', { replace: true });
    }
    dispatch(fetchSearchRecipes(queryInput));
    // коли recipeData.length === 0, тобто по такому запросу нічого немає в БД, тоді відрендирити інформаційний блок; ЯК ДІСТАТИ recipeData з items???
    setInput('');
  };
  return (
    <SearchFormContainer>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="queryInput"
          value={input}
          onChange={changeHandleSearch}
          autocomplete="off"
          autoFocus
          placeholder="Search recipe"
        />
        {/* {(recipes.length === 0 && isLoading) && <Loader/>} */}
        <Button type="submit">Search</Button>
      </SearchForm>
    </SearchFormContainer>
  );
};
