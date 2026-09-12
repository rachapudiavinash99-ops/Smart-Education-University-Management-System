import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aarav Patel', roll: 'CS20-001', status: 'PRESENT' },
    { id: 2, name: 'Priya Sharma', roll: 'CS20-002', status: 'PRESENT' },
    { id: 3, name: 'Rahul Kumar', roll: 'CS20-003', status: 'LATE' },
    { id: 4, name: 'Ananya Singh', roll: 'CS20-004', status: 'PRESENT' },
    { id: 5, name: 'Rohan Gupta', roll: 'CS20-005', status: 'PRESENT' },
    { id: 6, name: 'Sneha Desai', roll: 'CS20-006', status: 'ABSENT' },
    { id: 7, name: 'Vikram Malhotra', roll: 'CS20-007', status: 'PRESENT' },
    { id: 8, name: 'Neha Reddy', roll: 'CS20-008', status: 'PRESENT' },
    { id: 9, name: 'Aditya Joshi', roll: 'CS20-009', status: 'PRESENT' },
    { id: 10, name: 'Kavya Iyer', roll: 'CS20-010', status: 'PRESENT' },
    { id: 11, name: 'Karan Verma', roll: 'CS20-011', status: 'LATE' },
    { id: 12, name: 'Pooja Nair', roll: 'CS20-012', status: 'PRESENT' },
    { id: 13, name: 'Arjun Rao', roll: 'CS20-013', status: 'PRESENT' },
    { id: 14, name: 'Riya Das', roll: 'CS20-014', status: 'ABSENT' },
    { id: 15, name: 'Sidharth Menon', roll: 'CS20-015', status: 'PRESENT' },
    { id: 16, name: 'Nisha Pillai', roll: 'CS20-016', status: 'PRESENT' },
    { id: 17, name: 'Tarun Bhatia', roll: 'CS20-017', status: 'PRESENT' },
    { id: 18, name: 'Meera Rajput', roll: 'CS20-018', status: 'LATE' },
    { id: 19, name: 'Kunal Sen', roll: 'CS20-019', status: 'PRESENT' },
    { id: 20, name: 'Ishita Agarwal', roll: 'CS20-020', status: 'PRESENT' },
  ]);

  const markAttendance = (id: number, status: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, status } : s));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Record Attendance</h3>
        <div className="flex space-x-2">
          <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2">
            <option>CS101 - Intro to Programming (Section A)</option>
            <option>CS102 - Data Structures (Section B)</option>
          </select>
          <input type="date" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Roll No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mark Status</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{student.roll}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-center space-x-2">
                  <button 
                    onClick={() => markAttendance(student.id, 'PRESENT')}
                    className={`p-2 rounded-full ${student.status === 'PRESENT' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-green-500'}`}
                  >
                    <CheckCircle size={24} />
                  </button>
                  <button 
                    onClick={() => markAttendance(student.id, 'ABSENT')}
                    className={`p-2 rounded-full ${student.status === 'ABSENT' ? 'bg-red-100 text-red-600' : 'text-gray-400 hover:text-red-500'}`}
                  >
                    <XCircle size={24} />
                  </button>
                  <button 
                    onClick={() => markAttendance(student.id, 'LATE')}
                    className={`p-2 rounded-full ${student.status === 'LATE' ? 'bg-yellow-100 text-yellow-600' : 'text-gray-400 hover:text-yellow-500'}`}
                  >
                    <Clock size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">Save Attendance</button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
