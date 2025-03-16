import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import httpClient from '@/api';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface FoodState {
  foods: FoodItem[];
  error: string | null;
}

const initialState: FoodState = {
  foods: [],
  error: null,
};

export const getFoods = createAsyncThunk<
  FoodItem[],
  void,
  { rejectValue: string }
>('foods/getFoods', async (_, { rejectWithValue }) => {
  try {
    const response = await httpClient.get('/api/foods');
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Lỗi tải dữ liệu');
  }
});

export const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getFoods.fulfilled,
        (state, action: PayloadAction<FoodItem[]>) => {
          state.foods = action.payload;
        }
      )
      .addCase(getFoods.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default foodSlice.reducer;
