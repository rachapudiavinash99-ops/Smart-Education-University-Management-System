import React, { useState } from 'react';
import { Bell, Megaphone, MessageSquare, Clock } from 'lucide-react';

const Notifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('announcements');

  const announcements = [
    { id: 1, title: 'End Semester Exam Schedule Released', time: '2 hours ago', priority: 'HIGH', author: 'Registrar Office' },
    { id: 2, title: 'Annual Tech Fest Registration Open', time: '1 day ago', priority: 'NORMAL', author: 'Student Council' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <Bell className="mr-2" /> Communications Center
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab('announcements')}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === 'announcements' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
          >
            <Megaphone size={18} className="mr-3" /> Announcements
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === 'messages' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
          >
            <MessageSquare size={18} className="mr-3" /> Direct Messages
          </button>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-200 dark:border-gray-700 h-[600px] flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h4 className="font-medium text-gray-800 dark:text-white">
                {activeTab === 'announcements' ? 'Recent Announcements' : 'Your Messages'}
              </h4>
              {activeTab === 'announcements' && (
                <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded" onClick={() => setIsModalOpen(true)}>New Broadcast</button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activeTab === 'announcements' && announcements.map((ann) => (
                <div key={ann.id} className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white">{ann.title}</h5>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${ann.priority === 'HIGH' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                      {ann.priority}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span>By: {ann.author}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1" /> {ann.time}</span>
                  </div>
                </div>
              ))}
              
              {activeTab === 'messages' && (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <MessageSquare size={48} className="mx-auto mb-3 opacity-20" />
                    <p>Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Action Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">New Broadcast</h3>
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

export default Notifications;
