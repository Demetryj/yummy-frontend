import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {} from '../../../redux/recipes/operations'
import {
  Input,
  Button,
  SearchForm,
  SearchFormContainer
} from "./Search.styled";

export const Search = () => {
  // const [query, setQuery] = useState(''); // зробити тимчасовий useState ???

  const changeHandleSearch = e => {
    const { value } = e.currentTarget;
  localStorage.setItem('query', value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault(); 
    const form = e.currentTarget; // використовую для очистки поля вводу
    
    const queryInput = localStorage.getItem('query');

    if (!queryInput) {
      console.log("in toaster");
      return toast.error('Please enter title.', {
        duration: 2000,
        position: "top-center",
      });
    } 

    // dispatch()
//делаем запрос на бекенд
// localStorage.removeItem("query"); // -  це потрібно ???
// очистити стрічку вводу - ??? setQuery('');
 form.reset(); // очистити стрічку вводу
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