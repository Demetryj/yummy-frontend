import { createPortal } from 'react-dom';
// import { useSelector, useDispatch } from 'react-redux';
import // toggleUserLogo,
// toggleUserInfo,
// toggleLogout,
'../../redux/modal';
// import { Box } from '../Box';
import {
  Backdrop,
  Content,
  // EditButton,
  // LogoutButton,
  // ButtonContainer,
  // Arrow,
} from './UserLogoModal.styled';
// import { HiOutlinePencil } from 'react-icons/hi';
import { UserLogoContent } from '../UserLogoContent';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoModal = () => {
  return createPortal(
    <Backdrop>
      <Content>
        <UserLogoContent />
        {/* <form onSubmit={closeModal}>
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
        </form> */}
      </Content>
    </Backdrop>,
    modalRoot
  );
};
