import React from 'react';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

interface FoodListProps {
  foodItems: FoodItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

const FoodList: React.FC<FoodListProps> = ({
  foodItems,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8">
      {foodItems.map((item, index) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-fadeIn flex flex-row md:flex-col items-center md:items-start"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Ảnh (Điện thoại: bên trái 50%, Tablet & Desktop: trên) */}
          <div className="w-1/2 md:w-full flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-md"
            />
          </div>

          {/* Nội dung (Điện thoại: bên phải 50%, Tablet & Desktop: dưới) */}
          <div className="w-1/2 md:w-full ml-4 md:ml-0 mt-0 md:mt-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg text-black font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                {item.description}
              </p>
              <p className="text-green-600 font-bold mt-2 text-base sm:text-lg">
                💰 {item.price.toLocaleString()} VNĐ
              </p>
            </div>

            {/* Nút đặt món */}
            <div className="mt-3 flex items-center gap-2">
              {item.quantity > 0 && (
                <button
                  className="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => onDecrease(item.id)}
                >
                  ➖
                </button>
              )}

              <span className="text-md text-black font-semibold">
                {item.quantity}
              </span>

              <button
                className="bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600 transition"
                onClick={() => onIncrease(item.id)}
              >
                ➕
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
