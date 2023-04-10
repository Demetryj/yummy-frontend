import * as React from 'react';
import { createPortal } from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';
import { closeLogo, openInfo, closeInfo } from '../../redux/modal';

import { UserProfile } from '../UserProfile';

import ModalContext from '../../utils';

import { ModalBackdrop, ModalContent } from './UserInfoModalII.styled';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModalII = () => {
  const { userInfoModal } = React.useContext(ModalContext);

  const isOpenLogo = useSelector(state => state.modal.isOpenLogo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeInfo());
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
      dispatch(closeInfo());
      dispatch(closeLogo());
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      {/* <ModalContent>{userInfoModal}</ModalContent> */}
      <ModalContent>
        <UserProfile />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
