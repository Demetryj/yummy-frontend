import { useCategories } from 'hooks/useCategories';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { fetchRecipesByCategory } from 'redux/recipes';
import { PhotosList } from './RecipesPhotoList.styled';
import { RecipeCard } from './RecipeCard';

export const RecipesPhotosList = () => {
  const dispatch = useDispatch();
  const intObserver = useRef();
  const { categoryName } = useParams();
  const { recipesOfCategory, isLoading } = useCategories();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const limit = 8;

  useEffect(() => {
    setCategory(categoryName);
    setRecipes([]);
    setPage(1);
  }, [categoryName]);
  useEffect(() => {
    dispatch(fetchRecipesByCategory({ category, page, limit }));
  }, [category, page, dispatch]);
  useEffect(() => {
    const { recipeData, metaData } = recipesOfCategory;
    if (recipeData !== undefined) {
      setRecipes(prvR => [...prvR, ...recipeData]);
      setHasNextPage(metaData.curPage < Math.ceil(metaData.total / limit));
    }
  }, [recipesOfCategory]);

  const lastCardRef = useCallback(
    recipe => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver(recipes => {
        if (recipes[recipes.length - 1].isIntersecting && hasNextPage) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (recipe) intObserver.current.observe(recipe);
    },
    [isLoading, hasNextPage]
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
