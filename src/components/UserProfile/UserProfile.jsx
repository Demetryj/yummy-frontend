import { Box } from '../Box';
import { useSelector, useDispatch } from 'react-redux';
import { openLogo, closeLogo, closeInfo } from '../../redux/modal';
import cross from '../../images/logo/cross-header.svg';
import { FiUser } from 'react-icons/fi';
import { Input, P } from './UserProfile.styled';
import { Button } from 'components/Button';

const user = 'User';

export const UserProfile = () => {
  const dispatch = useDispatch();
  return (
    <Box borderRadius={24} box-shadow="0px 4px 48px rgba(0, 0, 0, 0.1)">
      <Box
        width={{ xs: 20 }}
        height={{ xs: 20 }}
        display="flex"
        ml="auto"
        onClick={() => {
          dispatch(closeInfo());
          dispatch(closeLogo());
        }}
      >
        {<img src={cross} alt="cross" />}
      </Box>
      <Box
        display={{ xs: 'flex' }}
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          width={{ xs: 88 }}
          height={{ xs: 88 }}
          borderRadius="50%"
          overflow="hidden"
          bg="#D9D9D9"
          border="1px solid red"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FiUser size={40} cursor="pointer" color="gray" />
          {/* <Avatar alt="Avatar" src="" /> */}
        </Box>
        <Box
          width={{ xs: 24 }}
          height={{ xs: 24 }}
          bg="greenColor"
          borderRadius="50%"
          position="absolute"
          top={65}
          left={165}
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="whiteColor"
        >
          <P>+</P>
        </Box>
      </Box>
      <Box>
        <form
          onSubmit={() => {
            dispatch(closeInfo());
            dispatch(closeLogo());
          }}
        >
          <Input placeholder={user} />
          <Button>Save changes</Button>
        </form>
      </Box>

      {/* <Box>
        <button
          onClick={() => {
            dispatch(closeInfo());
            dispatch(closeLogo());
          }}
        >
          Save changes
        </button>
      </Box> */}
    </Box>
  );
};
