import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: 'toggleMenu',
  initialState: {
    show: false
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.show = typeof action.payload === 'boolean'
        ? action.payload
        : !state.show;
    }
  }
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
