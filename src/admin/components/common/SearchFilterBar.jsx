// src/admin/components/common/SearchFilterBar.jsx
import React from 'react';

const SearchFilterBar = ({
  categories = [],
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
}) => {
  const handleCategoryClick = (cat) => {
    if (selectedCategory === cat) {
      onCategorySelect(null);
    } else {
      onCategorySelect(cat);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="flex flex-col gap-4">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products by title or description..."
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onCategorySelect(null)}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              selectedCategory === null
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
