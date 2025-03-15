import React, { useState } from 'react';

import FoodList from '@/components/food-list';
import Cart from '@/components/food-list/card';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

const initialFoods: FoodItem[] = [
  {
    id: 1,
    name: '🍕 Pizza',
    description: 'Ngon, nóng hổi!',
    image: 'pizza.jpg',
    price: 120000,
    quantity: 0,
  },
  {
    id: 2,
    name: '🍔 Burger',
    description: 'Siêu ngon!',
    image: 'burger.jpg',
    price: 90000,
    quantity: 0,
  },
  {
    id: 3,
    name: '🍣 Sushi',
    description: 'Hải sản tươi sống',
    image: 'sushi.jpg',
    price: 150000,
    quantity: 0,
  },
];

const App: React.FC = () => {
  const [foods, setFoods] = useState<FoodItem[]>(initialFoods);
  const [showCart, setShowCart] = useState(false);

  const handleIncrease = (id: number) => {
    setFoods(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setFoods(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setFoods(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: 0 } : item))
    );
  };

  const handleCheckout = () => {
    alert('Thanh toán thành công!');
    setFoods(initialFoods);
    setShowCart(false);
  };

  const cartItems = foods.filter(item => item.quantity > 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 flex justify-center items-center p-6">
      <div className="max-w-5xl w-full">
        {showCart ? (
          <Cart
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
            onBack={() => setShowCart(false)}
          />
        ) : (
          <FoodList
            foodItems={foods}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        )}

        {!showCart && cartItems.length > 0 && (
          <button
            className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            onClick={() => setShowCart(true)}
          >
            🛍️ Xem chi tiết đơn hàng ({cartItems.length} món) -{' '}
            {totalPrice.toLocaleString()} VNĐ
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
