import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import ContentBar from './ContentBar';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const { t } = useTranslation();

  const menuItems = [
    { name: t('menu-products'), icon: "/icons/product.svg", route: "/products" },
    { name: 'Brands', icon: "/icons/brands.svg", route: '/brands' },
    { name: 'Brand Products', icon: "/icons/brand-product.svg", route: '/brand-products' },
    { name: 'Marble', icon: "/icons/marble.svg", route: '/marble' },
    { name: 'Color Swatch', icon: "/icons/swatch.svg", route: '/swatch' },
    { name: 'Textile', icon: "/icons/textile.svg", route: '/textile' },
    { name: 'Project', icon: "/icons/project.svg", route: '/projects' },
    { name: 'Order', icon: "/icons/order.svg", route: '/orders' },
    { name: 'Setting', icon: "/icons/setting.svg", route: '/settings' },
  ];
 
  const location = useLocation();
  const selectedMenu = menuItems.find(item => item.route === location.pathname);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <ContentBar selectedMenu={selectedMenu} />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
