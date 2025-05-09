import React, { useState } from 'react';
// import TopTabs from '../components/Orders/TopTabs';
// import OrderTable from '../components/Orders/OrderTable';
// import PaginationBar from '../components/common/PaginationBar';
import Topbar from '../../components/Orders/Topbar';
import OrderTable from '../../components/Orders/OrderTables';
import ItemGridWithPagination from '../../components/Content/ItemGridWithPagination';
import PaginationBar from '../../components/Orders/OrderPagination';

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

const OrderPage = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const filteredOrders = dummyOrders.filter(order => {
        if (activeTab === 'All') return true;
        if (activeTab === 'In Progress') return order.items > 2;
        if (activeTab === 'Completed') return order.items <= 2;
        return true;
    });

    return (
        <div className="flex flex-col h-full w-full p-4 bg-gray-50">
            <Topbar active={activeTab} onTabChange={setActiveTab} />

            {/* Scrollable Table Area */}
            <div className="flex-1 overflow-auto">
                <OrderTable orders={filteredOrders} />
            </div>

            {/* Sticky Pagination */}
            <div className="sticky bottom-0 bg-white py-2 border-t">
                <PaginationBar
                    total={filteredOrders.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default OrderPage;
