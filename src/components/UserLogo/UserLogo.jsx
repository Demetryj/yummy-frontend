import { useSelector } from 'react-redux';
import { Box } from '../Box';
import { ImageAvatar } from '../ImageAvatar';
import { UserLogoModal } from '../UserLogoModal';
import { UserInfoModal } from '../UserInfoModal';
import { LogoutModal } from '../LogoutModal';
// import { AvatarUpdateModal } from 'components/AvatarUpdateModal';
import { useAuth } from 'hooks/useAuth';
import { UserName } from './UserLogo.styled';

export const UserLogo = ({ mode, isRecipePage, shouldDarkColorUserName }) => {
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
      <UserName
        mode={mode}
        style={{
          color: (isRecipePage || shouldDarkColorUserName) && '#22252A',
        }}
      >
        {user.name}
      </UserName>
      {isUserLogoOpen && <UserLogoModal mode={mode} />}
      {isUserInfoOpen && <UserInfoModal mode={mode} />}
      {isLogoutOpen && <LogoutModal mode={mode} />}
      {/* {isAvatarUpdateOpen && <AvatarUpdateModal />} */}
    </Box>
  );
};
