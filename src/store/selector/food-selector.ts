import { createSelector } from '@reduxjs/toolkit';

import type { AppState } from '../store';

const selectFoodState = (state: AppState) => state.foods;

export const selectFoods = createSelector(
  selectFoodState,
  state => state.foods
);

export const selectFoodError = createSelector(
  selectFoodState,
  state => state.error
);
