import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectError,
  selectIsLoading,
  selectRecipes,
} from 'redux/recipes/selectors';
import { getRecipeById } from 'redux/recipes/operations';
import { selectTheme } from 'redux/theme/selectors';
import { RecipeIngredientList } from 'components/RecipeIngredientList';
import { RecipePageHero } from 'components/RecipePageHero';
import { RecipePreparation } from 'components/RecipePreparation';
import { Loader } from 'components/Loader/Loader.jsx';
import { ScrollUpButton } from 'components/Button/ScrollUpButton';
import { ErrorText } from 'components/ErrorText/ErrorText';
import { onScrollUp } from 'utils/scrollUp';

const Recipe = () => {
  const [heightHero, setHeightHero] = useState(0);
  const { recipeId } = useParams();
  const [recipe] = useSelector(selectRecipes);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
    onScrollUp();
  }, [dispatch, recipeId]);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  });
  const [buttonVisible, setButtonVisible] = useState(false);

  const scrollHandler = e => {
    const tg = e.target;
    if (tg.documentElement.scrollTop >= 700) {
      setButtonVisible(true);
    } else if (tg.documentElement.scrollTop < 200) setButtonVisible(false);
  };
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {recipe && (
        <RecipePageHero getHeightHero={setHeightHero} recipe={recipe} />
      )}
      {recipe && (
        <RecipeIngredientList
          heightHero={heightHero}
          recipe={recipe}
          mode={theme}
        />
      )}

      {recipe && <RecipePreparation recipe={recipe} mode={theme} />}
      {isLoading && !error && !recipe && <Loader />}
      {buttonVisible && <ScrollUpButton handleClick={handleClick} />}
      {error && <ErrorText />}
    </>
  );
};

export default Recipe;
