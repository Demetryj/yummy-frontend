import * as React from 'react';
// import { useSelector } from 'react-redux';
// import Avatar from 'react-avatar';
import { Box } from '../Box';
import {
  Cross,
  // UserIcon
} from './UserProfileContent.styled';
import { useDispatch } from 'react-redux';
import {
  toggleUserInfo,
  // toggleAvatarUpdate
} from '../../redux/modal';
// import { useAuth } from 'hooks/useAuth';
import { UserProfileForm } from 'components/UserProfileForm';

export const UserProfileContent = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleUserInfo());
  // const fileData = useSelector(state => state);

  // const { user } = useAuth();

  // const path = user.avatarURL;

  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleUserInfo());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return (
    <Box
      borderRadius={24}
      box-shadow="0px 4px 48px rgba(0, 0, 0, 0.1)"
      position={{ sx: 'relative' }}
    >
      <Cross
        onClick={() => {
          handleClose();
        }}
      />
      {/* <Box
        display={{ xs: 'flex' }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        mb={{ xs: 54, lg: 52 }}
      > */}
      <UserProfileForm />

      {/* </Box> */}
    </Box>
  );
};
