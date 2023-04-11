export const customStyles = {
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
