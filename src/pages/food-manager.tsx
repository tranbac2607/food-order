import React from 'react';
import { toast } from 'react-toastify';

import FoodManager from '@/components/food-manager';
import { addFood } from '@/store/slice/food-slice';
import { useAppDispatch } from '@/store/hooks';
import type FoodForm from '@/components/food-manager';

const FoodManagerPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (formData: FormData) => {
    const result = await dispatch(addFood(formData));

    if (addFood.fulfilled.match(result)) {
      toast.success(result.payload.message);
    } else {
      toast.error(result.payload || 'Đã có lỗi xảy ra!');
    }
  };
  return <FoodManager onSubmit={handleSubmit} />;
};

export default FoodManagerPage;
