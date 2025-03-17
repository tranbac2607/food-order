import React from 'react';

interface FilterFoodProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterFood: React.FC<FilterFoodProps> = ({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="🔍 Hãy nhập món cần tìm..."
        className="w-full p-3 border rounded-md mb-4 text-black"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="border-b border-gray-300 flex mb-4">
        {categories.map(category => (
          <button
            key={category}
            type="button"
            className={`px-4 py-2 cursor-pointer text-black focus:outline-none ${
              selectedCategory === category
                ? 'border-b-4 border-yellow-500 font-semibold text-yellow-500'
                : 'text-gray-600'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterFood;
