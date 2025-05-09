import React, { useState } from 'react';
// import TopTabs from '../components/Orders/TopTabs';
// import OrderTable from '../components/Orders/OrderTable';
// import PaginationBar from '../components/common/PaginationBar';
import Topbar from '../../components/Orders/Topbar';
import OrderTable from '../../components/Orders/OrderTables';
import ItemGridWithPagination from '../../components/Content/ItemGridWithPagination';
import PaginationBar from '../../components/Orders/OrderPagination';
import { renderToStaticMarkup } from 'react-dom/server';
import BrandProductTable from '../../components/Orders/BrandProductTable';

const dummyOrders = [
    { id: 1, productName: 'Product A', staff: 'Test03', items: 5, startDate: '2025-04-01', lastUpdate: '2025-04-05' },
    { id: 2, productName: 'Product B', staff: 'Test03', items: 3, startDate: '2025-03-20', lastUpdate: '2025-03-25' },
    { id: 3, productName: 'Product C', staff: 'Test03', items: 5, startDate: '2025-04-01', lastUpdate: '2025-04-05' },
    { id: 4, productName: 'Product D', staff: 'Test03', items: 3, startDate: '2025-03-20', lastUpdate: '2025-03-25' },
    { id: 5, productName: 'Product E', staff: 'Test03', items: 5, startDate: '2025-04-01', lastUpdate: '2025-04-05' },
    { id: 6, productName: 'Product F', staff: 'Test03', items: 3, startDate: '2025-03-20', lastUpdate: '2025-03-25' },
    { id: 7, productName: 'Product G', staff: 'Test03', items: 5, startDate: '2025-04-01', lastUpdate: '2025-04-05' },
    { id: 8, productName: 'Product H', staff: 'Test03', items: 3, startDate: '2025-03-20', lastUpdate: '2025-03-25' },
    { id: 9, productName: 'Product I', staff: 'Test03', items: 5, startDate: '2025-04-01', lastUpdate: '2025-04-05' },
    { id: 10, productName: 'Product J', staff: 'Test03', items: 3, startDate: '2025-03-20', lastUpdate: '2025-03-25' },
    { id: 11, productName: 'Product K', staff: 'Test03', items: 5, startDate: '2025-04-01', lastUpdate: '2025-04-05' },
    { id: 12, productName: 'Product L', staff: 'Test03', items: 3, startDate: '2025-03-20', lastUpdate: '2025-03-25' },
    { id: 13, productName: 'Product M', staff: 'Test03', items: 5, startDate: '2025-04-01', lastUpdate: '2025-04-05' },
    { id: 14, productName: 'Product N', staff: 'Test03', items: 3, startDate: '2025-03-20', lastUpdate: '2025-03-25' },
    { id: 15, productName: 'Product O', staff: 'Test03', items: 5, startDate: '2025-04-01', lastUpdate: '2025-04-05' },
    { id: 16, productName: 'Product P', staff: 'Test03', items: 3, startDate: '2025-03-20', lastUpdate: '2025-03-25' },

    // ...more orders
];

const dummyProducts = Array.from({ length: 500 }).map((_, idx) => ({
    id: idx + 1,
    name: `Product ${idx + 1}`,
    image: 'https://picsum.photos/id/' + (idx) + '/500/300',
    code: `YZ${2000 + idx}A`,
    price: Math.floor(Math.random() * 1000) + 1,     // randome number between 1 and 1000
    quantity: Math.floor(Math.random() * 100),
    dimensions: `W${1000 + idx}×D${500 + idx}×H${500 + idx}`,
    remark: `Remark ${idx + 1}`,
  }));

const BrandProductPage = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const filteredProducts = dummyProducts.filter(order => {
        if (activeTab === 'All') return true;
        if (activeTab === 'In Progress') return order.quantity > 10;
        if (activeTab === 'Completed') return order.quantity <= 2;
        return true;
    });

    return (
        <div className="flex flex-col h-full w-full p-4 bg-gray-50">
            <Topbar active={activeTab} onTabChange={setActiveTab} />

            {/* Scrollable Table Area */}
            <div className="flex-1 overflow-auto">
                <BrandProductTable products={filteredProducts} />
            </div>

            {/* Sticky Pagination */}
            <div className="sticky bottom-0 bg-white py-2 border-t">
                <PaginationBar
                    total={filteredProducts.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default BrandProductPage;
