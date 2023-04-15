import { useCategories } from 'hooks/useCategories';
import { CategoriesList } from 'components/CategoriesList';
import { RecipesPhotosList } from 'components/RecipesPhotosList';
import { CategoriesSection } from './CategoriesSection.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { NotifyError } from 'components/CategoriesList/Notify';
import { useEffect, useState } from 'react';
import { ScrollUpButton } from 'components/Button/ScrollUpButton';
import { Loader } from 'components/Loader';

const Categories = () => {
  const { Error, isLoading } = useCategories();
  useEffect(() => {
    if (
      Error &&
      Error !== null &&
      Error !== 'Request failed with status code 400'
    )
      NotifyError(Error);
  }, [Error]);
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
    <main>
      <CategoriesSection>
        {isLoading && <Loader />}
        <MainTitle title="Categories" />
        <CategoriesList />
        <RecipesPhotosList />
        {buttonVisible && <ScrollUpButton handleClick={handleClick} />}
      </CategoriesSection>
    </main>
  );
};

export default Categories;
