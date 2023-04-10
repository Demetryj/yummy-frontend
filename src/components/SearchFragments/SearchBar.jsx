import { useState } from 'react';
import Select from 'react-select';

import {
  Form,
  InputWrapper,
  Input,
  Btn,
  SelectorWrapper,
  SelectorText,
} from './SearchFragments.styled';

const options = [
  { label: 'Title', value: 'title' },
  { label: 'Ingredient', value: 'ingredient' },
];

const customStyles = {
  container: provided => ({
    ...provided,
    height: '34px',
    width: '146px',
    fontSize: '12px',
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
    color: '#3E4462',
    backgroundColor: '#FAFAFA',
    opacity: 0.5,
    '@media screen and (min-width: 48rem)': {
      fontSize: '14px',
      height: '49px',
      width: '198px',
    },
  }),
  control: provided => ({
    ...provided,
    paddingLeft: '15px',
    border: 'none',
    borderRadius: '6px',
    outline: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#F0F0F0',
    },
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#F0F0F0',
    cursor: 'pointer',
    '&:hover': {
      color: '#8BAA36',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#FAFAFA',
    borderRadius: `0px 0px 6px 6px`,
    cursor: 'pointer',
    padding: '8px 14px',
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: '#F5F5F5',
    },
  }),
  menu: provided => ({
    ...provided,
    marginTop: '2px',
    borderRadius: '6px',
    boxShadow: 'none',
    border: '#7E7E7E',
    backgroundColor: '#FFFFFF',
    zIndex: 9999,
  }),
  menuList: provided => ({
    ...provided,
    padding: 0,
  }),
};

export const SearchBar = ({
  handleOnSubmit,
  searchType = 'title',
  searchQuery,
}) => {
  const [value, setValue] = useState(searchQuery ?? '');

  const onSubmit = e => {
    e.preventDefault();
    if (value === '') return console.log('Type anything to search');
    handleOnSubmit(value.trim().toLowerCase(), searchType);
  };

  const onInputChange = e => setValue(e.target.value);

  const onSearchTypeChange = e =>
    handleOnSubmit(value.trim().toLowerCase(), e.target.value);

  return (
    <>
      <div>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <Input type="text" value={value} onChange={onInputChange} />
            <Btn type="submit">Search</Btn>
          </InputWrapper>
        </Form>
      </div>
      <SelectorWrapper>
        <SelectorText>Search by: </SelectorText>

        <Select
          value={options.find(option => option.value === searchType)}
          onChange={onSearchTypeChange}
          options={options}
          styles={customStyles}
          isSearchable={false}
        />
      </SelectorWrapper>
    </>
  );
};
