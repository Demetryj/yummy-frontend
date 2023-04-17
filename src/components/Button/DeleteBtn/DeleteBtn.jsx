import { useDispatch } from 'react-redux';
import { removeFavorite } from 'redux/recipes/favoritesOperations';
import { removeOwnRecipe } from 'redux/recipes/ownRecipesOperations';

import { DeleteBtnWrapper } from './DeleteBtn.styled';
import sprite from '../../../images/symbol-defs.svg';

export const DeleteBtn = ({ location, id }) => {
  const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    if (location === 'favorite') {
      dispatch(removeFavorite(id));
    }
    if (location === 'recipes') {
      dispatch(removeOwnRecipe(id));
    }
  };
  return (
    <DeleteBtnWrapper
      type="button"
      onClick={handleDeleteBtnClick}
      location={location}
    >
      <svg>
        <use href={sprite + `#trash`} />
      </svg>
    </DeleteBtnWrapper>
  );
};
