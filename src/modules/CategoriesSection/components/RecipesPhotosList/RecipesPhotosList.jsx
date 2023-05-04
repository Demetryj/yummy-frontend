import { useCategories } from '../../hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipesByCategory } from '../../redux';
import { PhotosList } from './RecipesPhotoList.styled';
import { RecipeCard } from './RecipeCard';
import { RecipeImageLoader } from 'components/ContentLoader';


export const RecipesPhotosList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { recipesOfCategory, pagination, isLoading } = useCategories();
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [firstRender, setFirstRender] = useState(false);
  const isFirstRenderCategory = useRef('');
  const intObserver = useRef();

  useEffect(() => {
    const limit = window.innerWidth > 1440 ? 12 : 8;
    if (isFirstRenderCategory.current !== categoryName) {
      isFirstRenderCategory.current = categoryName;
      setFirstRender(true);
      dispatch(getRecipesByCategory({ categoryName, page: 1, limit }));
      return;
    }
    dispatch(getRecipesByCategory({ categoryName, page, limit }));
  }, [categoryName, page, dispatch]);
  useEffect(() => {
    const limit = window.innerWidth > 1440 ? 12 : 8;
    if (recipesOfCategory.length !== 0) {
      setRecipes(prvR =>
        pagination?.curPage === 1
          ? [...recipesOfCategory]
          : [...prvR, ...recipesOfCategory]
      );
      setHasNextPage(
        pagination?.curPage < Math.ceil(pagination?.total / limit)
      );
    }
  }, [recipesOfCategory, pagination]);
  const lastCardRef = useCallback(
    recipe => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver(entry => {
        if (entry[entry.length - 1].isIntersecting && hasNextPage) {
          setPage(pagination.curPage + 1);
          setFirstRender(false);
        }
      });
      if (recipe) intObserver.current.observe(recipe);
    },
    [isLoading, hasNextPage, pagination]
  );
  const imageLoaderOpts = window.innerWidth < 1440 ? 335 : 300;
  return (
    <>
      {' '}
      {recipes && recipes.length !== 0 && (
        <PhotosList>
          {isLoading && firstRender
            ? [0, 1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                <RecipeImageLoader key={i} viewBox={imageLoaderOpts} />
              ))
            : recipes.map((recipe, i) =>
                i + 1 === recipes.length ? (
                  <RecipeCard
                    key={recipe._id + i}
                    recipe={recipe}
                    ref={lastCardRef}
                  />
                ) : (
                  <RecipeCard key={recipe._id + i} recipe={recipe} />
                )
              )}
        </PhotosList>
      )}
    </>
  );
};
