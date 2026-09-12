import React, { useState, useEffect } from 'react';
import { FileText, Plus, Download, MessageSquare } from 'lucide-react';

const CAMPUSES = ['Main Campus', 'North Campus', 'Chinni Education Unit', 'Commerce & Arts Wing'];
const ENG_BRANCHES = ['Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics & Comm'];
const COMM_BRANCHES = ['B.Com (Hons)', 'BBA', 'BA English', 'BA Economics', 'B.Sc Finance'];
const SECTIONS = ['A', 'B', 'C', 'D'];

export default function Assignments() {
  const [campus, setCampus] = useState(CAMPUSES[0]);
  const currentBranches = campus === 'Commerce & Arts Wing' ? COMM_BRANCHES : ENG_BRANCHES;
  
  const [branch, setBranch] = useState(currentBranches[0]);
  const [section, setSection] = useState(SECTIONS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAssignments, setActiveAssignments] = useState<any[]>([]);

  useEffect(() => {
    if (!currentBranches.includes(branch)) {
      setBranch(currentBranches[0]);
    }
  }, [campus]);

  useEffect(() => {
    // Generate assignments specific to the branch and campus
    const seed = campus.length + branch.length + section.charCodeAt(0);
    const branchCode = branch.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    
    const generated = [
      { id: 1, title: `${branch} Core Principles Project`, subject: `${branchCode}101`, deadline: '2026-10-15', status: 'PUBLISHED', submissions: 45, max: 60 },
      { id: 2, title: `Advanced ${branchCode} Concepts`, subject: `${branchCode}201`, deadline: '2026-11-01', status: 'DRAFT', submissions: 0, max: 60 },
      { id: 3, title: `Midterm Lab Report (Sec ${section})`, subject: `${branchCode}305`, deadline: '2026-09-20', status: 'PUBLISHED', submissions: seed % 60, max: 60 },
      { id: 4, title: `Industrial Case Study - ${campus}`, subject: `${branchCode}401`, deadline: '2026-10-10', status: 'PUBLISHED', submissions: (seed*2) % 60, max: 60 },
    ];
    setActiveAssignments(generated);
  }, [campus, branch, section]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <FileText className="mr-2 text-amber-500" /> Assignments Hub
        </h3>
        <button className="bg-amber-500 text-gray-900 font-medium px-4 py-2 rounded-md hover:bg-amber-400 flex items-center transition-colors" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} className="mr-1" /> Create Assignment
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Campus</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 py-2 shadow-sm focus:ring-amber-500 focus:border-amber-500"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
          >
            {CAMPUSES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Branch</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 py-2 shadow-sm focus:ring-amber-500 focus:border-amber-500"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            {currentBranches.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Section</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 py-2 shadow-sm focus:ring-amber-500 focus:border-amber-500"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            {SECTIONS.map(s => <option key={s} value={s}>Section {s}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
            {activeAssignments.map((assignment) => (
              <tr key={assignment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
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
                  <button className="text-amber-600 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 transition-colors" title="Grade">
                    <MessageSquare size={18} />
                  </button>
                  <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors" title="Download Materials">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 transform transition-all">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create Assignment for {branch} (Sec {section})</h3>
            <div className="space-y-4 mb-6">
              <input type="text" placeholder="Assignment Title" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-white" />
              <input type="date" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-white" />
            </div>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-amber-500 text-gray-900 font-medium rounded-md hover:bg-amber-400"
              >
                Save Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
