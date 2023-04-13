import { useCategories } from 'hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipesByCategory } from 'redux/recipes';
import { PhotosList } from './RecipesPhotoList.styled';
import { NotifyError } from 'components/CategoriesList/Notify';
import { RecipeCard } from './RecipeCard';

export const RecipesPhotosList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState(categoryName);
  const limit = 8;
  const [hasNextPage, setHasNextPage] = useState(false);
  const { recipesOfCategory, isLoading } = useCategories();
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setPage(1);
    dispatch(fetchRecipesByCategory({ category }));
    if (!recipesOfCategory || recipesOfCategory.length === 0) {
      NotifyError('..something going wrong..');
      return () => controller.abort();
    }
    setPage(prevPage => prevPage + 1);
    setRecipes([...recipesOfCategory[0].recipeData]);
    setHasNextPage(Boolean(recipesOfCategory[0].metaData[0].total > limit));
  }, [category]);

  useEffect(() => {
    dispatch(fetchRecipesByCategory({ category }));
    setHasNextPage(Boolean());
    if (!recipesOfCategory || recipesOfCategory.length === 0) {
      NotifyError('..something going wrong..');
      return;
    } else if (
      page >= Math.ceil(recipesOfCategory[0].metaData[0].total / limit)
    ) {
      setHasNextPage(false);
    }
    return () => controller.abort();
  }, [page, category]);

  const intObserver = useRef();
  const lastCardRef = useCallback(
    recipe => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver(recipes => {
        if (recipes[0].isIntersecting && hasNextPage) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (recipe) intObserver.current.observe(recipe);
    },
    [isLoading, hasNextPage]
  );

  // const total = recipesOfCategory[0].metaData[0].total;

  // let options = {
  //   root: null,
  //   rootMargin: '0%',
  //   threshold: 1.0,
  // };

  // let callback = (entries, observer) => {
  //   entries.forEach(
  //     async entry => {
  //       // setPage(prevPage => prevPage + 1);
  //       // if (page > Math.ceil(total / limit)) return;
  //       observer.unobserve(entry.target);
  //     }
  //     // else if( Math.ceil(total / limit))
  //   );
  // };
  // const observer = new IntersectionObserver(callback, options);
  // const lastCard = window.document.querySelector('img:last-child');
  // observer.observe(lastCard);
  return (
    recipesOfCategory.length !== 0 && (
      <PhotosList>
        {recipesOfCategory[0].recipeData.map((recipe, i) =>
          recipesOfCategory[0].recipeData.length === i + 1 ? (
            <RecipeCard key={recipe._id} recipe={recipe} ref={lastCardRef} />
          ) : (
            <RecipeCard key={recipe._id} recipe={recipe} />
          )
        )}
      </PhotosList>
    )
  );
};
