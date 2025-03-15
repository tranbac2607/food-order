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

const foodItems = [
  {
    id: 1,
    name: 'Phở Bò',
    description: 'Món ăn truyền thống Việt Nam với nước dùng thơm ngon.',
    image:
      'https://static.kinhtedothi.vn/w960/images/upload/2022/09/16/phobohanoi.jpg',
    price: 50000,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Bánh Mì',
    description: 'Bánh mì giòn rụm với nhân thịt, chả, rau thơm.',
    image:
      'https://thuonghieuquocgia.congthuong.vn/stores/news_dataimages/2024/032024/16/09/top-1-mon-sandwich-ngon-nhat-the-gioi-goi-ten-banh-my-viet-nam1710498007-182420240316092132.jpg?rt=20240316092204',
    price: 30000,
    quantity: 0,
  },
  {
    id: 3,
    name: 'Bún Chả',
    description: 'Món bún chả nướng Hà Nội thơm ngon.',
    image:
      'https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/08/cach-lam-nuoc-mam-bun-cha-02.jpg',
    price: 60000,
    quantity: 0,
  },
];

const App: React.FC = () => {
  const [foods, setFoods] = useState<FoodItem[]>(foodItems);
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
    setFoods(foodItems);
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
