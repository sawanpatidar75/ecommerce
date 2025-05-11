import React from "react";
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdColorLens } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { useTranslation } from 'react-i18next';

const menuItems = [
    { name: "", icon: <FaHome />, route: "/" },
    { name: "", icon: <TfiLayoutGrid3Alt />, route: "/marble" },
    { name: "", icon: <MdColorLens />, route: "/color-swatch" },
];

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <header className="bg-gray-800 text-white flex justify-between items-center px-6 py-3 shadow">
            <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold">
                    <span className="text-green-400">{t('welcome')}</span>
                </div>
                <nav className="flex ml-23">
                    {menuItems.map((item) => (
                        <a
                            href={item.route}
                            key={item.name}
                            className="flex items-center gap-0 hover:bg-gray-700 px-3 py-1 rounded transition"
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <select
                    onChange={handleLanguageChange}
                    value={i18n.language}
                    className="bg-gray-700 text-white px-2 py-1 rounded"
                >
                    <option value="en">en</option>
                    <option value="zh">zh</option>
                </select>

                <IoNotifications size={22} />
                <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="user"
                />
            </div>
        </header>
    );
};

export default Navbar;
