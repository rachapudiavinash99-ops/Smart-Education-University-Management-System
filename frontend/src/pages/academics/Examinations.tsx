import React, { useState, useEffect } from 'react';
import { Award, Plus, FileText, CheckCircle } from 'lucide-react';

const CAMPUSES = ['Main Campus', 'North Campus', 'Chinni Education Unit', 'Commerce & Arts Wing'];
const ENG_BRANCHES = ['Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics & Comm'];
const COMM_BRANCHES = ['B.Com (Hons)', 'BBA', 'BA English', 'BA Economics', 'B.Sc Finance'];
const SECTIONS = ['A', 'B', 'C', 'D'];

export default function Examinations() {
  const [campus, setCampus] = useState(CAMPUSES[0]);
  const currentBranches = campus === 'Commerce & Arts Wing' ? COMM_BRANCHES : ENG_BRANCHES;
  
  const [branch, setBranch] = useState(currentBranches[0]);
  const [section, setSection] = useState(SECTIONS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeExams, setActiveExams] = useState<any[]>([]);

  useEffect(() => {
    if (!currentBranches.includes(branch)) {
      setBranch(currentBranches[0]);
    }
  }, [campus]);

  useEffect(() => {
    // Generate exams specific to the branch and campus
    const seed = campus.length + branch.length + section.charCodeAt(0);
    const branchCode = branch.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    
    const generated = [
      { id: 1, name: `${branchCode} B.Tech Even Semester Finals`, type: 'SEMESTER', semester: 'Even Semester 2026', status: 'Draft' },
      { id: 2, name: `${branchCode} Internal Assessment 1 (Sec ${section})`, type: 'INTERNAL', semester: 'Even Semester 2026', status: 'Published' },
      { id: 3, name: `${branchCode} Internal Assessment 2 (Sec ${section})`, type: 'INTERNAL', semester: 'Even Semester 2026', status: 'Draft' },
      { id: 4, name: `${branch} Midterms`, type: 'MIDTERM', semester: 'Even Semester 2026', status: 'Published' },
      { id: 5, name: `${campus} Entrance Test (UET)`, type: 'ENTRANCE', semester: 'Fall 2026 Intake', status: 'Published' },
      { id: 6, name: `${branchCode} Final Year Practicals`, type: 'PRACTICAL', semester: 'Even Semester 2026', status: 'Published' },
    ];
    setActiveExams(generated);
  }, [campus, branch, section]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <Award className="mr-2 text-amber-500" /> Examinations Hub
        </h3>
        <button className="bg-amber-500 text-gray-900 font-medium px-4 py-2 rounded-md hover:bg-amber-400 flex items-center transition-colors" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} className="mr-1" /> Create Exam
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Exam Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Semester</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {activeExams.map((exam) => (
              <tr key={exam.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{exam.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{exam.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{exam.semester}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${exam.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                    {exam.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button className="text-amber-600 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 transition-colors" title="Manage Schedules">
                    <FileText size={18} />
                  </button>
                  <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 transition-colors" title="Publish Results">
                    <CheckCircle size={18} />
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create Exam for {branch}</h3>
            <div className="space-y-4 mb-6">
              <input type="text" placeholder="Exam Title" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-white" />
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-white">
                <option value="INTERNAL">Internal Assessment</option>
                <option value="SEMESTER">Semester Final</option>
                <option value="PRACTICAL">Practical</option>
              </select>
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
                Save Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
