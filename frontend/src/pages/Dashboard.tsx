import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Stat Card 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-700">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Students</div>
          <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">12,456</div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-700">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Faculty</div>
          <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">842</div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-700">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Courses</div>
          <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">354</div>
        </div>

        {/* Stat Card 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-700">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Today's Attendance</div>
          <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">94%</div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
