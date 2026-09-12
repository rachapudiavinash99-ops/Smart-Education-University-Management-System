import React, { useState } from 'react';
import { FileText, Plus, Download, MessageSquare } from 'lucide-react';

const Assignments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Data Structures Capstone Project', subject: 'CS102', deadline: '2024-05-15', status: 'PUBLISHED', submissions: 45, max: 60 },
    { id: 2, title: 'Network OSI Model Essay', subject: 'CS201', deadline: '2024-06-01', status: 'DRAFT', submissions: 0, max: 60 },
    { id: 3, title: 'Compiler Design Lexical Analyzer', subject: 'CS305', deadline: '2024-04-20', status: 'PUBLISHED', submissions: 58, max: 60 },
    { id: 4, title: 'Machine Learning Model Deployment', subject: 'CS401', deadline: '2024-05-10', status: 'PUBLISHED', submissions: 32, max: 60 },
    { id: 5, title: 'Thermodynamics Lab Report', subject: 'ME201', deadline: '2024-05-05', status: 'PUBLISHED', submissions: 55, max: 60 },
    { id: 6, title: 'Financial Accounting Case Study', subject: 'MBA101', deadline: '2024-06-15', status: 'DRAFT', submissions: 0, max: 45 },
    { id: 7, title: 'Operating Systems Shell Scripting', subject: 'CS205', deadline: '2024-04-25', status: 'PUBLISHED', submissions: 60, max: 60 },
    { id: 8, title: 'Engineering Drawing Assignment', subject: 'CE101', deadline: '2024-05-02', status: 'PUBLISHED', submissions: 40, max: 60 },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <FileText className="mr-2" /> Assignments
        </h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} className="mr-1" /> Create Assignment
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Deadline</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Submissions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {assignments.map((assignment) => (
              <tr key={assignment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{assignment.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{assignment.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{assignment.deadline}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 dark:text-white font-medium">{assignment.submissions} / {assignment.max}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${assignment.status === 'PUBLISHED' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                    {assignment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300" title="Grade">
                    <MessageSquare size={18} />
                  </button>
                  <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" title="Download Materials">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dynamic Action Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create Assignment</h3>
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

export default Assignments;
