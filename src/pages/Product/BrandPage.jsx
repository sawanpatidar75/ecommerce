import React, { useState } from 'react';
import TopFilterBar from '../../components/Content/TopFilterBar';
import CategoryFilterBar from '../../components/Content/CategoryFilterBar';
import ItemGridWithPagination from '../../components/Content/ItemGridWithPagination';

const dummyItems = Array.from({ length: 500 }).map((_, idx) => ({
  name: `Item ${idx + 1}`,
  dimensions: `W${1000 + idx}×D${500 + idx}×H${500 + idx}`,
  code: `YZ${2000 + idx}A`,
  image: 'https://picsum.photos/id/' + (idx) + '/500/300',
}));

const BrandPage = () => {
  const [selectedTop, setSelectedTop] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="p-4">
      <TopFilterBar selected={selectedTop} onSelect={setSelectedTop} />
      <CategoryFilterBar selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
      <ItemGridWithPagination items={dummyItems} />
    </div>
  );
};

export default BrandPage;
