import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const userSlice = createSlice({
  name: 'users',
  initialState: { value: {} },
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload;
    },
    removeUser: (state, action) => {
      state.value = {};
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
