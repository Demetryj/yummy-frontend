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
import units from './data/units.json';
import { toast } from 'react-hot-toast';

const IngredientsFilter = ({
  getFilterData,
  setInitialList,
  gettingFilterData,
  mode,
}) => {
  const [serviceList, setServiceList] = useState([{}]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  useEffect(() => {
    if (setInitialList) {
      setServiceList([{}]);
    }
  }, [setInitialList]);
  useEffect(() => {
    if (gettingFilterData) {
      window.document.getElementById('sizeSelect').value = '';
      window.document.getElementById('serviceSelect').value = '';
      window.document.querySelector('.css-1dimb5e-singleValue').textContent =
        'Type ingredient';
    }
  }, [gettingFilterData]);

  const ingredientsList = useSelector(selectIngredients);

  const ingredients = ingredientsList.map(item => ({
    label: item.ttl,
    value: item._id,
  }));
  const handleServiceAdd = () => {
    setServiceList([...serviceList, {}]);
  };

  const handleServiceRemove = index => {
    const list = serviceList.filter((_, idx) => idx !== index);
    setServiceList(list);
    getFilterData(list);
  };

  const handleIngredientChange = (value, index, key) => {
    if (serviceList.length > 1 && serviceList.find(el => el.id === value)) {
      toast.error('You already have such an ingredient!', {
        duration: 3000,
        position: 'top-center',
      });
      return handleServiceRemove(index);
    }
    const selectedIngredient = ingredientsList.find(
      ingredient => ingredient._id === value
    );
    const newServiceList = serviceList.map((item, idx) => {
      if (index === idx) {
        if (selectedIngredient) {
          const { _id, thb, ttl } = selectedIngredient;
          item[key] = ttl;
          item.id = _id;
          item.thb = thb;
        } else {
          item[key] = value;
        }
      }
      return item;
    });
    getFilterData(newServiceList);
  };

  return (
    <IngredientsContainet>
      <IngListSetting>
        <BoxTitle mode={mode}>Ingredients</BoxTitle>
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
        {serviceList.map((_, index) => (
          <FlexContainer key={index}>
            <SelectCustomisation>
              <Select
                id="customSelect"
                required
                options={ingredients}
                maxMenuHeight={150}
                placeholder="Type ingredient"
                onChange={e => handleIngredientChange(e.value, index, 'ttl')}
              />
            </SelectCustomisation>
            <div>
              <Input
                id="sizeSelect"
                required
                type="text"
                maxLength={4}
                length={10}
                name="size"
                onChange={e =>
                  handleIngredientChange(e.target.value, index, 'size')
                }
              />
              <SelectUnit
                id="serviceSelect"
                required
                name="service"
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
