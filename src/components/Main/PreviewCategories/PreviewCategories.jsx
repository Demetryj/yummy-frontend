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
} from './PreviewCategories.styled';
import { MainTitle } from 'components/MainTitle';
import { SearchedRecipesItem } from 'components/SearchedRecipesItem';

export const PreviewCategories = ({ recipes, mode }) => {
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
      <ListCategory>
        {Object.keys(recipes).map(category => {
          const recipesStatic = recipes[category];
          return (
            <li key={category}>
              <MainTitle title={category} />
              <ListCard>
                {recipesStatic
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
                  <ButtonSeeAll mode={mode}>See all</ButtonSeeAll>
                </Link>
              </Wrap>
            </li>
          );
        })}
      </ListCategory>
      <LinkDown to={`/categories/Beef`}>
        <ButtonDown mode={mode}>Other categories</ButtonDown>
      </LinkDown>
    </>
  );
};
