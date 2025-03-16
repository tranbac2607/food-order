import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="relative w-10 h-10">
        <span className="absolute inset-0 bg-gray-300 rounded-full animate-ping opacity-50"></span>
      </div>
    </div>
  );
};

export default Loading;
