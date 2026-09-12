import React, { useState } from 'react';
import { Shield, AlertTriangle, Key, Search, Clock } from 'lucide-react';

const SecurityAudit = () => {
  const [logs, setLogs] = useState([
    { id: 1, action: 'USER_LOGIN_FAILED', user: 'Unknown', ip: '192.168.1.104', timestamp: '2 mins ago', severity: 'HIGH' },
    { id: 2, action: 'GRADE_MODIFIED', user: 'Prof. Smith', ip: '10.0.0.15', timestamp: '1 hour ago', severity: 'MEDIUM' },
    { id: 3, action: 'FEE_INVOICE_GENERATED', user: 'FinanceAdmin', ip: '10.0.0.42', timestamp: '3 hours ago', severity: 'LOW' },
    { id: 4, action: 'NEW_CAMPUS_ADDED', user: 'SuperAdmin', ip: '172.16.0.5', timestamp: '1 day ago', severity: 'LOW' },
  ]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'HIGH': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <Shield className="mr-2" /> Security & Audit Logs
        </h3>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search IP, User, Action..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center">
            <AlertTriangle size={18} className="mr-1" /> Block IP
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Timestamp</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">IP Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Severity</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <Clock size={14} className="mr-1" /> {log.timestamp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{log.action}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{log.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">{log.ip}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getSeverityColor(log.severity)}`}>
                    {log.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecurityAudit;
