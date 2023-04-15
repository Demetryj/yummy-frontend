import * as React from 'react';
import { Box } from '../Box';
import { P, Cross, UserIcon } from './UserProfileContent.styled';
import { useDispatch } from 'react-redux';
import { toggleUserInfo } from '../../redux/modal';
import { UserProfileForm } from 'components/UserProfileForm';

export const UserProfileContent = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleUserInfo());

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
          <UserIcon />
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
          <P>+</P>
        </Box>
      </Box>
      <UserProfileForm />
    </Box>
  );
};
