import { createPortal } from 'react-dom';
import { Backdrop, Content } from './UserLogoModal.styled';
import { UserLogoContent } from '../UserLogoContent';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoModal = () => {
  return createPortal(
    <Backdrop>
      <Content>
        <UserLogoContent />
      </Content>
    </Backdrop>,
    modalRoot
  );
};
