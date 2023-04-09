import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalContext from '../../utils';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal-root');

export const ReactModal = ({ portalIsOpen, profileIsOpen, closeModal }) => {
  const { profilePortal, userProfile } = React.useContext(ModalContext);
  //   let subtitle;

  //   console.log('React Modal modalIsOpen', modalIsOpen);

  //   const [modalIsOpen, setIsOpen] = React.useState(false);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  return (
    <>
      {/* <button onClick={openModal}>Open React Modal</button> */}
      <Modal
        isOpen={portalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}

        {profilePortal}
      </Modal>
      <Modal
        isOpen={profileIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}

        {userProfile}
      </Modal>
    </>
  );
};
