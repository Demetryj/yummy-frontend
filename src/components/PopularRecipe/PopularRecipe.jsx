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
} from './PopularRecipe.styled';

const PopularRecipe = () => {
  return (
    <Container>
      <div><BoxTitle>Popular recipe</BoxTitle>
      <RecipeList>
        <li>
          <Card>
            <ImageDiv>
              <Image src="" alt="" />
            </ImageDiv>

            <AboutRecipe>
              <CardTitle>Title</CardTitle>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </CardText>
            </AboutRecipe>
          </Card>
        </li>
        <li>
          <Card>
            <ImageDiv>
              <Image src="" alt="" />
            </ImageDiv>

            <AboutRecipe>
              <CardTitle>Title</CardTitle>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </CardText>
            </AboutRecipe>
          </Card>
        </li>
        <li>
          <Card>
            <ImageDiv>
              <Image src="" alt="" />
            </ImageDiv>

            <AboutRecipe>
              <CardTitle>Title</CardTitle>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </CardText>
            </AboutRecipe>
          </Card>
        </li>
        <li>
          <Card>
            <ImageDiv>
              <Image src="" alt="" />
            </ImageDiv>

            <AboutRecipe>
              <CardTitle>Title</CardTitle>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </CardText>
            </AboutRecipe>
          </Card>
        </li>
      </RecipeList>
</div>
          </Container>
  );
};

export default PopularRecipe;
