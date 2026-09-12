import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const sectionA = [
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
];

const sectionB = [
  { id: 21, name: 'Aditi Sharma', roll: 'CS20-021', status: 'PRESENT' },
  { id: 22, name: 'Varun Dhawan', roll: 'CS20-022', status: 'ABSENT' },
  { id: 23, name: 'Simran Kaur', roll: 'CS20-023', status: 'PRESENT' },
  { id: 24, name: 'Aakash Singh', roll: 'CS20-024', status: 'PRESENT' },
  { id: 25, name: 'Deepika Padukone', roll: 'CS20-025', status: 'LATE' },
  { id: 26, name: 'Ranbir Kapoor', roll: 'CS20-026', status: 'PRESENT' },
  { id: 27, name: 'Alia Bhatt', roll: 'CS20-027', status: 'PRESENT' },
  { id: 28, name: 'Kartik Aaryan', roll: 'CS20-028', status: 'ABSENT' },
  { id: 29, name: 'Kriti Sanon', roll: 'CS20-029', status: 'PRESENT' },
  { id: 30, name: 'Sushant Singh', roll: 'CS20-030', status: 'PRESENT' },
  { id: 31, name: 'Kiara Advani', roll: 'CS20-031', status: 'PRESENT' },
  { id: 32, name: 'Tiger Shroff', roll: 'CS20-032', status: 'LATE' },
  { id: 33, name: 'Shraddha Kapoor', roll: 'CS20-033', status: 'PRESENT' },
  { id: 34, name: 'Ayushmann Khurrana', roll: 'CS20-034', status: 'PRESENT' },
  { id: 35, name: 'Taapsee Pannu', roll: 'CS20-035', status: 'PRESENT' },
  { id: 36, name: 'Vicky Kaushal', roll: 'CS20-036', status: 'ABSENT' },
  { id: 37, name: 'Katrina Kaif', roll: 'CS20-037', status: 'PRESENT' },
  { id: 38, name: 'Salman Khan', roll: 'CS20-038', status: 'LATE' },
  { id: 39, name: 'Shahrukh Khan', roll: 'CS20-039', status: 'PRESENT' },
  { id: 40, name: 'Aamir Khan', roll: 'CS20-040', status: 'PRESENT' },
];

const Attendance = () => {
  const [currentSection, setCurrentSection] = useState('A');
  const [studentsA, setStudentsA] = useState(sectionA);
  const [studentsB, setStudentsB] = useState(sectionB);

  const activeStudents = currentSection === 'A' ? studentsA : studentsB;
  const setActiveStudents = currentSection === 'A' ? setStudentsA : setStudentsB;

  const markAttendance = (id: number, status: string) => {
    setActiveStudents(activeStudents.map(s => s.id === id ? { ...s, status } : s));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Record Attendance</h3>
        <div className="flex space-x-2">
          <select 
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2"
            value={currentSection}
            onChange={(e) => setCurrentSection(e.target.value)}
          >
            <option value="A">CS101 - Intro to Programming (Section A)</option>
            <option value="B">CS102 - Data Structures (Section B)</option>
          </select>
          <input type="date" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white">Section {currentSection} Roster (20 Students)</h4>
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
              const monthlyAttendance = 60 + (student.id * 7 % 40); // Generate deterministic pseudo-random %
              
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
              <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
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
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={downloadReport} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                    Download
                  </button>
                </td>
              </tr>
            )})}
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
