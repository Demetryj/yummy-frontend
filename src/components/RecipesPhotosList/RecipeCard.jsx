import { forwardRef } from 'react';
import { Image, ImageItemLink, Lable } from './RecipesPhotoList.styled';

export const RecipeCard = forwardRef(({ recipe }, ref) => {
  const ItemBody = (
    <ImageItemLink to={`../recipe/${recipe._id}`}>
      <Image src={`${recipe.thumb}`} />
      <Lable>{recipe.title}</Lable>
    </ImageItemLink>
  );
  const content = ref ? (
    <li ref={ref}>{ItemBody}</li>
  ) : (
    <li key={recipe._id}>{ItemBody}</li>
  );
  return content;
});
