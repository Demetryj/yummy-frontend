import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {changeQuery} from '../../../redux/query/querySlice';
import {selectQuery} from "../../../redux/query/selector";
//  Нужно записать то, что ввели в строку поиска в Local Storage
import {Input, Button, SearchForm, SearchFormContainer} from "./Search.styled";


export const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const changeHandleSearch = e => {
  const { value } = e.currentTarget;

  dispatch(changeQuery(value));
  console.log(query);
  };

  // const handleSubmit = e => {
  // e.preventDefault();
  // };
        
          return (
          <SearchFormContainer>
            <SearchForm 
            // onSubmit={handleSubmit}
            >
              <Input type="text"
            name="query"
            value={query}
            onChange={changeHandleSearch }
            autocomplete="off"
            autoFocus
            placeholder="Beef" />
              <Button type="submit">Search</Button>
            </SearchForm>
          </SearchFormContainer>  
          );
};

Search.propTypes = {
  query: PropTypes.string,
};