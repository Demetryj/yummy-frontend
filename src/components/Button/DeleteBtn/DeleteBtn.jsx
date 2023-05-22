import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';

import { removeRecipe, removeFavorite } from 'modules';
import { DeleteBtnWrapper } from './DeleteBtn.styled';

export const DeleteBtn = ({ location, id, mode }) => {
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
      mode={mode}
    >
      <RiDeleteBinLine />
    </DeleteBtnWrapper>
  );
};
