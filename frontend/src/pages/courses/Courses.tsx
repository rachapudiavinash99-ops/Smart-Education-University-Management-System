import React, { useState } from 'react';
import { BookOpen, Search, Plus, Edit, Trash2 } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [courses] = useState([
    { id: 'CS101', name: 'B.Tech Computer Science Engineering', department: 'Engineering', credits: 160, duration: '4 Years' },
    { id: 'ME201', name: 'B.Tech Mechanical Engineering', department: 'Engineering', credits: 160, duration: '4 Years' },
    { id: 'EE301', name: 'B.Tech Electrical Engineering', department: 'Engineering', credits: 160, duration: '4 Years' },
    { id: 'MBA101', name: 'Master of Business Administration (Finance)', department: 'Management', credits: 80, duration: '2 Years' },
    { id: 'BBA201', name: 'Bachelor of Business Administration', department: 'Management', credits: 120, duration: '3 Years' },
    { id: 'BCA101', name: 'Bachelor of Computer Applications', department: 'Computer Applications', credits: 120, duration: '3 Years' },
    { id: 'MCA201', name: 'Master of Computer Applications', department: 'Computer Applications', credits: 80, duration: '2 Years' },
    { id: 'BSC101', name: 'B.Sc Physics (Hons)', department: 'Sciences', credits: 120, duration: '3 Years' },
  ]);

  const departments = ['All', 'Engineering', 'Management', 'Computer Applications', 'Sciences'];
  
  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(c => c.department === activeTab);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <BookOpen className="mr-2 text-amber-500" /> Courses & Curriculum
        </h3>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="bg-amber-500 text-gray-900 font-medium px-4 py-2 rounded-md hover:bg-amber-400 flex items-center shadow-sm transition-colors">
            <Plus size={18} className="mr-1" /> Create Course
          </button>
        </div>
      </div>
      
      {/* Department Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {departments.map(dept => (
          <button
            key={dept}
            onClick={() => setActiveTab(dept)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === dept 
                ? 'bg-gray-900 text-amber-500 shadow-md border-2 border-amber-500 dark:bg-black' 
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Credits</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">{course.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 font-medium">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs">{course.department}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{course.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white font-semibold">{course.credits}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button className="text-amber-600 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 transition-colors">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredCourses.length === 0 && (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            No courses found in this department.
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
