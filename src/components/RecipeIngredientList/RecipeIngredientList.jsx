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
          <RecipeIngredientItem key={item._id} ingredient={item} />
        ))}
      </InngredientsList>
    </Container>
  );
};
// export const filteredIngredients = (ingredients, receiptIngredients) => {
//   return ingredients.filter(ingredient =>
//     ingredient._id.includes(receiptIngredients.id)
//   );
// };
// const arrayObj = [{
//     "object": {
//       id: "1",
//       name: 'obj1',
//       checkId: '001',
//     }
//   },
//   {
//     "object": {
//       id: "2",
//       name: 'obj2',
//       checkId: '002',
//     }
//   },
//   {
//     "object": {
//       id: '3',
//       name: 'obj3',
//       checkId: '003',
//     }
//   },
//   {
//     "object": {
//       id: "4",
//       name: 'obj4',
//       checkId: '004',
//     }
//   }
// ];

// const arrayCheckIds = ['003', '001'].map(e=>''+Number(e));

// console.log(arrayObj.filter(e => arrayCheckIds.includes(e.object.id)).map(e => e.object.name));
