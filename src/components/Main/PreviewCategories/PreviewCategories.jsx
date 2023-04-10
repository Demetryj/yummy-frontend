import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useMedia } from 'hooks/useMedia';
import { selectRecipesPopular, selectIsLoading } from 'redux/recipes/selectors';
import { fetchRecipesMainPage } from 'redux/recipes/operations';
import { Loader } from 'components/Loader';
import { SearchItem } from "components/SearchFragments/SearchItem";
import { List, ListCard, ButtonCard, ButtonDown, LinkRecipe, MainTitle,LinkDown } from './PreviewCategories.styled';

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
          Object.keys(recipesPopular).map(category => {
            const recipes = recipesPopular[category];
            return (
              <li key={category}>
                <MainTitle>{category}</MainTitle>  
                <ListCard>
                  {recipes.slice(0, numCard).map(({_id, title,  thumb}) => {
                    return (
                      <LinkRecipe to={`/recipe/${_id}`}>
                        <li key={_id}>
                          <SearchItem title={title} img={thumb}></SearchItem>
                        </li>
                      </LinkRecipe>
                    );
                  })}
                </ListCard>
                  <ButtonCard to={`/categories/${recipesPopular[category].category}`}>See all</ButtonCard>
              </li>
            );
          })
        ) : (
          <Loader />
        )}
      </List>
      <LinkDown to="/categories">
        <ButtonDown>Other categories</ButtonDown>
      </LinkDown>

    </>
  );
};
