import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Backdrop, Content } from './LogoutModal.styled';
import { LogoutContent } from '../LogoutContent';
import { toggleLogout } from '../../redux/modal';

const modalRoot = document.querySelector('#modal-root');

export const LogoutModal = ({mode}) => {
  const dispatch = useDispatch();

  const handleClose = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleLogout());
    }
  };

  return createPortal(
    <Backdrop onClick={handleClose}>
      <Content mode={mode}>
        <LogoutContent mode={mode} />
      </Content>
    </Backdrop>,
    modalRoot
  );
};
