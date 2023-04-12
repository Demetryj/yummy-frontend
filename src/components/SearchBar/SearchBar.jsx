import { useState } from 'react';
import toast from 'react-hot-toast';

import { SearchTypeSelector } from 'components/SearchTypeSelector';
import { SearchForm } from 'components/SearchForm';

import { Container } from './SearchBar.styled';

export const SearchBar = ({
  handleOnSubmit,
  searchType = 'title',
  searchQuery,
}) => {
  const [value, setValue] = useState(searchQuery ?? '');
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState(searchType);
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    if (value === '')
      return toast.error('Please, type something to search.', {
        duration: 2000,
        position: 'top-center',
      });
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
    <Container>
      <SearchForm
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        value={value}
      />
      <SearchTypeSelector
        selectedOption={selectedOption}
        onSearchTypeChange={onSearchTypeChange}
      />
    </Container>
  );
};
