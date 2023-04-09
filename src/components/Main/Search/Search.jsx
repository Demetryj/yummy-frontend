import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';
import { fetchSearchRecipes } from '../../../redux/recipes/operations';
import { selectRecipes, selectIsLoading } from "../../../redux/recipes/selectors";
import { selectToken } from "../../../redux/auth/selectors";
import { Loader } from 'components/Loader';
import {
  Input,
  Button,
  SearchForm,
  SearchFormContainer
} from "./Search.styled";
import { useState } from 'react';

export const Search = () => {
  const [input,setInput] = useState("");
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
  console.log("token:",token);

  const changeHandleSearch = e => {
    const { value } = e.currentTarget;
    console.log("value:",value);
    setInput(value.trim());
    if(input === ""){
      return;
    }else{localStorage.setItem('query', value.toLowerCase());}
  };

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault(); 
    // const form = e.currentTarget; // використовую для очистки поля вводу
    const queryInput = localStorage.getItem('query');

    if (!queryInput || input === "") {
      console.log("in toaster");
      console.log("queryInput: ",queryInput);
      return toast.error('Please enter title.', {
        duration: 2000,
        position: "top-center",
      });
    } 

    if(input === ""){
      return;
    }else{
      navigate("/search",{replace: true});
    };

    dispatch(fetchSearchRecipes(queryInput));
    console.log("recipies:",recipes)
// remowe LocalStarage
    //  як при перевірці recipes, якщо там пустий масив відрендирити блок з помилкою?
//  form.reset(); // очистити стрічку вводу
 setInput("");
  };

  // const goToSearch = 

  return (
          <SearchFormContainer>
            <SearchForm 
            onSubmit={handleSubmit}
            >
              <Input type="text"
            name="queryInput"
            value={input}// TODO! не знаю чи воно потрібно, якщо так то, що присвоїти?
            onChange={changeHandleSearch }
            autocomplete="off"
            autoFocus
            placeholder="Search recipe" />
            { (recipes.length === 0 && isLoading) && <Loader/>}
          {/* <Link to="/search"> */}
          <Button type="submit" 
          // onClick={goToSearch}
          >Search</Button>
          {/* </Link>      */}
          </SearchForm>
          <Toaster />
          </SearchFormContainer> 
          );
};