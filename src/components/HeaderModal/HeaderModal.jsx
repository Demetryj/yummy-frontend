import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
import { ModalBackdrop, ModalContent } from './HeaderModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const HeaderModal = ({ onClose, children }) => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
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
      <ModalContent mode={theme}>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
