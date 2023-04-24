import { forwardRef } from 'react';
import { Image, ImageItemLink, Lable } from './RecipesPhotoList.styled';
import defaultImage from 'images/plugs/image 300x323.png';

export const RecipeCard = forwardRef(({ recipe }, ref) => {
  const ItemBody = (
    <ImageItemLink to={`/recipe/${recipe._id}`}>
      <Image
        src={`${recipe.thumb ? recipe.thumb : defaultImage}`}
        loading="lazy"
      />
      <Lable>{recipe.title}</Lable>
    </ImageItemLink>
  );
  const content = ref ? <li ref={ref}>{ItemBody}</li> : <li>{ItemBody}</li>;
  return content;
});
