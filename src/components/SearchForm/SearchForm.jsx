import { useEffect } from 'react';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllRecipes } from 'redux/recipes/selectors';
import { selectIngredients } from 'redux/ingredients/selectors';
import { fetchIngredients } from 'redux/ingredients/operations';
import { fetchAllRecipes } from 'redux/recipes/operations';
import { selectSearchFormConfigs } from 'utils/selectSearchFormConfigs';

import { Btn, Form, InputWrapper } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, onInputChange, mode }) => {
  const { search } = useLocation();
  const searchParamsFromMain = new URLSearchParams(search);
  const requestFromMain = searchParamsFromMain.get('searchType');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  const collectionOfRecipes = useSelector(selectAllRecipes).map(
    (item, idx) => ({
      label: item,
      value: idx,
    })
  );

  const ingredientsList = useSelector(selectIngredients);

  const ingredients = ingredientsList.map(item => ({
    label: item.ttl,
    value: item._id,
  }));

  return (
    <Form onSubmit={e => onSubmit(e)}>
      <InputWrapper>
        <Select
          onChange={e => onInputChange(e.label)}
          styles={selectSearchFormConfigs}
          placeholder="Search..."
          options={
            requestFromMain === 'title' ? collectionOfRecipes : ingredients
          }
        />
        <Btn type="submit" mode={mode}>
          Search
        </Btn>
      </InputWrapper>
    </Form>
  );
};
