import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeLogo,
  openInfo,
  openLogout,
  closeInfo,
  closeLogout,
} from '../../redux/modal';
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
// import { AiOutlineArrowRight } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoModal = () => {
  const isOpenLogo = useSelector(state => state.modal.isOpenLogo);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(closeLogo());
  }

  return createPortal(
    <Backdrop>
      <Content>
        <form onSubmit={closeModal}>
          {/* <form> */}
          {/* <input /> */}
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
              // display="flex"
              onClick={() => {
                dispatch(openLogout());
              }}
            >
              Log out
            </LogoutButton>
            <Arrow size={18} />
          </ButtonContainer>

          {/* <button>inside</button>
          <button>the modal</button> */}
        </form>
      </Content>
    </Backdrop>,
    modalRoot
  );
};
