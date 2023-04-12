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

const IngredientsFilter = () => {
  const [serviceList, setServiceList] = useState([
    { service: '', ingredient: '', size: '' },
  ]);
  const dispatch = useDispatch();
  const items = useSelector(selectIngredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleIngredientChange = (selectedOption, index, key) => {
    const newServiceList = serviceList.map((item, idx) => {
      if (index === idx) {
        item[key] = selectedOption;
      }
      return item;
    });
    setServiceList(newServiceList);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: '', ingredient: '', size: '' }]);
  };

  const handleServiceRemove = index => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  // console.log('serviceList', serviceList);
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
                options={items}
                maxMenuHeight={150}
                isClearable={true}
                placeholder="Type ingredent"
                // value={ingredient}
                // onChange={e =>
                //   handleIngredientChange(e.value, index, 'ingredient')
                // }
              />
            </SelectCustomisation>
            <div>
              <Input
                type="text"
                maxLength={4}
                length={10}
                name="service"
                id="service"
                value={field.service}
                onChange={e =>
                  handleIngredientChange(e.target.value, index, 'service')
                }
              />
              <SelectUnit
                name=""
                id=""
                onChange={e =>
                  handleIngredientChange(e.target.value, index, 'size')
                }
              >
                <option value=""></option>
                <option value="tbs">tbs</option>
                <option value="tsp">tsp</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="l">l</option>
                <option value="mllt">mllt</option>
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
