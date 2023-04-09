import React, { useState } from 'react';
import ModalContext from '../../utils';
import { Box } from '../Box';
import { HiOutlinePencil } from 'react-icons/hi';
import { P } from './ProfilePortal.styled';
import { UserProfile } from '../UserProfile';
import { ReactModal } from '../ReactModal';
import { ProfileModal } from '../ProfileModal';

export const ProfilePortal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState('Initial Modal State');
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(true);
  };

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
            handleModal();
            setUserProfile({
              userProfile: <UserProfile />,
            });
          }}
          // onClick={() => {
          //   handleProfile();
          //   openModal();
          // }}
        >
          <P>Edit profile</P>
          <HiOutlinePencil cursor="pointer" />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <button type="button">Log out</button>
        </Box>
        {/* <Box>
          {<ReactModal profileIsOpen={modalIsOpen} closeModal={closeModal} />}
        </Box> */}
        <Box>{open && <ProfileModal />}</Box>
      </ModalContext.Provider>
    </>
  );
};
