import * as React from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleUserLogo,
  toggleUserInfo,
  toggleLogout,
} from '../../redux/modal';
import { Box } from '../Box';
import {
  EditButton,
  LogoutButton,
  ButtonContainer,
  Arrow,
} from './UserLogoContent.styled';
import { HiOutlinePencil } from 'react-icons/hi';

export const UserLogoContent = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleUserLogo());

  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleUserLogo());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" jusifyContent="space-between">
      <Box
        display="flex"
        jusifyContent="space-between"
        mb={{ xs: 28 }}
        width={{ xs: 1 }}
      >
        <EditButton
          onClick={() => {
            dispatch(toggleUserInfo());
            handleClose();
          }}
        >
          Edit Profile
        </EditButton>
        <HiOutlinePencil />
      </Box>
      <ButtonContainer>
        <LogoutButton
          onClick={() => {
            dispatch(toggleLogout());
            handleClose();
          }}
        >
          Log out
          <Arrow size={18} />
        </LogoutButton>
      </ButtonContainer>
    </Box>
  );
};
