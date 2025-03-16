import type { AppState } from '../store';

// ✅ Selector lấy trạng thái loading
export const selectIsLoading = (state: AppState) =>
  state.common.loadingCount > 0;
