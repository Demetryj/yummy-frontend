import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeLogo, openInfo } from '../../redux/modal';
import { Box } from '../Box';
import { ModalBackdrop, ModalContent } from './UserLogoModal.styled';

// const customStyles = {
//   content: {
//     top: '0%',
//     left: '0%',
//     width: '161px',
//     height: '130px',
//     background: 'whiteColor',
//     border: '1px solid #greenColor',
//     borderRadius: '8px',
//     // right: 'auto',
//     // bottom: 'auto',
//     // marginRight: '-50%',
//     // transform: 'translate(-50%, -50%)',
//   },
// };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal-root');

function UserLogoModal() {
  //   let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  const isOpenLogo = useSelector(state => state.modal.isOpenLogo);
  const dispatch = useDispatch();

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    dispatch(closeLogo());
    dispatch(openInfo());
  }

  return (
    <ModalBackdrop>
      {/* <button onClick={openModal}>Open React Modal</button> */}
      <ModalContent>
        <Modal
          isOpen={isOpenLogo}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          // contentLabel="Example Modal"
        >
          {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
          <button onClick={closeModal}>Edit profile</button>
          {/* <div>I am a modal</div> */}
          {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
        </Modal>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default UserLogoModal;
