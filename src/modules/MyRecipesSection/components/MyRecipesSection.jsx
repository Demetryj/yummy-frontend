import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getRecipes } from '../redux';
import { onScrollUp } from 'utils/scrollUp';
import img from 'images/default.jpg';
import { useMyRecipes } from '../hooks';
import { OwnRecipesSection } from 'components/OwnRecipesSection';

export const MyRecipesSection = () => {
  const dispatch = useDispatch();
  const { recipes, total, isLoading, error } = useMyRecipes();
  const limit = 4;

  const [page, setPage] = useState(1);
  useEffect(() => {
    if (error !== null)
      toast.error(error, {
        duration: 10000,
        position: 'top-center',
      });
  }, [error]);

  useEffect(() => {
    dispatch(getRecipes({ page, limit }));
  }, [dispatch, page]);

  const handleChange = (event, value) => {
    setPage(value);
    onScrollUp();
  };

  return (
    <OwnRecipesSection
      isLoading={isLoading}
      recipes={recipes}
      location="recipes"
      titleText="My recipes"
      emptyPageText="You currently don't have any own recipes added. Let's add some!"
      img={img}
      total={total}
      page={page}
      limit={limit}
      handleChange={handleChange}
    />
  );
};
