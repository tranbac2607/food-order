import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import httpClient from '@/api';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  available: boolean;
  images: FormData;
}

interface FoodState {
  foods: FoodItem[];
  error: string | null;
}

const initialState: FoodState = {
  foods: [],
  error: null,
};

interface AddFoodResponse {
  success: boolean;
  message: string;
}

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

export const addFood = createAsyncThunk<
  AddFoodResponse,
  FormData,
  { rejectValue: string }
>('foods/addFood', async (formData, { rejectWithValue }) => {
  try {
    const response = await httpClient.post('/api/foods', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return { success: true, message: 'Tạo món ăn thành công' };
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || 'Lỗi khi tạo món ăn'
    );
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
      })
      .addCase(addFood.rejected, () => {})
      .addCase(addFood.fulfilled, () => {});
  },
});

export default foodSlice.reducer;
