const OrderTable = ({ orders }) => {
    return (
        <div className="overflow-auto w-full">
            <table className="table-auto min-w-full border rounded shadow-sm text-sm">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2"><input type="checkbox" /></th>
                        <th className="p-2">Product Name</th>
                        <th className="p-2">Staff</th>
                        <th className="p-2">No. of Items</th>
                        <th className="p-2">Order Start Date</th>
                        <th className="p-2">Last Update</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} className="border-t hover:bg-gray-50">
                            <td className="p-2"><input type="checkbox" /></td>
                            <td className="p-2">{order.productName}</td>
                            <td className="p-2">{order.staff}</td>
                            <td className="p-2">{order.items}</td>
                            <td className="p-2">{order.startDate}</td>
                            <td className="p-2">{order.lastUpdate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default OrderTable;
