import Select from 'react-select';

import {
  Btn,
  Form,
  // Input,
  InputWrapper,
} from './SearchForm.styled';

const customStyles = {
  control: provided => ({
    ...provided,
    width: '100%',
    height: '53px',
    fontSize: '12px',
    paddingLeft: '32px',
    borderRadius: '24px 44px',
    boxShadow: 'none',
    borderColor: '#F0F0F0',

    '&:focus, &:focus-visible, &:hover': {
      outline: 'none',
      boxShadow: 'none',
      borderColor: '#F0F0F0',
    },

    '@media screen and (min-width: 768px)': {
      height: '57px',
      paddingLeft: '38px',
      fontSize: '14px',
    },
    '@media screen and (min-width: 1440px)': {
      height: '70px',
      paddingLeft: '48px',
      fontSize: '16px',
    },
  }),
  menu: provided => ({
    ...provided,
    margin: 0,
    borderRadius: '24px 44px', // replace with the same value as in the styled component
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#EEE' : 'white',
    '&:hover': {
      backgroundColor: '#EEE',
    },
    color: '#3E4462',
  }),
};

export const SearchForm = ({ onSubmit, value, onInputChange }) => {
  return (
    <Form onSubmit={e => onSubmit(e)}>
      {/* <InputWrapper>
        <Input type="text" value={value} onChange={e => onInputChange(e)} />
        <Btn type="submit">Search</Btn>
      </InputWrapper> */}
      <InputWrapper>
        <Select
          value={value}
          onChange={e => onInputChange(e)}
          styles={customStyles}
        />
        <Btn type="submit">Search</Btn>
      </InputWrapper>
    </Form>
  );
};
