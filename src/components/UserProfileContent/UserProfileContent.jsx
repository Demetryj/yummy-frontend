import * as React from 'react';
import { Box } from '../Box';
import { Cross } from './UserProfileContent.styled';
import { useDispatch } from 'react-redux';
import { toggleUserInfo } from '../../redux/modal';
import { UserProfileForm } from 'components/UserProfileForm';

export const UserProfileContent = ({ mode }) => {
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
        mode={mode}
      />
      <UserProfileForm mode={mode} />
    </Box>
  );
};
