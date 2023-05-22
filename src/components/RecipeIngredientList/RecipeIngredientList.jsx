import { RecipeIngredientItem } from 'components/RecipeIngredientItem';
import {
  Container,
  Table,
  Text,
  Label,
  InngredientsList,
} from './RecipeIngredientList.styled';

export const RecipeIngredientList = ({ recipe, heightHero, mode }) => {
  const { ingredients } = recipe;

  return (
    <Container heightHero={heightHero}>
      <Table>
        <Text>Ingredients</Text>
        <Text>
          Number <Label>Add to list</Label>
        </Text>
      </Table>
      <InngredientsList>
        {ingredients.map(item => (
          <li key={item.id}>
            <RecipeIngredientItem ingrediento={item} mode={mode} />
          </li>
        ))}
      </InngredientsList>
    </Container>
  );
};
