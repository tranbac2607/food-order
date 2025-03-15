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
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
  onBack: () => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  onRemoveItem,
  onCheckout,
  onBack,
}) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-black font-bold mb-4">
        🛍️ Đơn hàng của bạn
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Chưa có món nào trong giỏ hàng.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg text-black font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">
                      💰 {item.price.toLocaleString()} VNĐ x {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => onRemoveItem(item.id)}
                >
                  ❌ Xóa
                </button>
              </li>
            ))}
          </ul>

          <p className="text-xl text-black font-bold mt-4">
            Tổng tiền: 💰 {totalPrice.toLocaleString()} VNĐ
          </p>

          <div className="flex gap-4 mt-6">
            <button
              className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
              onClick={onBack}
            >
              🔙 Quay lại
            </button>
            <button
              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              onClick={onCheckout}
            >
              ✅ Thanh toán
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
