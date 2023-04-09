import {
  Card,
  Container,
  AboutRecipe,
  RecipeList,
} from './PopularRecipe.styled';

const PopularRecipe = () => {
  return (
    <Container>
      <h2>Popular recipe</h2>
      <RecipeList>
        <li>
          <Card>
            <img src="" alt="" />
            <AboutRecipe>
              <h4>Title</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </AboutRecipe>
          </Card>
        </li>
        <li>
          <Card>
            <img src="" alt="" />
            <AboutRecipe>
              <h4>Title</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </AboutRecipe>
          </Card>
        </li>
        <li>
          <Card>
            <img src="" alt="" />
            <AboutRecipe>
              <h4>Title</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </AboutRecipe>
          </Card>
        </li>
        <li>
          <Card>
            <img src="" alt="" />
            <AboutRecipe>
              <h4>Title</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </AboutRecipe>
          </Card>
        </li>
      </RecipeList>
    </Container>
  );
};

export default PopularRecipe;
