import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenLogo: false,
  isOpenInfo: false,
  isOpenLogout: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLogo: state => {
      state.isOpenLogo = true;
    },
    closeLogo: state => {
      state.isOpenLogo = false;
    },
    openInfo: state => {
      state.isOpenInfo = true;
    },
    closeInfo: state => {
      state.isOpenInfo = false;
    },
    openLogout: state => {
      state.isOpenLogout = true;
    },
    closeLogout: state => {
      state.isOpenLogout = false;
    },
  },
});

export const {
  openLogo,
  closeLogo,
  openInfo,
  closeInfo,
  openLogout,
  closeLogout,
} = modalSlice.actions;

export default modalSlice.reducer;
