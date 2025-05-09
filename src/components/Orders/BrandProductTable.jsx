const BrandProductTable = ({ products }) => {
    return (
        <div className="overflow-auto w-full">
            <table className="table-auto min-w-full border rounded shadow-sm text-sm">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2"><input type="checkbox" /></th>
                        <th className="p-2">Image</th>
                        <th className="p-2">Code</th>
                        <th className="p-2">Product Name</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2">Dimensions</th>
                        <th className="p-2">Remark</th>
                        <th className="p-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="border-t hover:bg-gray-50">
                            <td className="p-2"><input type="checkbox" /></td>
                            <td className="p-2"><img
                                src={product.image}
                                alt={product.name}
                                className="h-10 object-contain m-1"
                            /></td>
                            <td className="p-2">{product.code}</td>
                            <td className="p-2">{product.name}</td>
                            <td className="p-2">{product.quantity}</td>
                            <td className="p-2">{product.dimensions}</td>
                            <td className="p-2">{product.remark}</td>
                            <td className="p-2">{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BrandProductTable;
