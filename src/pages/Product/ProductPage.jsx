import React, { useState } from 'react';
import TopFilterBar from '../../components/Content/TopFilterBar';
import CategoryFilterBar from '../../components/Content/CategoryFilterBar';
import ItemGridWithPagination from '../../components/Content/ItemGridWithPagination';

const dummyItems = Array.from({ length: 500 }).map((_, idx) => ({
  name: `Item ${idx + 1}`,
  dimensions: `W${700 + idx}×D${600 + idx}×H${500 + idx}`,
  code: `YZ${8000 + idx}A`,
  image: 'https://picsum.photos/id/' + (idx % 100) + '/500/300',
}));

const ProductPage = () => {
  const [selectedTop, setSelectedTop] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <TopFilterBar selected={selectedTop} onSelect={setSelectedTop} />
      <CategoryFilterBar selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
      <ItemGridWithPagination items={dummyItems} />
    </>
  );
};

export default ProductPage;
