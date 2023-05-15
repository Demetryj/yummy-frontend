import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './AvatarUpdateModal.styled';
import { AvatarUpdateForm } from '../AvatarUpdateForm_t';
import { toggleUserInfo } from '../../redux/modal';

const modalRoot = document.querySelector('#modal-root');

export const AvatarUpdateModal = () => {
  const dispatch = useDispatch();

  const handleClose = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleUserInfo());
    }
  };

  return createPortal(
    <Backdrop onClick={handleClose}>
      <Content>
        <AvatarUpdateForm />
      </Content>
    </Backdrop>,
    modalRoot
  );
};
