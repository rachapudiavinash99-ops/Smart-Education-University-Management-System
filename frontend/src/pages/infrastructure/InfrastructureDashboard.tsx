import React, { useState } from 'react';
import { Book, Home, Bus, Plus, Search } from 'lucide-react';

const InfrastructureDashboard = () => {
  const [activeTab, setActiveTab] = useState('library');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          Infrastructure & Resources
        </h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
          <Plus size={18} className="mr-1" /> Add Record
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('library')}
              className={`${activeTab === 'library' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <Book size={18} className="mr-2" /> Library
            </button>
            <button
              onClick={() => setActiveTab('hostel')}
              className={`${activeTab === 'hostel' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <Home size={18} className="mr-2" /> Hostel
            </button>
            <button
              onClick={() => setActiveTab('transport')}
              className={`${activeTab === 'transport' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <Bus size={18} className="mr-2" /> Transport
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'library' && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Book Issues</h4>
          {/* Placeholder for library data */}
          <p className="text-gray-500 dark:text-gray-400">Library management interface goes here...</p>
        </div>
      )}

      {activeTab === 'hostel' && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Hostel Allocations</h4>
          {/* Placeholder for hostel data */}
          <p className="text-gray-500 dark:text-gray-400">Hostel management interface goes here...</p>
        </div>
      )}

      {activeTab === 'transport' && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Active Transport Routes</h4>
          {/* Placeholder for transport data */}
          <p className="text-gray-500 dark:text-gray-400">Transport management interface goes here...</p>
        </div>
      )}
    </div>
  );
};

export default InfrastructureDashboard;
