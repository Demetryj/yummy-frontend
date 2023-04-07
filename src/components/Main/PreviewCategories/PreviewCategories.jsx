import { useDispatch, useSelector } from 'react-redux';
import {selectRecipesPopular} from '../../../redux/recipes/selectors'
// import { RecipeGalleryItem } from 'components/';
import { Gallery } from './PreviewCategories.styled';

const categoriesPopular = ["Breakfast","Dessert","Miscellaneous","Vegan" ];

export const PreviewCategories = () => {
  const dispatch = useDispatch();
  const recipesPopular = useSelector(selectRecipesPopular);

  return (
    
    <Gallery>
    </Gallery>
  );
};