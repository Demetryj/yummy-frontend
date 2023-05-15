import { FavoritesSection } from 'modules';
import { onScrollUp } from 'utils/scrollUp';

const Favorites = () => {
  onScrollUp();

  return <FavoritesSection />;
};

export default Favorites;
