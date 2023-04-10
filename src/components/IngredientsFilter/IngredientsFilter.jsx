import React, { useState } from 'react';
import {
  IngredientsContainet,
  Buttons,
  IngListSetting,
  FlexContainer,
  SelectCustomisation,
} from './IngredientsFilter.styled';
import Select from 'react-select';

const IngredientsFilter = () => {
  const [ingredient, setIngredient] = useState([{ ingredient: '' }]);

  const [serviceList, setServiceList] = useState([{ service: '' }]);
console.log(serviceList)

  const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'john', label: 'John' },
    { value: 'mike', label: 'Mike' },
    { value: 'mango', label: 'Mango' },
    { value: 'ajax', label: 'Ajax' },
    { value: 'rudy', label: 'Rudy' },
    { value: 'ikra', label: 'Ikra' },
  ];
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };
  const handleIngredientChange = selectedOption => {
    console.log('handleChange', selectedOption);
    setIngredient(ingredient);
  };

  const hamdleServiceAdd = () => {
    setServiceList([...serviceList, { service: '' }]);
  };
  const handleServiceRemove = (index) => {
    console.log(index)
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);



  };
  return (
    <IngredientsContainet>
      <IngListSetting>
        <div>
          <h2>Ingredients</h2>
        </div>

        <Buttons>
          <button
            type="button"
            onClick={handleServiceRemove}
            // onClick={() => handleServiceRemove()}
            disabled={serviceList.length < 2}
          >
            -
          </button>
          <p>{serviceList.length}</p>
          <button
            type="button"
            onClick={hamdleServiceAdd}
            disabled={serviceList.length > 9}
          >
            +
          </button>
        </Buttons>
      </IngListSetting>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {serviceList.map((singleService, index) => (
          <FlexContainer key={index}>
            <SelectCustomisation>
              <Select
                options={options}
                maxMenuHeight={150}
                isClearable={true}
                placeholder="Type ingredent"
                onChange={handleIngredientChange}
              />
            </SelectCustomisation>
            <div>
              <input
                type="text"
                maxLength={5}
                name="service"
                id="service"
                value={singleService.service}
                onChange={e => handleServiceChange(e, index)}
                style={{
                  width: 'auto',
                  maxWidth: '70px',
                  height: '100%',
                  border: 'none',
                  padding: '5px',
                }}
              />
              <select
                name=""
                id=""
                style={{
                  height: '100%',
                  padding: '5px',
                }}
              >
                <option value=""></option>
                <option value="tbs">tbs</option>
                <option value="tsp">tsp</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="l">l</option>
                <option value="mllt">mllt</option>
              </select>
            </div>


            {serviceList.length > 1 && (
              <button type="button" onClick={() => handleServiceRemove(index)}>
                <span>X</span>
              </button>
            )}






          </FlexContainer>
        ))}
      </div>
    </IngredientsContainet>
  );
};
export default IngredientsFilter;
