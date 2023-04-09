import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import FollowUs from 'components/FollowUs/FollowUs'
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
const AddRecipes = () => {
  return (
    <main>
      <AddRecipeForm />
      <FollowUs />
      <PopularRecipe />
    </main>
  );
};

export default AddRecipes;
