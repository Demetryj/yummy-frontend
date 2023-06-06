import { useDispatch, useSelector } from 'react-redux';
import { selectRecipesPopular } from 'redux/recipes/selectors';
import { getRecipesPopular } from 'redux/recipes/operations';
import { useEffect } from 'react';
import {
  Card,
  Container,
  AboutRecipe,
  RecipeList,
  BoxTitle,
  CardTitle,
  CardText,
  Image,
  ImageDiv,
  ListItem,
} from './PopularRecipe.styled';
import { Link } from 'react-router-dom';
import { useMedia } from 'hooks/useMedia';

const PopularRecipe = ({ mode }) => {
  const { isMobile, isTablet } = useMedia();
  let numCard;

  if (isMobile) {
    numCard = 4;
  } else if (isTablet) {
    numCard = 2;
  } else {
    numCard = 4;
  }

  const dispatch = useDispatch();
  const popular = useSelector(selectRecipesPopular);
  useEffect(() => {
    dispatch(getRecipesPopular());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <BoxTitle mode={mode}>Popular recipe</BoxTitle>
        <RecipeList>
          {popular.length > 0 ? (
            popular
              .slice(0, numCard)
              .map(({ _id, title, description, thumb }) => (
                <ListItem key={_id}>
                  <Link to={`/recipe/${_id}`}>
                    <Card>
                      <ImageDiv>
                        <Image src={thumb} alt={title} />
                      </ImageDiv>

                      <AboutRecipe>
                        <CardTitle mode={mode}>
                          {title.length > 15
                            ? `${title.substring(0, 20)}...`
                            : title}
                        </CardTitle>
                        <CardText mode={mode}>
                          {description.length > 80
                            ? `${description.substring(0, 80)}...`
                            : description}
                        </CardText>
                      </AboutRecipe>
                    </Card>
                  </Link>
                </ListItem>
              ))
          ) : (
            <p>Something went wrong</p>
          )}
        </RecipeList>
      </div>
    </Container>
  );
};

export default PopularRecipe;
