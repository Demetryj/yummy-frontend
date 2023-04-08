import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipesPopular } from '../../../redux/recipes/selectors';
import { fetchRecipesMainPage } from '../../../redux/recipes/operations';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { MainTitle } from '../../MainTitle/MainTitle';
import { List, BtnRecipe, Button } from "./PreviewCategories.styled";

export const PreviewCategories = () => {
  const dispatch = useDispatch();
  dispatch(fetchRecipesMainPage());

  const recipesPopular = useSelector(selectRecipesPopular);

    return (
    <>
       <List>
        {recipesPopular ? Object.keys(recipesPopular).map((key) => {
          const recipes = recipesPopular[key];
      return <li key={uuidv4()}> 
      <MainTitle title={key}/>
      <List>
        {recipes.map((recipe) => { 
          return  <Link to={`/recipe/${recipe._id}`}>
          <BtnRecipe key={recipe._id}>{recipe.title}</BtnRecipe>
          </Link>})}
      </List>
      <Link to={`/categories/${recipesPopular[key].category}`}> 
      <Button>See all</Button>
      </Link>
    </li>
  }) : <Loader/>}
       </List>
       <Link to='/categories'>
       <Button>Other categories</Button>
       </Link>
      </>
  );
};

