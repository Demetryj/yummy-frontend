import { createPortal } from 'react-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   isOpenLogo,
//   closeLogo,
//   openInfo,
//   closeInfo,
//   closeLogout,
// } from '../../redux/modal';
// import { Box } from '../Box';
import { Backdrop, Content } from './LogoutModal.styled';
// import { HiOutlinePencil } from 'react-icons/hi';
import { Logout } from '../Logout';

const modalRoot = document.querySelector('#modal-root');

export const LogoutModal = () => {
  // const isOpenLogo = useSelector(state => state.modal.isOpenLogo);
  // const dispatch = useDispatch();

  // function closeModal() {
  //   dispatch(closeLogo(false));
  // }

  return createPortal(
    <Backdrop>
      <Content>
        <Logout />
      </Content>
    </Backdrop>,
    modalRoot
  );
};
