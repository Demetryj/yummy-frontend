import { useSelector, useDispatch } from 'react-redux';
import { toggleUserLogo } from '../../redux/modal';
import { Box } from '../Box';
import { ImageAvatar } from '../ImageAvatar';
import { UserLogoModal } from '../UserLogoModal';
import { UserInfoModal } from '../UserInfoModal';
import { LogoutModal } from '../LogoutModal';

export const UserLogo = () => {
  const isUserLogoOpen = useSelector(state => state.modal.isUserLogoOpen);
  const isUserInfoOpen = useSelector(state => state.modal.isUserInfoOpen);
  const isLogoutOpen = useSelector(state => state.modal.isLogoutOpen);
  const dispatch = useDispatch();

  return (
    <Box as="div" display="flex">
      <Box
        onClick={() => {
          dispatch(toggleUserLogo());
        }}
      >
        <ImageAvatar />
      </Box>
      <p>User</p>
      {isUserLogoOpen && <UserLogoModal />}
      {isUserInfoOpen && <UserInfoModal />}
      {isLogoutOpen && <LogoutModal />}
    </Box>
  );
};
