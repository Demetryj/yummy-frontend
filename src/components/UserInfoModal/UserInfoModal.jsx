import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './UserInfoModal.styled';
import { UserProfileContent } from '../UserProfileContent';
import { toggleUserInfo } from '../../redux/modal';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ mode }) => {
  const dispatch = useDispatch();

  const handleClose = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleUserInfo());
    }
  };

  return createPortal(
    <Backdrop onClick={handleClose}>
      <Content mode={mode}>
        <UserProfileContent mode={mode} />
      </Content>
    </Backdrop>,
    modalRoot
  );
};
