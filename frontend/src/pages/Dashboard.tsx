import React, { useState } from 'react';
import { Users, GraduationCap, Building2, TrendingUp, DollarSign, Book } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState([
    { title: 'Total Students', value: '4,521', icon: Users, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { title: 'Faculty Members', value: '312', icon: GraduationCap, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
    { title: 'Total Campuses', value: '4', icon: Building2, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
    { title: 'Revenue (YTD)', value: '$2.4M', icon: DollarSign, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { title: 'Library Books', value: '85,000+', icon: Book, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
    { title: 'Placement Rate', value: '89%', icon: TrendingUp, color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/30' },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">University Overview (Analytics)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex items-center">
            <div className={`p-4 rounded-full ${stat.bg} ${stat.color} mr-4`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Admissions Trend (Mock Chart)</h3>
          <div className="h-64 flex items-end justify-between space-x-2 pb-6 border-b border-gray-200 dark:border-gray-700">
            {[40, 60, 45, 80, 65, 90, 75, 100].map((height, i) => (
              <div key={i} className="w-1/8 bg-blue-500 hover:bg-blue-600 rounded-t-sm transition-all" style={{ height: `${height}%`, width: '10%' }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>2017</span><span>2018</span><span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2024</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Recent System Activity</h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View Audit Logs</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500 mr-3"></div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">New Campus Added: North Campus</p>
                <p className="text-xs text-gray-500">By SuperAdmin • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 mr-3"></div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Fee Invoice Generated for CS20 Batch</p>
                <p className="text-xs text-gray-500">By FinanceAdmin • 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500 mr-3"></div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Exam Results Published (Fall 2024)</p>
                <p className="text-xs text-gray-500">By ExamController • 1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
