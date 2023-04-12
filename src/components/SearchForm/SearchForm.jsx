import { Btn, Form, Input, InputWrapper } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, value, onInputChange }) => {
  return (
    <Form onSubmit={e => onSubmit(e)}>
      <InputWrapper>
        <Input type="text" value={value} onChange={e => onInputChange(e)} />
        <Btn type="submit">Search</Btn>
      </InputWrapper>
    </Form>
  );
};
