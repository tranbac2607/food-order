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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8">
      {foodItems.map((item, index) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-fadeIn"
          style={{ animationDelay: `${index * 0.1}s` }} // Delay để hiệu ứng chạy lần lượt
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="text-lg text-black font-semibold mt-2">{item.name}</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {item.description}
          </p>
          <p className="text-green-600 font-bold mt-1 text-base sm:text-lg">
            💰 {item.price.toLocaleString()} VNĐ
          </p>

          <div className="mt-3 flex items-center gap-3">
            {item.quantity > 0 && (
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                onClick={() => onDecrease(item.id)}
              >
                ➖
              </button>
            )}

            <span className="text-lg text-black font-semibold">
              {item.quantity}
            </span>

            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              onClick={() => onIncrease(item.id)}
            >
              ➕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
