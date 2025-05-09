import React from 'react';
import { Bell } from 'lucide-react';

const ContentBar = ({ selectedMenu }) => {
  return (
    <div className="w-full bg-white shadow-sm px-4 py-2 flex justify-between items-center">
      {/* Left section */}
      <div className="flex items-center space-x-3">
        {selectedMenu?.icon && (
          <img src={selectedMenu.icon} alt={selectedMenu.name} className="w-6 h-6" />
        )}
        <h1 className="text-lg font-medium">{selectedMenu?.name || 'Dashboard'}</h1>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
          Add to Favorites
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
          Add to Project
        </button>
        <Bell className="w-5 h-5 text-gray-600" />
        <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full border" />
      </div>
    </div>
  );
};

export default ContentBar;
