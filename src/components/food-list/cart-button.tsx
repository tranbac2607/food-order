import { FiShoppingCart } from 'react-icons/fi';

const CartButton = ({
  cartCount,
  onClick,
}: {
  cartCount: number;
  onClick: () => void;
}) => {
  return (
    <button
      className="fixed bottom-6 right-6 bg-teal-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-600 transition-transform transform hover:scale-110"
      onClick={onClick}
    >
      <FiShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
