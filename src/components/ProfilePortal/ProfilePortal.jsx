import * as React from 'react';
import ModalContext from '../../utils';

export const ProfilePortal = () => {
  const [profilePortal, setProfilePortal] = React.useState(
    'Initial Modal State'
  );

  return <ModalContext.Provider value={profilePortal}></ModalContext.Provider>;
};
