import { CategoriesList } from 'components/CategoriesList';
import { RecipesPhotosList } from 'components/RecipesPhotosList';
import { CategoriesSection } from 'components/CategoriesList/CategoriesSection.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';

const Categories = () => {
  return (
    <main>
      <CategoriesSection>
        <MainTitle title="Categories" />
        <CategoriesList />
        <RecipesPhotosList />
      </CategoriesSection>
    </main>
  );
};

export default Categories;
