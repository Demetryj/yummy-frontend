import { useState } from 'react';
import toast from 'react-hot-toast';

import { SearchTypeSelector } from 'components/SearchTypeSelector';
import { SearchForm } from 'components/SearchForm';

import { Container } from './SearchBar.styled';

export const SearchBar = ({
  handleOnSubmit,
  searchType = 'title',
  searchQuery,
  mode,
}) => {
  const [value, setValue] = useState(searchQuery ?? '');
  const [setType] = useState(searchType);
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    if (value === '')
      return toast.error('Please, type something to search.', {
        duration: 2000,
        position: 'top-center',
      });
    handleOnSubmit(value.trim(), searchType);
  };

  const onInputChange = e => setValue(e);

  const onSearchTypeChange = selectedOption => {
    const newSearchType = selectedOption.value;
    handleOnSubmit(value.trim(), newSearchType);
    setType(newSearchType);
    setSelectedOption(selectedOption);
  };

  return (
    <Container>
      <SearchForm
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        mode={mode}
      />
      <SearchTypeSelector
        selectedOption={selectedOption}
        onSearchTypeChange={onSearchTypeChange}
        mode={mode}
      />
    </Container>
  );
};
