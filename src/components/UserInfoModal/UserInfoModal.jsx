import { createPortal } from 'react-dom';
import { Backdrop, Content } from './UserInfoModal.styled';
import { UserProfileContent } from '../UserProfileContent';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = () => {
  return createPortal(
    <Backdrop>
      <Content>
        <UserProfileContent />
      </Content>
    </Backdrop>,
    modalRoot
  );
};
