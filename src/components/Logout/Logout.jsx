import { Box } from '../Box';
import { GreenButton, CancelButton, P } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { closeLogo, closeLogout } from '../../redux/modal';
import cross from '../../images/logo/cross-header.svg';

export const Logout = () => {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(closeLogo());
    dispatch(closeLogout());
  }

  return (
    <Box>
      <Box
        display="flex"
        ml="auto"
        mr={0}
        mb="6px"
        width={{ xs: 13 }}
        height={{ xs: 13 }}
        onClick={closeModal}
      >
        {<img src={cross} alt="cross" />}
      </Box>
      <P>Are you sure you want to log out?</P>
      <Box display="flex">
        <GreenButton onClick={closeModal}>Log out</GreenButton>
        <Box width={{ xs: 8, lg: 16 }}></Box>
        <CancelButton onClick={closeModal}>Cancel</CancelButton>
      </Box>
    </Box>
  );
};
