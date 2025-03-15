import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { AppState } from './store';

export type CommonState = {
  isLoading: boolean;
  isInit: boolean;
  isNormalHeader: boolean;
};

const initialState: CommonState = {
  isLoading: false,
  isInit: false,
  isNormalHeader: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsInit(state, action) {
      state.isInit = action.payload;
    },
    setIsNormalHeader(state, action) {
      state.isNormalHeader = action.payload;
    },
  },
});

export const { setIsLoading, setIsInit, setIsNormalHeader } =
  commonSlice.actions;

export const selectCommonState = (state: AppState) => state.common;
