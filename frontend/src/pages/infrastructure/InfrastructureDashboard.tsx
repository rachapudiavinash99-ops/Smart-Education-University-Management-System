import React, { useState } from 'react';
import { Book, Home, Bus, Plus, Search, CheckCircle } from 'lucide-react';

const InfrastructureDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('library');

  const libraryBooks = [
    { id: 'LIB-001', title: 'Data Structures in C++', author: 'Yashavant Kanetkar', available: 12, total: 15 },
    { id: 'LIB-002', title: 'Operating Systems', author: 'Galvin', available: 4, total: 10 },
    { id: 'LIB-003', title: 'Engineering Mathematics', author: 'B.S. Grewal', available: 20, total: 25 },
  ];

  const hostelRooms = [
    { room: 'A-101', type: '2-Seater', capacity: 2, occupied: 2, warden: 'Mr. Ramesh' },
    { room: 'A-102', type: '2-Seater', capacity: 2, occupied: 1, warden: 'Mr. Ramesh' },
    { room: 'B-205', type: '4-Seater', capacity: 4, occupied: 4, warden: 'Mr. Suresh' },
  ];

  const transportRoutes = [
    { id: 'RT-01', route: 'City Center -> Campus', driver: 'Mahesh Kumar', busNo: 'TS 09 AB 1234', capacity: 50 },
    { id: 'RT-02', route: 'North Station -> Campus', driver: 'Rajesh Singh', busNo: 'TS 09 XY 9876', capacity: 45 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          Infrastructure & Resources
        </h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} className="mr-1" /> Add Record
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button onClick={() => setActiveTab('library')} className={`${activeTab === 'library' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}>
              <Book size={18} className="mr-2" /> Library
            </button>
            <button onClick={() => setActiveTab('hostel')} className={`${activeTab === 'hostel' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}>
              <Home size={18} className="mr-2" /> Hostel
            </button>
            <button onClick={() => setActiveTab('transport')} className={`${activeTab === 'transport' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}>
              <Bus size={18} className="mr-2" /> Transport
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'library' && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Library Inventory</h4>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title & Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Availability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {libraryBooks.map((book) => (
                <tr key={book.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{book.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{book.title}</p>
                    <p className="text-xs">{book.author}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{book.available} / {book.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'hostel' && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Hostel Allocations (Boys Wing A & B)</h4>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Occupancy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Warden</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {hostelRooms.map((room) => (
                <tr key={room.room}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{room.room}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{room.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${room.occupied === room.capacity ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                      {room.occupied} / {room.capacity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{room.warden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'transport' && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Active Transport Routes</h4>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Path</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bus No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transportRoutes.map((route) => (
                <tr key={route.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{route.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">{route.route}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{route.busNo}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{route.driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Dynamic Action Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add Record</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              This form module is currently in read-only mode for this demo.
            </p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfrastructureDashboard;
