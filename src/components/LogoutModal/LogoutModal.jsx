import { createPortal } from 'react-dom';

import { Backdrop, Content } from './LogoutModal.styled';
import { Logout } from '../Logout';

const modalRoot = document.querySelector('#modal-root');

export const LogoutModal = () => {
  return createPortal(
    <Backdrop>
      <Content>
        <Logout />
      </Content>
    </Backdrop>,
    modalRoot
  );
};
