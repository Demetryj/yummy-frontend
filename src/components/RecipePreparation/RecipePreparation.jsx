import { nanoid } from 'nanoid';
import {
  ImageBlock,
  // PreparationWrapper,
  InstructionWrapper,
  InstructionList,
  InstructionText,
  Container,
} from './RecipePreparation.styled';
export const RecipePreparation = ({ recipe }) => {
  const { instructions, preview } = recipe;
  const items = instructions
    .split('\r\n')
    .filter(elem => {
      if (!elem) return false;
      if (!isNaN(elem)) return false;
      if (elem.toLowerCase().includes('step')) return false;
      return true;
    })
    .map((item, index) => {
      let slicedItem = item;
      for (let i = 0; i < 2; i++) {
        if (!isNaN(slicedItem[i]) || slicedItem[i] === '.') {
          slicedItem = slicedItem.slice(i + 1);
        }
      }
      return (
        <InstructionText key={nanoid()}>
          <span>{index + 1}</span>
          <p>{slicedItem}</p>
        </InstructionText>
      );
    });
  return (
    <Container>
      <InstructionWrapper>
        <h2>Recipe Preparation</h2>
        <InstructionList>{items}</InstructionList>
      </InstructionWrapper>
      <ImageBlock>
        <img src={preview} alt="poster" />
      </ImageBlock>
    </Container>
  );
};
// const items =
//     instructions.includes('1)') || instructions.includes('1.', '2.')|| instructions.includes('step');

//   console.log(items);
//   if (items) {
//     items.split('.');
//     if(items[items.length - 1] ==='')
//   }
