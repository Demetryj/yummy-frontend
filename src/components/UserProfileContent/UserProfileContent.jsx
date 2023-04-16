import * as React from 'react';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { Box } from '../Box';
import { P, Cross, UserIcon } from './UserProfileContent.styled';
import { useDispatch } from 'react-redux';
import { toggleUserInfo, toggleAvatarUpdate } from '../../redux/modal';
import { useAuth } from 'hooks/useAuth';
import { UserProfileForm } from 'components/UserProfileForm';

export const UserProfileContent = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleUserInfo());
  const fileData = useSelector(state => state);

  console.log('fileData', fileData);

  const path = '../../images/avatar/64078473abf4d1c4a914e088_avatar.jpg';

  const { user } = useAuth();

  // console.log('user', user);

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
      <Box
        display={{ xs: 'flex' }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        mb={{ xs: 54, lg: 52 }}
      >
        <Box
          width={{ xs: 88, lg: 103 }}
          height={{ xs: 88, lg: 103 }}
          borderRadius="50%"
          overflow="hidden"
          bg="#D9D9D9"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {path ? (
            <Avatar size="100%" round={true} name={user.name} src={path} />
          ) : (
            <UserIcon />
          )}
        </Box>
        <Box
          width={{ xs: 24 }}
          height={{ xs: 24 }}
          bg="greenColor"
          borderRadius="50%"
          position="absolute"
          top={{ xs: 65, lg: 78 }}
          left={{ xs: 150, md: 229, lg: 218 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="whiteColor"
        >
          <P
            onClick={() => {
              dispatch(toggleAvatarUpdate());
              handleClose();
            }}
          >
            +
          </P>
        </Box>
      </Box>
      <UserProfileForm />
    </Box>
  );
};
