import { useMedia } from 'hooks/useMedia';
import { SearchItem } from "components/SearchFragments/SearchItem";
import { ListCategories, ListCard, ButtonSeeAll, ButtonDown, LinkRecipe, Categoty, LinkDown, Wrap } from './PreviewCategories.styled';
import { Link } from 'react-router-dom'; 

export const PreviewCategories = ({recipes}) => {
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
      <ListCategories>
        {
          Object.keys(recipes).map(category => {
            const recipesPopular = recipes[category];
            return (
              <li key={category}>
                <Categoty>{category}</Categoty>  
                <ListCard>
                  {recipesPopular.slice(0, numCard).map(({_id, title,  thumb}) => {
                    return (              
                        <LinkRecipe  key={_id}>
                          <Link to={`/recipe/${_id}`}>
                          <SearchItem title={title} img={thumb}/>
                          </Link>
                        </LinkRecipe>  
                    );
                  })}
                </ListCard>
                <Wrap>
                <ButtonSeeAll to={`/categories/${recipes[category].category}`}>See all</ButtonSeeAll>
                </Wrap>
              </li>
            );
          })
         }
      </ListCategories>
      <LinkDown to="/categories">
        <ButtonDown>Other categories</ButtonDown>
      </LinkDown>
    </>
  );
};
