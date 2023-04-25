import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectIngredients } from 'redux/ingredients/selectors';
import { fetchIngredients } from 'redux/ingredients/operations';

import {
  IngredientsContainet,
  Buttons,
  IngListSetting,
  FlexContainer,
  SelectCustomisation,
  BoxTitle,
  InputFieldsContainer,
  SelectUnit,
  Input,
} from './IngredientsFilter.styled';

const IngredientsFilter = ({ setRecipes, recipes }) => {
  const units = [
    { value: '' },
    { value: 'tbs' },
    { value: 'tsp' },
    { value: 'kg' },
    { value: 'g' },
    { value: 'l' },
    { value: 'mllt' },
  ];

  const [serviceList, setServiceList] = useState([
    { ingredient: '', measure: '' },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const ingredientsList = useSelector(selectIngredients);

  const ingredients = ingredientsList.map(item => ({
    label: item.ttl,
    value: item.ttl,
  }));

  const handleIngredientChange = (selectedOption, index, key) => {
    const newServiceList = serviceList.map((item, idx) => {
      if (index === idx) {
        item[key] = selectedOption;
      }
      return item;
    });

    const ingredients = newServiceList.map(el => ({
      ingredient: el.ingredient,
      measure: el.size + el.service,
    }));

    console.log(ingredients)
    setServiceList(newServiceList);
    setRecipes(prevState => ({
      ...prevState,
      ingredients: ingredients,
    }));
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { ingredient: '', measure: '' }]);
  };

  const handleServiceRemove = index => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  return (
    <IngredientsContainet>
      <IngListSetting>
        <BoxTitle>Ingredients</BoxTitle>
        {serviceList.length > 0 && (
          <Buttons>
            <button
              type="button"
              onClick={handleServiceRemove}
              disabled={serviceList.length < 2}
            >
              -
            </button>
            <p>{serviceList.length}</p>
            <button
              type="button"
              onClick={handleServiceAdd}
              disabled={serviceList.length > 9}
            >
              +
            </button>
          </Buttons>
        )}
      </IngListSetting>

      <InputFieldsContainer>
        {serviceList.map((field, index) => (
          <FlexContainer key={index}>
            <SelectCustomisation>
              <Select
                options={ingredients}
                maxMenuHeight={150}
                placeholder="Type ingredent"
                onChange={e =>
                  handleIngredientChange(e.value, index, 'ingredient')
                }
              />
            </SelectCustomisation>
            <div>
              <Input
                type="text"
                maxLength={4}
                length={10}
                name="size"
                id="size"
                onChange={e =>
                  handleIngredientChange(e.target.value, index, 'size')
                }
              />
              <SelectUnit
                name="service"
                id="service"
                onChange={e =>
                  handleIngredientChange(e.target.value, index, 'service')
                }
              >
                {units.map(({ value }) => (
                  <option key={value}>{value}</option>
                ))}
              </SelectUnit>
            </div>

            {serviceList.length > 1 && (
              <button type="button" onClick={() => handleServiceRemove(index)}>
                <span>X</span>
              </button>
            )}
          </FlexContainer>
        ))}
      </InputFieldsContainer>
    </IngredientsContainet>
  );
};
export default IngredientsFilter;