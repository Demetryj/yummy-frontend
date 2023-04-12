import { CategoriesList } from 'components/CategoriesList';
import { Title } from 'components/CategoriesList/Title';
import { RecipesPhotosList } from 'components/RecipesPhotosList';

const Categories = () => {
  return (
    <main>
      <Title title="Categories" />
      <div
        style={{
          position: 'relative',
        }}
      >
        <CategoriesList />
        <RecipesPhotosList />
      </div>
    </main>
  );
};

export default Categories;
