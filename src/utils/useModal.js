import { useState } from 'react';

const useModal = () => {
  const [userLogoModalVisible, setUserLogoModalVisible] = useState(false);
  const [userInfoModalVisible, setUserInfoModalVisible] = useState(false);

  function toggleUserLogoModal() {
    setUserLogoModalVisible(!userLogoModalVisible);
  }

  function toggleUserInfoModal() {
    setUserInfoModalVisible(!userInfoModalVisible);
  }

  return {
    toggleUserLogoModal,
    userLogoModalVisible,
    toggleUserInfoModal,
    userInfoModalVisible,
  };
};

export default useModal;
