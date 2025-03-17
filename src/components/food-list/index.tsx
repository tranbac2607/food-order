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
    <div className="space-y-4">
      {foodItems.map(item => (
        <div
          key={item.id}
          className="bg-[#f7f5ed] p-3 rounded-lg flex items-center shadow-md"
        >
          {/* Ảnh món ăn */}
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Thông tin món ăn */}
          <div className="flex-1 ml-3">
            <h3 className="text-lg font-semibold text-black">{item.name}</h3>
            <p className="text-gray-700 text-sm mt-1">
              Giá:{' '}
              <span className="text-black font-medium">
                {item.price.toLocaleString()} đ
              </span>
            </p>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          </div>

          {/* Nút tăng/giảm */}
          <div className="flex items-center justify-end space-x-2 ml-4 min-w-[70px]">
            {item.quantity > 0 && (
              <>
                <button
                  className="w-5 h-5 flex items-center justify-center bg-gray-200 text-black text-xs rounded-full hover:bg-gray-300 transition"
                  onClick={() => onDecrease(item.id)}
                >
                  ➖
                </button>
                <span className="text-sm text-black font-semibold">
                  {item.quantity}
                </span>
              </>
            )}

            <button
              className="w-5 h-5 flex items-center justify-center bg-gray-200 text-black text-xs rounded-full hover:bg-gray-300 transition"
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
