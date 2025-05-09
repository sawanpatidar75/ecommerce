import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-full">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-contain mb-4"
      />
      <div className="font-semibold text-blue-600 hover:underline cursor-pointer">
        {item.name}
      </div>
      <div className="text-sm text-gray-600">{item.dimensions}</div>
      <div className="text-sm text-blue-500 mt-1">{item.code}</div>
    </div>
  );
};

export default ItemCard;
