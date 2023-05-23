import Select from 'react-select';

import { customStyles } from 'utils';

import { SelectorText, SelectorWrapper } from './SearchTypeSelector.styled';

const options = [
  { label: 'Title', value: 'title' },
  { label: 'Ingredient', value: 'ingredient' },
];

export const SearchTypeSelector = ({
  selectedOption,
  onSearchTypeChange,
  mode,
}) => {
  return (
    <SelectorWrapper>
      <SelectorText mode={mode}>Search by: </SelectorText>

      <Select
        value={selectedOption}
        onChange={value => onSearchTypeChange(value)}
        options={options}
        styles={customStyles}
        isSearchable={false}
        menuPosition="fixed"
        getOptionLabel={option => option.label}
      />
    </SelectorWrapper>
  );
};
