import React, { useState } from 'react';
import { Users, Search, Plus, UserPlus } from 'lucide-react';

const Students = () => {
  const [students] = useState([
    { id: 'CS20-001', name: 'Aarav Patel', section: 'A', status: 'Active', cgpa: 8.5 },
    { id: 'CS20-002', name: 'Priya Sharma', section: 'A', status: 'Active', cgpa: 9.1 },
    { id: 'CS20-003', name: 'Rahul Kumar', section: 'A', status: 'Active', cgpa: 7.8 },
    { id: 'CS20-004', name: 'Ananya Singh', section: 'A', status: 'Active', cgpa: 8.9 },
    { id: 'CS20-005', name: 'Rohan Gupta', section: 'A', status: 'Active', cgpa: 8.2 },
    { id: 'CS20-006', name: 'Sneha Desai', section: 'A', status: 'Active', cgpa: 9.4 },
    { id: 'CS20-007', name: 'Vikram Malhotra', section: 'A', status: 'Active', cgpa: 7.5 },
    { id: 'CS20-008', name: 'Neha Reddy', section: 'A', status: 'Active', cgpa: 8.6 },
    { id: 'CS20-009', name: 'Aditya Joshi', section: 'A', status: 'Active', cgpa: 8.0 },
    { id: 'CS20-010', name: 'Kavya Iyer', section: 'A', status: 'Active', cgpa: 9.2 },
    { id: 'CS20-011', name: 'Karan Verma', section: 'A', status: 'Active', cgpa: 7.9 },
    { id: 'CS20-012', name: 'Pooja Nair', section: 'A', status: 'Active', cgpa: 8.8 },
    { id: 'CS20-013', name: 'Arjun Rao', section: 'A', status: 'Active', cgpa: 8.3 },
    { id: 'CS20-014', name: 'Riya Das', section: 'A', status: 'Active', cgpa: 9.0 },
    { id: 'CS20-015', name: 'Sidharth Menon', section: 'A', status: 'Active', cgpa: 8.1 },
    { id: 'CS20-016', name: 'Nisha Pillai', section: 'A', status: 'Active', cgpa: 9.3 },
    { id: 'CS20-017', name: 'Tarun Bhatia', section: 'A', status: 'Active', cgpa: 7.7 },
    { id: 'CS20-018', name: 'Meera Rajput', section: 'A', status: 'Active', cgpa: 8.4 },
    { id: 'CS20-019', name: 'Kunal Sen', section: 'A', status: 'Active', cgpa: 8.7 },
    { id: 'CS20-020', name: 'Ishita Agarwal', section: 'A', status: 'Active', cgpa: 9.5 },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <Users className="mr-2" /> Students Directory
        </h3>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
            <UserPlus size={18} className="mr-1" /> Add Student
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white">B.Tech Computer Science - Section A (20 Students)</h4>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">2024 Batch</span>
        </div>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Roll No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Section</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">CGPA</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-medium">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{student.section}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white font-semibold">{student.cgpa}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {student.status}
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

export default Students;
