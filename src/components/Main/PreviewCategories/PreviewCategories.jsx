import { useMedia } from 'hooks/useMedia';
import { SearchItem } from "components/SearchFragments/SearchItem";
import { Link } from 'react-router-dom'; 
import { ListCategory, ListCard, ButtonSeeAll, ButtonDown, WrapRecipe, Categoty, LinkDown, Wrap } from './PreviewCategories.styled';
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
      <ListCategory>
        {
          Object.keys(recipes).map(category => {
            const recipesPopular = recipes[category];
            return (
              <li key={category}>
                <Categoty>{category}</Categoty>  
                <ListCard>
                  {recipesPopular.slice(0, numCard).map(({_id, title,  thumb}) => {
                    return (              
                        <WrapRecipe  key={_id}>
                          <Link to={`/recipe/${_id}`}>
                            <SearchItem title={title} img={thumb}/>
                          </Link>
                        </WrapRecipe>  
                    );
                  })}
                </ListCard>
                <Wrap>
                  <Link to={`/categories/${recipes[category].category}`}>
                    <ButtonSeeAll>See all</ButtonSeeAll>
                  </Link>
                </Wrap>
              </li>
            );
          })
         }
      </ListCategory>
      <LinkDown to="/categories">
        <ButtonDown>Other categories</ButtonDown>
      </LinkDown>
    </>
  );
};
