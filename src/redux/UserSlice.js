import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { register, login, logout, currentUser } from './Operation';
import {
  handleAuthFulfilled,
  handleLogOutFulfilled,
  handleCurrentPending,
  handleCurrentFulfilled,
  handleCurrentRejected,
} from '../components/Services/AuthFunctionSlice';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const UserSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(login.fulfilled, handleAuthFulfilled)
      .addCase(logout.fulfilled, handleLogOutFulfilled)
      .addCase(currentUser.pending, handleCurrentPending)
      .addCase(currentUser.fulfilled, handleCurrentFulfilled)
      .addCase(currentUser.rejected, handleCurrentRejected);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
export const UserReduser = persistReducer(persistConfig, UserSlise.reducer);
