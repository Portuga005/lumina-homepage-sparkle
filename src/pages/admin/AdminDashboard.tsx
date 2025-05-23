
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';
import Dashboard from '@/components/admin/Dashboard';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-lumina-gray">
      <AdminSidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
