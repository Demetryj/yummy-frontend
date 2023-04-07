import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
//  TODO! записать то, что ввели в строку поиска в Local Storage
import {
  Input,
  Button,
  SearchForm,
  SearchFormContainer
} from "./Search.styled";

export const Search = () => {
  // зробити тимчасовий useState ???
  const changeHandleSearch = e => {
  const { value } = e.currentTarget;
 
  localStorage.setItem('query', value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault(); 
    const { value } = e.currentTarget;
    console.log('value',value);
    const queryInput = localStorage.getItem('query');
     // const dispatch = useDispatch();

    if (!value) {
      console.log("in toaster");
      return toast.error('Please enter title.', {
        duration: 2000,
        position: "top-center",
      });
    } 
//делаем запрос на бекенд
// localStorage.removeItem("query"); // -  це потрібно ???
  };

  return (
          <SearchFormContainer>
            <SearchForm 
            onSubmit={handleSubmit}
            >
              <Input type="text"
            name="queryInput"
            //  value={query} // TODO!
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