import { Box } from '../Box';
import { Cross, GreenButton, CancelButton, P } from './LogoutContent.styled';
import { useDispatch } from 'react-redux';
import { toggleLogout } from '../../redux/modal';
import cross from '../../images/logo/cross-header.svg';

export const Logout = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleLogout());

  return (
    <Box position="relative">
      {/* <Box
        // display="flex"
        // ml="auto"
        // mr={0}
        // mb="6px"
        position="relative"
        width={{ xs: 20 }}
        height={{ xs: 20 }}
        onClick={handleClose}
      >
        <Cross />
      </Box> */}
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
