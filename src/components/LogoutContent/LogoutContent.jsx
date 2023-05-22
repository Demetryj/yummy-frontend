import * as React from 'react';
import { Box } from '../Box';
import {
  Cross,
  GreenButton,
  CancelButton,
  TextModal,
} from './LogoutContent.styled';
import { useDispatch } from 'react-redux';
import { toggleLogout } from '../../redux/modal';
import { logout } from '../../redux/auth/operations';

export const LogoutContent = ({ mode }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleLogout());
  const handleLogout = () => {
    dispatch(logout());
  };

  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleLogout());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return (
    <Box position="relative">
      <Cross onClick={handleClose} mode={mode} />
      <TextModal mode={mode}>Are you sure you want to log out?</TextModal>
      <Box display="flex">
        <GreenButton
          onClick={() => {
            handleClose();
            handleLogout();
          }}
        >
          Log out
        </GreenButton>
        <Box width={{ xs: 8, lg: 16 }}></Box>
        <CancelButton onClick={handleClose} mode={mode}>
          Cancel
        </CancelButton>
      </Box>
    </Box>
  );
};
