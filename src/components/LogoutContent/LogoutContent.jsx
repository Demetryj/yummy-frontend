import { Box } from '../Box';
import { GreenButton, CancelButton, P } from './LogoutContent.styled';
import { useDispatch } from 'react-redux';
import { toggleLogout } from '../../redux/modal';
import { logout } from '../../redux/auth/operations';
import cross from '../../images/logo/cross-header.svg';

export const Logout = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleLogout());
  const handleLogout = () => dispatch(logout());

  return (
    <Box>
      <Box
        display="flex"
        ml="auto"
        mr={0}
        mb="6px"
        width={{ xs: 13 }}
        height={{ xs: 13 }}
        onClick={handleClose}
      >
        {<img src={cross} alt="cross" />}
      </Box>
      <P>Are you sure you want to log out?</P>
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
        <CancelButton onClick={handleClose}>Cancel</CancelButton>
      </Box>
    </Box>
  );
};
