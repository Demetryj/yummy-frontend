import React from 'react';
import ReactDOM from 'react-dom';
import './UserInfoModal.css';

export const UserInfoModal = ({ userInfoModalVisible, toggleUserInfoModal }) =>
  userInfoModalVisible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <h3>User profile</h3>
            <p>
              Et sit saepe velit tenetur et consequatur in. Nihil doloribus
              nulla nulla rem. Soluta illo et asperiores numquam earum nesciunt.
              Vero odio voluptatem sunt sunt laboriosam.
            </p>
            <button
              type="button"
              onClick={() => {
                toggleUserInfoModal();
              }}
            >
              Save changes
            </button>
          </div>
          <div className="modal-overlay"></div>
        </div>,
        document.body
      )
    : null;

// export default Modal;
