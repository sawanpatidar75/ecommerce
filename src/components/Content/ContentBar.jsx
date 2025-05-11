import React from 'react';
import { AudioLines, List } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContentBar = ({ selectedMenu }) => {
   const { t } = useTranslation();
  return (
    <div className="w-full bg-white shadow-sm px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        {selectedMenu?.icon && (
          <AudioLines className="w-5 h-5 text-red-600" />
        )}
        <h1 className="text-lg font-medium">{selectedMenu?.name || 'Dashboard'}</h1>
      </div>

      <div className="flex items-center space-x-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
        {t('addToFavorites')}
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
        {t('addToProjects')}
        </button>
        <List className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  );
};

export default ContentBar;
