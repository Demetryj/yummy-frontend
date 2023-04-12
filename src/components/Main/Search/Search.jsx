import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSearchRecipes } from 'redux/recipes/operations';
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
        <Button type="submit">Search</Button>
      </SearchForm>
    </SearchFormContainer>
  );
};
