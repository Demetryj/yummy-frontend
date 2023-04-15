import { useSelector, useDispatch } from 'react-redux';
import { toggleUserLogo } from '../../redux/modal';
import { Box } from '../Box';
import { ImageAvatar } from '../ImageAvatar';
import { UserLogoModal } from '../UserLogoModal';
import { UserInfoModal } from '../UserInfoModal';
import { LogoutModal } from '../LogoutModal';
import { useAuth } from 'hooks/useAuth';

export const UserLogo = () => {
  const isUserLogoOpen = useSelector(state => state.modal.isUserLogoOpen);
  const isUserInfoOpen = useSelector(state => state.modal.isUserInfoOpen);
  const isLogoutOpen = useSelector(state => state.modal.isLogoutOpen);
  const dispatch = useDispatch();

  const { user } = useAuth();

  // console.log(user.name);

  return (
    <Box as="div" display="flex" justifyContent="center" alignItems="center">
      <Box
        onClick={() => {
          dispatch(toggleUserLogo());
        }}
      >
        <ImageAvatar />
      </Box>
      <p>{user.name}</p>
      {isUserLogoOpen && <UserLogoModal />}
      {isUserInfoOpen && <UserInfoModal />}
      {isLogoutOpen && <LogoutModal />}
    </Box>
  );
};
