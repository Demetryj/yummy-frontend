import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFavorites } from '../redux';
import { onScrollUp } from 'utils/scrollUp';
import img from 'images/default.jpg';
import { useFavorites } from '../hooks';
import { toast } from 'react-toastify';
import { OwnRecipesSection } from 'components/OwnRecipesSection';

export const FavoritesSection = () => {
  const dispatch = useDispatch();
  const { recipes, total, isLoading, error } = useFavorites();
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
    dispatch(getFavorites({ page, limit }));
  }, [dispatch, page]);

  const handleChange = (event, value) => {
    setPage(value);
    onScrollUp();
  };

  return (
    <OwnRecipesSection
      isLoading={isLoading}
      recipes={recipes}
      location="favorite"
      titleText="Favorites"
      emptyPageText="You currently don't have any favorite recipes added."
      img={img}
      total={total}
      page={page}
      limit={limit}
      handleChange={handleChange}
    />
  );
};
