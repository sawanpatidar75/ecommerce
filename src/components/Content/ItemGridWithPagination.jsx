import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ItemGridWithPagination = ({ items, itemsPerPage = 8 }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPage, setJumpPage] = useState('');
  const maxPagesToShow = 5;

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = items.slice(indexOfFirst, indexOfLast);

  const getVisiblePages = () => {
    const half = Math.floor(maxPagesToShow / 2);
    let start = Math.max(currentPage - half, 1);
    let end = start + maxPagesToShow - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxPagesToShow + 1, 1);
    }

    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const handleJump = () => {
    const page = Number(jumpPage);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-6">
      <div className="text-sm text-gray-600 mb-2">
        Showing page {currentPage} of {totalPages} — Total items: {totalItems}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {currentItems.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-wrap justify-center mt-6 items-center gap-2">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
           {t('first')}
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          {t('prev')}
        </button>

        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          {t('next')}
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          {t('last')}
        </button>

        <div className="ml-4 flex items-center space-x-2">
          <input
            type="number"
            min="1"
            max={totalPages}
            placeholder={t('goto')}
            value={jumpPage}
            onChange={(e) => setJumpPage(e.target.value)}
            className="w-16 px-2 py-1 border border-gray-300 rounded"
          />
          <button
            onClick={handleJump}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            {t('go')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemGridWithPagination;
