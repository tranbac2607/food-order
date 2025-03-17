import React from 'react';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
  onBack: () => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
  onBack,
}) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-lg font-bold text-black flex items-center gap-2 mb-4">
        📋 Đơn hàng của bạn
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Chưa có món nào trong giỏ hàng.</p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map(item => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 bg-[#f7f5ed] rounded-lg shadow-sm border"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-yellow-600 text-sm font-semibold">
                    {item.quantity}×
                  </p>
                  <h3 className="text-black font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Giá: {item.price.toLocaleString()} đ
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-gray-600 hover:text-red-600"
                  onClick={() => onRemove(item.id)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 border-t pt-3">
        <p className="text-lg font-bold text-black flex justify-between">
          Tổng tiền: <span>{totalPrice.toLocaleString()} đ</span>
        </p>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-bold hover:bg-gray-600 transition"
          onClick={onBack}
        >
          🔙 Quay lại
        </button>
        {cartItems.length > 0 && (
          <button
            className="flex-1 bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
            onClick={onCheckout}
          >
            ✅ Xác nhận đơn hàng
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
