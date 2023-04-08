import { Box } from '../Box';
import { HiOutlinePencil } from 'react-icons/hi';
import { P } from './ProfilePortal.styled';

export const ProfilePortal = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb={{ xs: 28 }}
      >
        <P>Edit profile</P>
        <HiOutlinePencil cursor="pointer" />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <button type="button">Log out</button>
      </Box>
    </>
  );
};
