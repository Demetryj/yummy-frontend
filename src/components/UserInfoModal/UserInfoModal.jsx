import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeInfo } from '../../redux/modal';

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

function UserInfoModal() {
  let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  const isOpenInfo = useSelector(state => state.modal.isOpenInfo);
  const dispatch = useDispatch();

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    // setIsOpen(false);
    dispatch(closeInfo());
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open React Modal</button> */}
      <Modal
        isOpen={isOpenInfo}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>Save changes</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default UserInfoModal;
