import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userType: null,
  userData: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userType = action.payload.userType;
    },
    logout: (state) => {
      state.userType = null;
    },
    signup: (state, action) => {
      state.userType = action.payload.userType;
    },
    setUserData: (state, action) => {
        console.log(action.payload.userData);
        state.userData = action.payload.userData;
    }
  },
});

export const { login, logout, signup, setUserData } = authSlice.actions;

export default authSlice.reducer;
