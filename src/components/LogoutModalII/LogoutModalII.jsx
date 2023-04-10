import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Box } from '../Box';
import cross from '../../images/logo/cross-header.svg';
import { useSelector, useDispatch } from 'react-redux';
import { closeLogo, openInfo, closeInfo, closeLogout } from '../../redux/modal';
import { Logout } from '../Logout';
import { P, GreenButton, CancelButton } from './LogoutModalII.styles';

const customStyles = {
  content: {
    top: '5%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -1%)',
    width: '330px',
    height: '179px',
    background: '#FAFAFA',
    boxShadow: '0px 4px 48px rgba(0, 0, 0, 0.1)',
    borderRadius: '30px',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal-root');

export const LogoutModalII = () => {
  const isOpenLogout = useSelector(state => state.modal.isOpenLogout);
  const dispatch = useDispatch();
  //   let subtitle;
  //   const [modalIsOpen, setIsOpen] = React.useState(false);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    // setIsOpen(false);
    dispatch(closeLogout());
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={isOpenLogout}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
        <Box
          display="flex"
          ml="auto"
          mr={0}
          mb="6px"
          width={{ xs: 13 }}
          height={{ xs: 13 }}
          onClick={closeModal}
        >
          {<img src={cross} alt="cross" />}
        </Box>
        <P>Are you sure you want to log out?</P>

        <Box display="flex">
          <GreenButton onClick={closeModal}>Edit profile</GreenButton>
          <Box width={8}></Box>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
        </Box>
      </Modal>
    </div>
  );
};
