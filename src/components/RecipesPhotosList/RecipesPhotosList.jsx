import { useCategories } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchRecipesByCategory } from 'redux/recipes';
import { Lable, PhotosList, Image, ImageItem } from './RecipesPhotoList.styled';

export const RecipesPhotosList = () => {
  const dispatch = useDispatch();
  // const [searchParam, setSearchParam] = useSearchParams();
  const { categoryName } = useParams();
  useEffect(() => {
    dispatch(fetchRecipesByCategory(categoryName));
  }, [dispatch, categoryName]);

  const { recipesOfCategory } = useCategories();

  return (
    recipesOfCategory.length !== 0 && (
      <PhotosList>
        {recipesOfCategory[0].recipeData.map(el => (
          <ImageItem ImageItem>
            <Image src={`${el.thumb}`} />
            <Lable>{el.title}</Lable>
          </ImageItem>
        ))}
      </PhotosList>
    )
  );
};
