import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const CAMPUSES = ['Main Campus', 'North Campus', 'Chinni Education Unit', 'Commerce & Arts Wing'];
const BRANCHES = ['Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics & Comm'];
const SECTIONS = ['A', 'B', 'C', 'D'];

const FIRST_NAMES = ['Aarav', 'Priya', 'Rahul', 'Ananya', 'Rohan', 'Sneha', 'Vikram', 'Neha', 'Aditya', 'Kavya', 'Karan', 'Pooja', 'Arjun', 'Riya', 'Sidharth', 'Nisha', 'Tarun', 'Meera', 'Kunal', 'Ishita', 'Ranbir', 'Alia', 'Kartik', 'Kriti', 'Varun', 'Deepika', 'Sushant', 'Shraddha'];
const LAST_NAMES = ['Patel', 'Sharma', 'Kumar', 'Singh', 'Gupta', 'Desai', 'Malhotra', 'Reddy', 'Joshi', 'Iyer', 'Verma', 'Nair', 'Rao', 'Das', 'Menon', 'Pillai', 'Bhatia', 'Rajput', 'Sen', 'Agarwal', 'Kapoor', 'Bhatt', 'Khanna', 'Chopra'];

export default function Attendance() {
  const [campus, setCampus] = useState(CAMPUSES[0]);
  const [branch, setBranch] = useState(BRANCHES[0]);
  const [section, setSection] = useState(SECTIONS[0]);
  
  const [activeStudents, setActiveStudents] = useState<any[]>([]);

  // Generate 20 pseudo-random unique students whenever filters change
  useEffect(() => {
    // Generate a deterministic seed based on selected strings so the names stay consistent for the same combination
    const seed = campus.length * 10 + branch.length * 5 + section.charCodeAt(0);
    const generated = [];
    for (let i = 1; i <= 20; i++) {
      const fn = FIRST_NAMES[(seed * i * 3) % FIRST_NAMES.length];
      const ln = LAST_NAMES[(seed * i * 7) % LAST_NAMES.length];
      const branchCode = branch.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
      
      generated.push({
        id: i,
        name: `${fn} ${ln}`,
        roll: `${branchCode}26-${section}${i < 10 ? '0' : ''}${i}`,
        status: (i * seed) % 7 === 0 ? 'ABSENT' : (i * seed) % 5 === 0 ? 'LATE' : 'PRESENT'
      });
    }
    setActiveStudents(generated);
  }, [campus, branch, section]);

  const markAttendance = (id: number, status: string) => {
    setActiveStudents(activeStudents.map(s => s.id === id ? { ...s, status } : s));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Record Attendance</h3>
        <input type="date" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-4 py-2 shadow-sm" defaultValue={new Date().toISOString().split('T')[0]} />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Campus</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 shadow-sm"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
          >
            {CAMPUSES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Branch</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 shadow-sm"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Section</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 shadow-sm"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            {SECTIONS.map(s => <option key={s} value={s}>Section {s}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white">
            {branch} - Section {section} Roster ({activeStudents.length} Students)
          </h4>
        </div>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Roll No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Monthly %</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mark Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {activeStudents.map((student) => {
              const monthlyAttendance = 60 + (student.id * 7 % 40);
              
              const downloadReport = () => {
                const csvContent = "data:text/csv;charset=utf-8,Date,Status\\n2026-09-01,PRESENT\\n2026-09-02,PRESENT\\n2026-09-03,ABSENT\\n2026-09-04,LATE\\n";
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", `${student.name.replace(' ', '_')}_Monthly_Attendance.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              };

              return (
              <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{student.roll}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-medium">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${monthlyAttendance >= 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {monthlyAttendance}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-center space-x-2">
                  <button 
                    onClick={() => markAttendance(student.id, 'PRESENT')}
                    className={`p-2 rounded-full transition-colors ${student.status === 'PRESENT' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-500'}`}
                  >
                    <CheckCircle size={24} />
                  </button>
                  <button 
                    onClick={() => markAttendance(student.id, 'ABSENT')}
                    className={`p-2 rounded-full transition-colors ${student.status === 'ABSENT' ? 'bg-red-100 text-red-600' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-500'}`}
                  >
                    <XCircle size={24} />
                  </button>
                  <button 
                    onClick={() => markAttendance(student.id, 'LATE')}
                    className={`p-2 rounded-full transition-colors ${student.status === 'LATE' ? 'bg-yellow-100 text-yellow-600' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-yellow-500'}`}
                  >
                    <Clock size={24} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={downloadReport} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                    Download
                  </button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 font-medium transition-colors shadow-sm">
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
