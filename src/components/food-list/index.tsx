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
          className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2 animate-fadeIn opacity-0"
          style={{
            animation: `fadeIn 0.5s ease-out forwards`,
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-lg text-gray-900 font-semibold mt-3">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
          <p className="text-green-600 font-bold mt-2 text-base sm:text-lg">
            💰 {item.price.toLocaleString()} VNĐ
          </p>

          <div className="mt-4 flex items-center justify-center gap-4">
            {item.quantity > 0 && (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                onClick={() => onDecrease(item.id)}
              >
                ➖
              </button>
            )}

            <span className="text-lg text-gray-900 font-semibold">
              {item.quantity}
            </span>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
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
