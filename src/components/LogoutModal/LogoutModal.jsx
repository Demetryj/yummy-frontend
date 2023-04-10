import * as React from 'react';
import { createPortal } from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';
import { closeLogo, closeLogout } from '../../redux/modal';

// import { UserProfile } from '../UserProfile';

import { Logout } from '../Logout';

// import ModalContext from '../../utils';

import { ModalBackdrop, ModalContent } from './LogoutModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const LogoutModal = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeLogout());
        dispatch(closeLogo());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeLogout());
      dispatch(closeLogo());
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      {/* <ModalContent>{userInfoModal}</ModalContent> */}
      <ModalContent>
        <Logout />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
