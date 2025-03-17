import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/store/store';

// Custom hook để sử dụng dispatch mà không cần chỉ định type mỗi lần
export const useAppDispatch = () => useDispatch<AppDispatch>();
