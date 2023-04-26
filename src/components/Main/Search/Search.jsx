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
  };

  const handleSubmit = e => {
    e.preventDefault();
  
    if ( input === '') {
      return toast.error('Please enter title.', {
        duration: 2000,
        position: 'top-center',
      });
    }

    if (input === '') {
      return;
    } else {
      navigate(`/search?query=${input}`, { replace: true });
    }
    
    dispatch(fetchSearchRecipes(input));
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
