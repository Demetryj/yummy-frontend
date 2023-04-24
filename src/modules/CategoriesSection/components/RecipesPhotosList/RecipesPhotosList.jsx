import { useCategories } from '../../hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getRecipesByCategory } from '../../redux';
import { PhotosList } from './RecipesPhotoList.styled';
import { RecipeCard } from './RecipeCard';

export const RecipesPhotosList = () => {
  const dispatch = useDispatch();
  const intObserver = useRef();
  const { categoryName } = useParams();
  const { recipesOfCategory, pagination, isLoading } = useCategories();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const isFirstRender = useRef(category);
  const limit = 8;
  useEffect(() => {
    if (isFirstRender.current !== categoryName) {
      setCategory(categoryName);
      setPage(1);
      return;
    }
  }, [categoryName]);
  useEffect(() => {
    const queryOptions = page === 1 ? { category } : { category, page, limit };
    dispatch(getRecipesByCategory(queryOptions));
  }, [category, page, dispatch]);
  useEffect(() => {
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
      intObserver.current = new IntersectionObserver(recipes => {
        if (recipes[recipes.length - 1].isIntersecting && hasNextPage) {
          setPage(pagination.curPage + 1);
        }
      });
      if (recipe) intObserver.current.observe(recipe);
    },
    [isLoading, hasNextPage, pagination]
  );

  return (
    <>
      {' '}
      {recipes && recipes.length !== 0 && (
        <PhotosList>
          {recipes.map((recipe, i) =>
            i + 1 === recipes.length ? (
              <RecipeCard key={nanoid()} recipe={recipe} ref={lastCardRef} />
            ) : (
              <RecipeCard key={nanoid()} recipe={recipe} />
            )
          )}
        </PhotosList>
      )}
    </>
  );
};
