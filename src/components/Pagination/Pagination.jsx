import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { PaginationWrapper } from './Pagination.styled';

export const PaginationComp = ({ count, page, handleChange }) => {
  const theme = useSelector(selectTheme);

  return (
    <PaginationWrapper mode={theme}>
      <Pagination
        siblingCount={0}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </PaginationWrapper>
  );
};
