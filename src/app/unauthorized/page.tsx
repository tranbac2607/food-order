'use client';

import { useEffect } from 'react';

import EmptyState from '@/components/EmptyState';

const UnauthorizeState = () => {
  const error = new Error('Unauthorized Access'); // Tạo lỗi mặc định nếu cần

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      title="Uh No"
      subtitle="You don't have permission for this resource"
      showReset
      label="Go back home"
    />
  );
};

export default UnauthorizeState;
