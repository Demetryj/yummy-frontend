import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { selectRecipesPopular, selectIsLoading } from 'redux/recipes/selectors';
import { fetchRecipesMainPage } from 'redux/recipes/operations';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { MainTitle } from '../../MainTitle/MainTitle';
import { SearchItem } from "components/SearchFragments/SearchItem";

import { List, ListCard, BtnRecipe, Button } from './PreviewCategories.styled';
import { useEffect } from 'react';
import { useMedia } from 'hooks/useMedia';

export const PreviewCategories = () => {
  const { isMobile, isTablet } = useMedia();
  let numCard;

  if (isMobile) {
    numCard = 1;
  } else if (isTablet) {
    numCard = 2;
  } else {
    numCard = 4;
  }

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchRecipesMainPage());
  }, [dispatch]);

  const recipesPopular = useSelector(selectRecipesPopular);
  return (
    <>

      <List>
        {recipesPopular && !isLoading ? (
          Object.keys(recipesPopular).map(keyRecipe => {
            const recipes = recipesPopular[keyRecipe];
            return (
              <li key={uuidv4()}>
                <MainTitle title={keyRecipe} />   
                <ListCard>
                  {recipes.slice(0, numCard).map(({_id, title,  thumb}) => {
                    return (
                      <BtnRecipe to={`/recipe/${_id}`}>
                        <li key={_id}>
                          <SearchItem title={title} img={thumb}></SearchItem>
                        </li>
                      </BtnRecipe>
                    );
                  })}
                </ListCard>
                <Link to={`/categories/${recipesPopular[keyRecipe].category}`}>
                  <Button>See all</Button>
                </Link>
              </li>
            );
          })
        ) : (
          <Loader />
        )}
      </List>
      <Link to="/categories">
        <Button>Other categories</Button>
      </Link>

    </>
  );
};
