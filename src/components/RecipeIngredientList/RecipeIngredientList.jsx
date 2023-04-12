import {
  Container,
  Table,
  Text,
  Label,
  InngredientsList,
} from './RecipeIngredientList.styled';

import { RecipeIngredientItem } from 'components/RecipeIngredientItem/RecipeIngredientItem';
export const RecipeIngredientList = ({ recipe }) => {
  const { ingredients } = recipe;

  return (
    <Container>
      <Table>
        <Text>Ingredients</Text>
        <Text>
          Number <Label>Add to list</Label>
        </Text>
      </Table>
      <InngredientsList>
        {ingredients.map(item => (
          <li key={item.id}>
            <RecipeIngredientItem ingredient={item} />
          </li>
        ))}
      </InngredientsList>
    </Container>
  );
};
