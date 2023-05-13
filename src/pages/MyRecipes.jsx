import { MyRecipesSection } from 'modules';
import { onScrollUp } from 'utils/scrollUp';

const MyRecipes = () => {
  onScrollUp();

  return <MyRecipesSection />;
};

export default MyRecipes;
