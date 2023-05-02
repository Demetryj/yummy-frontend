import { useDispatch } from 'react-redux';
import { DeleteBtnWrapper } from './DeleteBtn.styled';
import sprite from '../../../images/symbol-defs.svg';
import { removeRecipe, removeFavorite } from 'modules';

export const DeleteBtn = ({ location, id }) => {
  const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    if (location === 'favorite') {
      dispatch(removeFavorite(id));
    }
    if (location === 'recipes') {
      dispatch(removeRecipe(id));
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
