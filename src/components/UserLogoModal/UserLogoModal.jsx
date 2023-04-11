// import React from 'react';
// // import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   isOpenLogo,
//   closeLogo,
//   openInfo,
//   closeInfo,
//   closeLogout,
// } from '../../redux/modal';
// import { Box } from '../Box';
// import { Container } from './UserLogoModal.styled';

// const customStyles = {
//   content: {
//     // top: '50%',
//     // left: '50%',
//     // right: 'auto',
//     // bottom: 'auto',
//     // marginRight: '-50%',
//     // transform: 'translate(-50%, -50%)',

//     position: 'absolute',
//     width: '161px',
//     height: '130px',
//     left: '154px',
//     top: '72px',
//   },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#modal-root');

// export const UserLogoModal = () => {
//   const isOpenLogo = useSelector(state => state.modal.isOpenLogo);
//   const dispatch = useDispatch();

//   // let subtitle;
//   // const [modalIsOpen, setIsOpen] = React.useState(false);

//   // function openModal() {
//   //   setIsOpen(true);
//   // }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     // subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     // setIsOpen(false);
//     dispatch(closeLogo(false));
//   }

//   return (
//     <div
//     // position="absolute"
//     // width={{ xs: 161 }}
//     // height={{ xs: 130 }}
//     // left={{ xs: 154 }}
//     // top={{ xs: 72 }}
//     >
//       {/* <button onClick={openModal}>Open Modal</button> */}
//       <Modal
//         isOpen={isOpenLogo}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
//         <h4>User Logo Modal</h4>
//         {/* <button onClick={closeModal}>close</button> */}
//         {/* <div>I am a modal</div> */}
//         {/* <button onClick={closeModal}>close</button> */}
// <form onSubmit={closeModal}>
//   {/* <form> */}
//   {/* <input /> */}
//   <Box>
//     <button>Edit profile</button>
//   </Box>
//   <Box>
//     <button>Logout</button>
//   </Box>

//   {/* <button>inside</button>
//   <button>the modal</button> */}
// </form>
//       </Modal>
//     </div>
//   );
// };

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
import { Backdrop, Content } from './UserLogoModal.styled';
import { HiOutlinePencil } from 'react-icons/hi';

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
            <button
              onClick={() => {
                dispatch(openInfo());
              }}
            >
              Edit profile
            </button>
            <HiOutlinePencil />
          </Box>
          <Box display="flex">
            <button
              onClick={() => {
                dispatch(openLogout());
              }}
            >
              Logout
            </button>
          </Box>

          {/* <button>inside</button>
          <button>the modal</button> */}
        </form>
      </Content>
    </Backdrop>,
    modalRoot
  );
};
