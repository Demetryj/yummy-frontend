import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {changeQuery} from '../../../redux/query/querySlice';
import {selectQuery} from "../../../redux/query/selector";
//  TODO! записать то, что ввели в строку поиска в Local Storage
import {
  Input,
  Button,
  SearchForm,
  SearchFormContainer
} from "./Search.styled";

export const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const changeHandleSearch = e => {
  const { value } = e.currentTarget;
  // .toLowerCase()
  dispatch(changeQuery(value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('Please enter title.', {
        duration: 2000,
        position: 'top-right',
      });
    } 
  };

  return (
          <SearchFormContainer>
            <SearchForm 
            onSubmit={handleSubmit}
            >
              <Input type="text"
            name="query"
            value={query}
            onChange={changeHandleSearch }
            autocomplete="off"
            autoFocus
            placeholder="Beef" />
          {/* <Link to="/search"> */}
          <Button type="submit">Search</Button>
          {/* </Link>      */}
          </SearchForm>
          </SearchFormContainer>  
          );
};

Search.propTypes = {
  query: PropTypes.string,
};