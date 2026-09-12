import React from 'react';
import { BookOpen, Search, Plus } from 'lucide-react';

const Courses = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <BookOpen className="mr-2" /> Courses & Curriculum
        </h3>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
            <Plus size={18} className="mr-1" /> Create Course
          </button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-8 text-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
        <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium">Course Management Module</p>
        <p className="mt-2 text-sm">Design syllabi, allocate faculty credits, and configure grading rubrics here.</p>
      </div>
    </div>
  );
};

export default Courses;
