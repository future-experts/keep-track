import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  name: '',
  token: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    login: (_, action) => action.payload
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;