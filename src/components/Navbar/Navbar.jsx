import React from "react";
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdColorLens } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const menuItems = [
    { name: "Home", icon: <FaHome />, route: "/" },
    { name: "Dashboard", icon: <TfiLayoutGrid3Alt />, route: "/marble" },
    { name: "Portal", icon: <MdColorLens />, route: "/color-swatch" },
];

const Navbar = () => {
    return (
        <header className="bg-gray-800 text-white flex justify-between items-center px-6 py-3 shadow">
            <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold">
                    <span className="text-green-400">Ecommerce</span>
                </div>
                <nav className="flex space-x-6">
                    {menuItems.map((item) => (
                        <a
                            href={item.route}
                            key={item.name}
                            className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded transition"
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-4">
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



// import React from 'react';
// import { FaHome } from "react-icons/fa";
// import { MdColorLens } from "react-icons/md";
// import { TfiLayoutGrid3Alt } from "react-icons/tfi";
// import { IoNotifications } from "react-icons/io5";

// const menuItems = [
//   { name: "Home", icon: <FaHome />, route: "/" },
//   { name: "Dashboard", icon: <TfiLayoutGrid3Alt />, route: "/marble" },
//   { name: "Portal", icon: <MdColorLens />, route: "/color-swatch" },
// ];

// const Navbar = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top Navbar */}
//       <aside className="flex items-center justify-between bg-gray-800 text-white px-6 py-3">
//         {/* Left: Logo and Navigation */}
//         <div className="flex items-center space-x-8">
//           <div className="text-2xl font-bold">
//             <span className="text-green-400">MANU</span> by Manita
//           </div>
//           <nav className="flex space-x-6">
//             {menuItems.map((item) => (
//               <a
//                 href={item.route}
//                 key={item.name}
//                 className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded transition"
//               >
//                 {item.icon}
//                 <span>{item.name}</span>
//               </a>
//             ))}
//           </nav>
//         </div>

//         {/* Right: Notifications and User */}
//         <div className="flex items-center space-x-4">
//           <button className="text-white hover:text-gray-300">
//             <IoNotifications size={20} />
//           </button>
//           <button className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//             <img
//               className="w-8 h-8 rounded-full"
//               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               alt="User avatar"
//             />
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="p-6">
//         <h1 className="text-xl font-semibold">Welcome to the Dashboard</h1>
//         {/* Insert your content here */}
//       </main>
//     </div>
//   );
// };

// export default Navbar;
