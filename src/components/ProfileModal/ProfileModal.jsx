import * as React from 'react';
import { createPortal } from 'react-dom';

import ModalContext from '../../utils';

import { ModalBackdrop, ModalContent } from './ProfileModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ProfileModal = ({ onClose }) => {
  const { children } = React.useContext(ModalContext);

  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
