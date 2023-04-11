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
    opacity: 0.5,

    // '&:hover': {
    //   borderColor: '#F0F0F0',
    // },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
    '&:hover': {
      borderColor: '#F0F0F0',
      '& svg': {
        color: '#8BAA36',
      },
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
    color: state.isSelected ? '#8BAA36' : '#7E7E7E',
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
    backgroundColor: '#FAFAFA',
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
  const [type, setType] = useState(searchType);
  const [selectedOption, setSelectedOption] = useState(null);
  console.log('type:', type);
  console.log('selectedOption:', selectedOption);

  const onSubmit = e => {
    e.preventDefault();
    if (value === '') return console.log('Type anything to search');
    handleOnSubmit(value.trim().toLowerCase(), searchType);
  };

  const onInputChange = e => setValue(e.target.value);

  const onSearchTypeChange = selectedOption => {
    const newSearchType = selectedOption.value;
    handleOnSubmit(value.trim().toLowerCase(), newSearchType);
    setType(newSearchType);
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <InputWrapper>
          <Input type="text" value={value} onChange={onInputChange} />
          <Btn type="submit">Search</Btn>
        </InputWrapper>
      </Form>
      <SelectorWrapper>
        <SelectorText>Search by: </SelectorText>

        <Select
          value={selectedOption}
          onChange={onSearchTypeChange}
          options={options}
          styles={customStyles}
          isSearchable={false}
          menuPosition="fixed"
          getOptionLabel={option => option.label}
        />
      </SelectorWrapper>
    </>
  );
};
