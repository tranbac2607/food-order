import { createSlice } from '@reduxjs/toolkit';

interface CommonState {
  loadingCount: number; // Đếm số lượng API đang chạy
}

const initialState: CommonState = {
  loadingCount: 0,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showLoading: state => {
      state.loadingCount += 1;
    },
    hideLoading: state => {
      state.loadingCount = Math.max(0, state.loadingCount - 1);
    },
  },
});

export const { showLoading, hideLoading } = commonSlice.actions;
export default commonSlice.reducer;
