import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import FoodList from '@/components/food-list';
import Cart from '@/components/food-list/cart';
import { selectFoods } from '@/store/selector/food-selector';
import { getFoods } from '@/store/slice/food-slice';
import { useAppDispatch } from '@/store/hooks';
import CartButton from '@/components/food-list/cart-button';
import FilterFood from '@/components/food-list/filter';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Lẩu riêu cua',
    description: 'Lẩu thơm ngon...',
    image:
      'https://storage.quannhautudo.com/data/thumb_1200/Data/images/product/2024/04/202404120255444353.webp',
    price: 350000,
    quantity: 0,
    category: 'Lẩu',
  },
  {
    id: 2,
    name: 'Lẩu ếch',
    description: 'Lẩu ngon...',
    image: 'https://www.lorca.vn/wp-content/uploads/2024/09/2-49.jpg',
    price: 350000,
    quantity: 0,
    category: 'Lẩu',
  },
  {
    id: 3,
    name: 'Bò nướng',
    description: 'Bò nướng than...',
    image:
      'https://cdn.tgdd.vn/Files/2018/09/11/1116585/cach-uop-thit-bo-nuong-thom-mem-chuan-vi-nhu-ngoai-hang-5.jpg',
    price: 250000,
    quantity: 0,
    category: 'Nướng',
  },
  {
    id: 4,
    name: 'Khoai tây chiên',
    description: 'Khoai giòn rụm...',
    image:
      'https://cdn.tgdd.vn/Files/2015/03/01/615221/bi-quyet-lam-moi-khoai-tay-chien-cu-5-760x367.jpg',
    price: 50000,
    quantity: 0,
    category: 'Món ăn kèm',
  },
  {
    id: 5,
    name: 'Pepsi',
    description: 'Vị ngon...',
    image:
      'https://product.hstatic.net/1000288770/product/nuoc_ngot_pepsi_cola_lon_330ml_5d1df64d846f4f93aa666c723cea177d_master.jpg',
    price: 20000,
    quantity: 0,
    category: 'Đồ uống',
  },
];

const categories = ['Lẩu', 'Nướng', 'Món ăn kèm', 'Đồ uống'];

const App: React.FC = () => {
  const [foods, setFoods] = useState<FoodItem[]>(foodItems);
  const [selectedCategory, setSelectedCategory] = useState('Lẩu');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  const dispatch = useAppDispatch();
  const foodList = useSelector(selectFoods);

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

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
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setFoods(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: 0 } : item))
    );
  };

  const filteredFoods = foods.filter(
    item =>
      item.category === selectedCategory &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="max-w-5xl w-full">
        {showCart ? (
          <Cart
            cartItems={foods.filter(item => item.quantity > 0)}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
            onCheckout={() => alert('Thanh toán thành công!')}
            onBack={() => setShowCart(false)}
          />
        ) : (
          <>
            <FilterFood
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <FoodList
              foodItems={filteredFoods}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />

            <CartButton
              cartCount={foods.filter(item => item.quantity > 0).length}
              onClick={() => setShowCart(true)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
