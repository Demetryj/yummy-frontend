import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectRecipesByIngredient } from 'redux/ingredients/selectors';
import { selectRecipes } from 'redux/recipes/selectors';

import { SearchedItemNotFound } from 'components/SearchedItemNotFound';
import { SearchedRecipesItem } from 'components/SearchedRecipesItem';

import { List } from './SearchedRecipesList.styled';

export const SearchedRecipesList = ({ type }) => {
  const selectedRecipes = useSelector(selectRecipes).map(item => ({
    title: item.title,
    id: item._id,
    img: item.thumb,
    ingredients: item.ingredients,
  }));

  const selectedRecipesByIngredient = useSelector(selectRecipesByIngredient);

  const recipes =
    type === 'title' ? selectedRecipes : selectedRecipesByIngredient;

  const navigate = useNavigate();

  const onClick = id => navigate(`/recipe/${id}`, { replace: true });

  return (
    <>
      {recipes.length > 0 ? (
        <List>
          {recipes.map(({ id, title, img }) => {
            return (
              <li key={id} onClick={() => onClick(id)}>
                <SearchedRecipesItem title={title} img={img} />
              </li>
            );
          })}
        </List>
      ) : (
        <SearchedItemNotFound />
      )}
    </>
  );
};
