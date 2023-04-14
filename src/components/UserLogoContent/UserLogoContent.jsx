import { useSelector, useDispatch } from 'react-redux';
import {
  toggleUserLogo,
  toggleUserInfo,
  toggleLogout,
} from '../../redux/modal';
import { Box } from '../Box';
import {
  Backdrop,
  Content,
  EditButton,
  LogoutButton,
  ButtonContainer,
  Arrow,
} from './UserLogoContent.styled';
import { HiOutlinePencil } from 'react-icons/hi';

export const UserLogoContent = () => {
  const open = useSelector(state => state.modal.isUserLogoOpen);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(toggleUserLogo());

  return (
    // <form onSubmit={closeModal}>
    <>
      <Box
        display="flex"
        jusifyContent="space-between"
        mb={{ xs: 28 }}
        width={{ xs: 1 }}
      >
        <EditButton
          onClick={() => {
            dispatch(toggleUserInfo());
            handleClose();
          }}
        >
          Edit Profile
        </EditButton>
        <HiOutlinePencil />
      </Box>
      <ButtonContainer>
        <LogoutButton
          onClick={() => {
            dispatch(toggleLogout());
            handleClose();
          }}
        >
          Log out
        </LogoutButton>
        <Arrow size={18} />
      </ButtonContainer>
    </>

    // </form>
  );
};
