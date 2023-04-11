import React, { useState } from 'react';
import ModalContext from '../../utils';
import { Box } from '../Box';
import { HiOutlinePencil } from 'react-icons/hi';
import { P } from './ProfilePortal.styled';
import { UserProfile } from '../UserProfile';
// import { ReactModal } from '../ReactModal';
import { useSelector, useDispatch } from 'react-redux';
import { openInfo, closeLogo, openLogout } from '../../redux/modal';

export const ProfilePortal = () => {
  // const [modalIsOpen, setIsOpen] = useState(false);
  const [userInfoModal, setUserInfoModal] = React.useState(
    'Initial Modal State'
  );
  const dispatch = useDispatch();

  return (
    <>
      <ModalContext.Provider value={userInfoModal}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pb={{ xs: 28 }}
          onClick={() => {
            dispatch(closeLogo());
            dispatch(openInfo());
            setUserInfoModal({
              userInfoModal: <UserProfile />,
            });
          }}
        >
          <P>Edit profile</P>
          <HiOutlinePencil cursor="pointer" />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <button
            type="button"
            onClick={() => {
              dispatch(closeLogo());
              dispatch(openLogout());
            }}
          >
            Log out
          </button>
        </Box>
      </ModalContext.Provider>
    </>
  );
};
