import * as React from 'react';
import { createPortal } from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';
import { closeLogo, openInfo } from '../../redux/modal';

import ModalContext from '../../utils';

import { ModalBackdrop, ModalContent } from './UserLogoModalII.styled';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoModalII = () => {
  const { userLogoModal } = React.useContext(ModalContext);

  const isOpenLogo = useSelector(state => state.modal.isOpenLogo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
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
      dispatch(closeLogo());
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{userLogoModal}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
