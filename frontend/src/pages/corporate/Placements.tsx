import React, { useState } from 'react';
import { Briefcase, Building, MapPin, DollarSign, Search } from 'lucide-react';

const Placements = () => {
  const [jobs, setJobs] = useState([
    { id: 1, company: 'Google', role: 'Software Engineer', type: 'Full Time', location: 'Bangalore, India', ctc: '25 LPA', deadline: '2024-03-15' },
    { id: 2, company: 'Microsoft', role: 'SDE Intern', type: 'Internship', location: 'Hyderabad, India', ctc: '1.5 Lakh/mo', deadline: '2024-04-01' },
    { id: 3, company: 'Amazon', role: 'AWS Cloud Support', type: 'Full Time', location: 'Pune, India', ctc: '18 LPA', deadline: '2024-02-28' },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <Briefcase className="mr-2" /> Placement & Job Board
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search jobs or companies..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h4>
                <div className="flex items-center text-blue-600 dark:text-blue-400 mt-1 font-medium">
                  <Building size={16} className="mr-1" /> {job.company}
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-semibold rounded-full">
                {job.type}
              </span>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <MapPin size={16} className="mr-2" /> {job.location}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <DollarSign size={16} className="mr-2" /> {job.ctc}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">Apply by: {job.deadline}</span>
              <button className="bg-gray-900 hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded font-medium text-sm transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placements;
