import { forwardRef } from 'react';
import { Image, ImageItemLink, Lable } from './RecipesPhotoList.styled';

export const RecipeCard = forwardRef(({ recipe }, ref) => {
  console.log(recipe._id);
  console.log(recipe);
  const ItemBody = (
    <ImageItemLink to={`/recipe/${recipe._id}`}>
      <Image src={`${recipe.thumb}`} />
      <Lable>{recipe.title}</Lable>
    </ImageItemLink>
  );
  const content = ref ? <li ref={ref}>{ItemBody}</li> : <li>{ItemBody}</li>;
  return content;
});
