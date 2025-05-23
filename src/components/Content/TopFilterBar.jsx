import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const TopFilterBar = ({ selectedRoom, onSelect }) => {
const { t } = useTranslation();
  const rooms = [
    t('menu-products'),
    'Living Room',
    'Dining Room',
    'Bedroom',
    'Study Room',
    'Other',
    'My Favorites',
  ];

  return (
    <div className="bg-white px-4 py-2 border-b flex space-x-4 overflow-x-auto">
      {rooms.map((room) => (
        <button
          key={room}
          onClick={() => onSelect(room)}
          className={clsx(
            'text-sm whitespace-nowrap px-3 py-1 rounded-full transition-colors',
            selectedRoom === room
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          )}
        >
          {room}
        </button>
      ))}
    </div>
  );
};

export default TopFilterBar;
