import { Box } from '../Box';
import { Cross, GreenButton, CancelButton, P } from './LogoutContent.styled';
import { useDispatch } from 'react-redux';
import { toggleLogout } from '../../redux/modal';

export const Logout = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleLogout());

  return (
    <Box position="relative">
      <Cross onClick={handleClose} />
      <P>Are you sure you want to log out?</P>
      <Box display="flex">
        <GreenButton onClick={handleClose}>Log out</GreenButton>
        <Box width={{ xs: 8, lg: 16 }}></Box>
        <CancelButton onClick={handleClose}>Cancel</CancelButton>
      </Box>
    </Box>
  );
};
