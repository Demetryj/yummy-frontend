import { useCategories } from '../../hooks';
import { CategoriesList } from '../CategoriesList';
import { RecipesPhotosList } from '../RecipesPhotosList';
import { CategoriesSectionStyled } from './CategoriesSection.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { useEffect, useState } from 'react';
import { ScrollUpButton } from 'components/Button';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader';

export const CategoriesSection = () => {
  const { isLoading, error } = useCategories();

  useEffect(() => {
    if (error)
      toast.error(error, {
        duration: 10000,
        position: 'top-center',
      });
  }, [error]);

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
    <CategoriesSectionStyled>
      {isLoading && <Loader />}
      {buttonVisible && <ScrollUpButton handleClick={handleClick} />}
      <MainTitle title="Categories" />
      <CategoriesList />
      <RecipesPhotosList />
    </CategoriesSectionStyled>
  );
};
