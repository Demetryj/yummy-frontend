import { CategoriesList } from 'components/CategoriesList';
import { Title } from 'components/CategoriesList/Title';
import { RecipesPhotosList } from 'components/RecipesPhotosList';

const Categories = () => {
  return (
    <main>
      <Title title="Categories" />
      <CategoriesList />
      <RecipesPhotosList />
    </main>
  );
};

export default Categories;
