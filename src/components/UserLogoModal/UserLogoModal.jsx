import React from 'react';
import ReactDOM from 'react-dom';
import './UserLogoModal.css';

export const UserLogoModal = ({
  userLogoModalVisible,
  toggleUserLogoModal,
  toggleUserInfoModal,
}) =>
  userLogoModalVisible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <h3
              onClick={() => {
                toggleUserLogoModal();
                toggleUserInfoModal();
              }}
              style={{ cursor: 'pointer' }}
            >
              Edit profile
            </h3>
            {/* <p>
              Et sit saepe velit tenetur et consequatur in. Nihil doloribus
              nulla nulla rem. Soluta illo et asperiores numquam earum nesciunt.
              Vero odio voluptatem sunt sunt laboriosam.
            </p>
            <button
              type="button"
              onClick={() => {
                toggleUserLogoModal();
                toggleUserInfoModal();
              }}
            >
              Edit profile
            </button> */}
            <button type="button">Log out</button>
          </div>
          <div className="modal-overlay"></div>
        </div>,
        document.body
      )
    : null;

// export default Modal;
