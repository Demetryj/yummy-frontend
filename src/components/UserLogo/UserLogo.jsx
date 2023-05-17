import { useSelector } from 'react-redux';
import { Box } from '../Box';
import { ImageAvatar } from '../ImageAvatar';
import { UserLogoModal } from '../UserLogoModal';
import { UserInfoModal } from '../UserInfoModal';
import { LogoutModal } from '../LogoutModal';
// import { AvatarUpdateModal } from 'components/AvatarUpdateModal';
import { useAuth } from 'hooks/useAuth';
import { UserName } from './UserLogo.styled';

export const UserLogo = ({ mode }) => {
  const isUserLogoOpen = useSelector(state => state.modal.isUserLogoOpen);
  const isUserInfoOpen = useSelector(state => state.modal.isUserInfoOpen);
  const isLogoutOpen = useSelector(state => state.modal.isLogoutOpen);
  // const isAvatarUpdateOpen = useSelector(
  //   state => state.modal.isAvatarUpdateOpen
  // );

  const { user } = useAuth();

  return (
    <Box as="div" display="flex" justifyContent="center" alignItems="center">
      <ImageAvatar user={user} />
      <UserName mode={mode}>{user.name}</UserName>
      {isUserLogoOpen && <UserLogoModal />}
      {isUserInfoOpen && <UserInfoModal />}
      {isLogoutOpen && <LogoutModal />}
      {/* {isAvatarUpdateOpen && <AvatarUpdateModal />} */}
    </Box>
  );
};
