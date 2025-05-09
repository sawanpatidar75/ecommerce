import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductPage from "./pages/Product/ProductPage";
import BrandPage from "./pages/Product/BrandPage";
import Layout from "./components/Content/Layout";
import OrderPage from "./pages/Order/OrderPage";
import BrandProductPage from "./pages/Order/BrandProductPage";
// Import other pages when ready
// import BrandPage from "./pages/BrandPage";
// import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/menu-products" element={<ProductPage />} />
          <Route path="/brands" element={<OrderPage />} />
          <Route path="/brand-products" element={<BrandProductPage />} />
          <Route path="/*" element={"Home Page"} />
          {/* Add other routes similarly */}
        </Route>
      </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
