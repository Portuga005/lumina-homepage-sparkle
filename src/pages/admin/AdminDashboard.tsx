
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';
import Dashboard from '@/components/admin/Dashboard';
import ProductManagement from '@/components/admin/ProductManagement';
import OrderManagement from '@/components/admin/OrderManagement';
import CustomerManagement from '@/components/admin/CustomerManagement';
import PromoManagement from '@/components/admin/PromoManagement';
import Settings from '@/components/admin/Settings';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-lumina-gray">
      <AdminSidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/orders" element={<OrderManagement />} />
          <Route path="/customers" element={<CustomerManagement />} />
          <Route path="/promotions" element={<PromoManagement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
