import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './UserLogoModal.styled';
import { UserLogoContent } from '../UserLogoContent';
import { toggleUserLogo } from 'redux/modal';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoModal = ({ mode }) => {
  const dispatch = useDispatch();

  const handleClose = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleUserLogo());
    }
  };

  return createPortal(
    <Backdrop onClick={handleClose}>
      <Content mode={mode}>
        <UserLogoContent mode={mode} />
      </Content>
    </Backdrop>,
    modalRoot
  );
};
