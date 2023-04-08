import * as React from 'react';
import ModalContext from '../../utils';
import { Box } from '../Box';
import { HiOutlinePencil } from 'react-icons/hi';
import { P } from './ProfilePortal.styled';
import { UserProfile } from '../UserProfile';
import { ReactModal } from '../ReactModal';

export const ProfilePortal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [userProfile, setUserProfile] = React.useState('Initial Modal State');

  const openModal = async () => {
    setIsOpen(true);
    console.log('Open Modal Start');
    console.log(modalIsOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  console.log('modalIsOpen out', modalIsOpen);

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
