import React, { useRef } from 'react';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { label: 'All', count: 2265 },
  { label: 'Sofa Chair', count: 369 },
  { label: 'Arm Chair', count: 267 },
  { label: 'Coffee Table', count: 176 },
  { label: 'Dining Table', count: 75 },
  { label: 'Dining Chair', count: 111 },
  { label: 'Bed', count: 189 },
  // Add more categories if needed
];

const CategoryFilterBar = ({ selectedCategory, onSelect }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -150 : 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-white border-b py-2 px-4 flex items-center">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 z-10 bg-white shadow p-1 rounded-full"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="flex space-x-3 overflow-x-auto scrollbar-hide px-6"
      >
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => onSelect(cat.label)}
            className={clsx(
              'whitespace-nowrap px-4 py-1 rounded-full text-sm transition-colors border',
              selectedCategory === cat.label
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
            )}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 z-10 bg-white shadow p-1 rounded-full"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default CategoryFilterBar;
