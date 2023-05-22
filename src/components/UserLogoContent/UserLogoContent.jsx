import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';
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

export const UserLogoContent = ({ mode }) => {
  const theme = useSelector(selectTheme);
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
        flexGrow="2"
        mb={{ xs: 28 }}
        width={{ xs: 1 }}
      >
        <EditButton
          onClick={() => {
            dispatch(toggleUserInfo());
            handleClose();
          }}
          mode={theme}
        >
          Edit Profile
          <HiOutlinePencil />
        </EditButton>
      </Box>
      <ButtonContainer>
        <LogoutButton
          onClick={() => {
            dispatch(toggleLogout());
            handleClose();
          }}
          mode={mode}
        >
          Log out
          <Arrow />
        </LogoutButton>
      </ButtonContainer>
    </Box>
  );
};
