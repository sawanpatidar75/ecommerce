import React, { useState } from "react";
import { FaBars, FaBoxOpen } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdAddBox, MdColorLens, MdHome, MdLayers, MdOutlineGridView } from "react-icons/md";
import { TfiPackage } from "react-icons/tfi";
import { AiOutlineProduct } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { name: "Menu Products", icon: <AiOutlineProduct />, route: "/products" },
    { name: 'Brands', icon: <MdHome />, route: '/brands' },
    { name: 'Brand Products', icon: <TfiPackage />, route: '/brand-products' },
    { name: 'Marble', icon: <MdLayers />, route: '/marble' },
    { name: 'Color Swatch', icon: <MdAddBox />, route: '/swatch' },
    { name: 'Textile', icon: <MdOutlineGridView />, route: '/textile' },
    { name: 'Project', icon: <AiOutlineProduct />, route: '/projects' },
    { name: 'Order', icon: <FaBoxOpen />, route: '/orders' },
    { name: 'Setting', icon: <IoSettings />, route: '/settings' },
];

const Sidebar = () => {
    
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const menu = menuItems.find(item => item.route === location.pathname);
    console.log('sidebar menu', menu);


    return (
        <aside className={`bg-gray-800 text-white h-full transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
            <div className="flex justify-between items-center px-4 py-3">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <FaBars />
                </button>
                {isOpen && (
                    <div className="text-lg font-semibold text-green-400">Menu</div>
                )}
            </div>

            <nav className="mt-6 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.route}
                        menu={menu}
                        className={`flex items-center px-4 py-2 hover:bg-gray-700 ${location.pathname === item.route ? 'bg-gray-700' : ''
                            }`}
                    >
                        <span>{item.icon}</span>
                        {isOpen && <span className="ml-3">{item.name}</span>}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
