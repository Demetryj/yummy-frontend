import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackdrop, ModalContent } from './HeaderModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const HeaderModal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log(e.code);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      console.log('Cleanup function before next call of useEffect');
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
