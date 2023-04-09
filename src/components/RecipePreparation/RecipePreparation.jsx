import { nanoid } from 'nanoid';
import { ImageBlock } from './RecipePreparation.styled';
export const RecipePreparation = ({ recipe }) => {
  const { instructions, preview } = recipe;

  return (
    <div>
      <div>
        <h2>Recipe Preparation</h2>
        <div>{instructions}</div>
      </div>
      <ImageBlock>
        <img src={preview} alt="poster" />
      </ImageBlock>
    </div>
  );
};
