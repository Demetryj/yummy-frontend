import { useMedia } from 'hooks/useMedia';
import { Link } from 'react-router-dom';
import {
  ListCategory,
  ListCard,
  ButtonSeeAll,
  ButtonDown,
  WrapRecipe,
  LinkDown,
  Wrap,
  WrapCategory,
} from './PreviewCategories.styled';
import { MainTitle } from "components/MainTitle/MainTitle"
import { SearchedRecipesItem } from 'components/SearchedRecipesItem';

export const PreviewCategories = ({ recipes }) => {
  const { isMobile, isTablet } = useMedia();
  // const recipesPopular = recipes[category];
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
      <ListCategory>
        {Object.keys(recipes).map(category => {
          const recipesPopular = recipes[category];
          return (
            <WrapCategory key={category}>
              <MainTitle title={category}/>
              <ListCard>
                {recipesPopular
                  .slice(0, numCard)
                  .map(({ _id, title, thumb }) => {
                    return (
                      <WrapRecipe key={_id}>
                        <Link to={`/recipe/${_id}`}>
                          <SearchedRecipesItem title={title} img={thumb} />
                        </Link>
                      </WrapRecipe>
                    );
                  })}
              </ListCard>
              <Wrap>
                <Link to={`/categories/${category}`}>
                  <ButtonSeeAll>See all</ButtonSeeAll>
                </Link>
              </Wrap>
            </WrapCategory>
          );
        })}
      </ListCategory>
      <LinkDown to="/categories">
        <ButtonDown>Other categories</ButtonDown>
      </LinkDown>
    </>
  );
};
