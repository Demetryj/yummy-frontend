import { CategoriesList } from 'components/CategoriesList';
import { Title } from 'components/CategoriesList/Title';
import { RecipesPhotosList } from 'components/RecipesPhotosList';

const Categories = () => {
  return (
    <>
      <Title title="Categories" />
      <div
        style={{
          position: 'relative',
        }}
      >
        <CategoriesList />
        <RecipesPhotosList />
      </div>
    </>
  );
};

export default Categories;
