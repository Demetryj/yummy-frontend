import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeLogo, openInfo, openLogout } from '../../redux/modal';
import { Box } from '../Box';
import {
  Backdrop,
  Content,
  EditButton,
  LogoutButton,
  ButtonContainer,
  Arrow,
} from './UserLogoModal.styled';
import { HiOutlinePencil } from 'react-icons/hi';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoModal = () => {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(closeLogo());
  }

  return createPortal(
    <Backdrop>
      <Content>
        <form onSubmit={closeModal}>
          <Box
            display="flex"
            jusifyContent="space-between"
            mb={{ xs: 28 }}
            width={{ xs: 1 }}
          >
            <EditButton
              onClick={() => {
                dispatch(openInfo());
              }}
            >
              Edit profile
            </EditButton>
            <HiOutlinePencil />
          </Box>
          <ButtonContainer>
            <LogoutButton
              onClick={() => {
                dispatch(openLogout());
              }}
            >
              Log out
            </LogoutButton>
            <Arrow size={18} />
          </ButtonContainer>
        </form>
      </Content>
    </Backdrop>,
    modalRoot
  );
};
