import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { AppState } from './store';

export type AuthState = {
  renderHeaderInfo: number;
};

const initialState: AuthState = {
  renderHeaderInfo: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRenderHeaderInfo(state, action) {
      state.renderHeaderInfo = action.payload;
    },
  },
});

export const { setRenderHeaderInfo } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth;
