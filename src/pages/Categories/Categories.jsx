import { useCategories } from 'hooks/useCategories';
import { CategoriesList } from 'components/CategoriesList/CategoriesList';
import { RecipesPhotosList } from 'components/RecipesPhotosList';
import { CategoriesSection } from './CategoriesSection.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';
// import { useEffect, useState } from 'react';
// import { ScrollUpButton } from 'components/Button/ScrollUpButton';
// import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader';

const Categories = () => {
  const { isLoading } = useCategories();
  // useEffect(() => {
  //   if (error === 'Request failed with status code 400') return;
  //   if (error && error !== null)
  //     toast.error(error, {
  //       duration: 10000,
  //       position: 'top-center',
  //     });
  // }, [error]);
  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHandler);
  //   return () => window.removeEventListener('scroll', scrollHandler);
  // });
  // const [buttonVisible, setButtonVisible] = useState(false);

  // const scrollHandler = e => {
  //   const tg = e.target;
  //   if (tg.documentElement.scrollTop >= 700) {
  //     setButtonVisible(true);
  //   } else if (tg.documentElement.scrollTop < 200) setButtonVisible(false);
  // };
  // const handleClick = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };
  return (
    <CategoriesSection>
      {isLoading && <Loader />}
      <MainTitle title="Categories" />
      <CategoriesList />
      <RecipesPhotosList />
      {/* {buttonVisible && <ScrollUpButton handleClick={handleClick} />} */}
    </CategoriesSection>
  );
};

export default Categories;
