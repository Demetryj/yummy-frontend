import { PhotosList } from './RecipesPhotoList.styled';
import { useCategories } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchRecipesByCategory } from 'redux/recipes';
import { Image } from './RecipesPhotoList.styled';

export const RecipesPhotosList = () => {
  const dispatch = useDispatch();
  // const [searchParam, setSearchParam] = useSearchParams();
  const { categoryName } = useParams();
  useEffect(() => {
    dispatch(fetchRecipesByCategory(categoryName));
  }, [dispatch, categoryName]);

  const { recipesOfCategory } = useCategories();

  console.log(recipesOfCategory);
  return (
    recipesOfCategory.length !== 0 && (
      <PhotosList>
        {recipesOfCategory[0].recipeData.map(el => (
          <li>
            <Image src={`${el.thumb}`} />
          </li>
        ))}
      </PhotosList>
    )
  );
};
