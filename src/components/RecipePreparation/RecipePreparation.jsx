import { nanoid } from 'nanoid';
import {
  ImageBlock,
  InstructionWrapper,
  InstructionList,
  InstructionTitle,
  InstructionText,
  Container,
} from './RecipePreparation.styled';
import plug from 'images/plugs/image 300x323@2x.png';
import { getPoster } from 'utils/getPlugImageIngredient';

export const RecipePreparation = ({ recipe, mode }) => {
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
        <InstructionText key={nanoid()} mode={mode}>
          <span>{index + 1}</span>
          <p>{slicedItem}</p>
        </InstructionText>
      );
    });

  return (
    <Container>
      <InstructionWrapper>
        <InstructionTitle mode={mode}>Recipe Preparation</InstructionTitle>
        <InstructionList>{items}</InstructionList>
      </InstructionWrapper>
      <ImageBlock>
        <img src={getPoster(preview, plug)} alt="poster" />
      </ImageBlock>
    </Container>
  );
};
