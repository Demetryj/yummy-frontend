import React, { useState } from 'react';
import ModalContext from '../../utils';
import { Box } from '../Box';
import { HiOutlinePencil } from 'react-icons/hi';
import { P } from './ProfilePortal.styled';
import { UserProfile } from '../UserProfile';
import { ReactModal } from '../ReactModal';

export const ProfilePortal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState('Initial Modal State');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalContext.Provider value={userProfile}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pb={{ xs: 28 }}
          onClick={() => {
            openModal();
            setUserProfile({
              children: <UserProfile />,
            });
          }}
        >
          <P>Edit profile</P>
          <HiOutlinePencil cursor="pointer" />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <button type="button">Log out</button>
        </Box>
        <Box>
          {<ReactModal modalIsOpen={modalIsOpen} closeModal={closeModal} />}
        </Box>
      </ModalContext.Provider>
    </>
  );
};
