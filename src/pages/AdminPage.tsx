import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import SEO from '../components/shared/SEO';

const AdminPage = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <SEO 
        title="Admin Dashboard - Nimbus Gaming"
        description="Nimbus Gaming admin dashboard"
      />
      <div className="min-h-screen bg-white pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <button
                onClick={logout}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Logout
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
                <p className="text-gray-600">No orders yet</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Waitlist Statistics</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">Total Signups: 0</p>
                  <p className="text-gray-600">This Week: 0</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Inventory Status</h2>
                <p className="text-gray-600">No products in inventory</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <p className="text-gray-600">No recent activity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;