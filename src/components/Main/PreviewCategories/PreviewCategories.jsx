import { useMedia } from 'hooks/useMedia';
import {
  List,
  ListCard,
  ButtonCard,
  ButtonDown,
  LinkRecipe,
  MainTitle,
  LinkDown,
} from './PreviewCategories.styled';
import { SearchedRecipesItem } from 'components/SearchedRecipesItem';

export const PreviewCategories = ({ recipes }) => {
  const { isMobile, isTablet } = useMedia();
  let numCard;

  if (isMobile) {
    numCard = 1;
  } else if (isTablet) {
    numCard = 2;
  } else {
    numCard = 4;
  }

  return (
    <>
      <List>
        {Object.keys(recipes).map(category => {
          const recipesPopular = recipes[category];
          return (
            <li key={category}>
              <MainTitle>{category}</MainTitle>
              <ListCard>
                {recipesPopular
                  .slice(0, numCard)
                  .map(({ _id, title, thumb }) => {
                    return (
                      <LinkRecipe to={`/recipe/${_id}`}>
                        <li key={_id}>
                          <SearchedRecipesItem
                            title={title}
                            img={thumb}
                          ></SearchedRecipesItem>
                        </li>
                      </LinkRecipe>
                    );
                  })}
              </ListCard>
              <ButtonCard to={`/categories/${recipes[category].category}`}>
                See all
              </ButtonCard>
            </li>
          );
        })}
      </List>
      <LinkDown to="/categories">
        <ButtonDown>Other categories</ButtonDown>
      </LinkDown>
    </>
  );
};
