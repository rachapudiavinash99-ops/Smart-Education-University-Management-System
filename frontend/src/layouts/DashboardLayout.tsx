import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, LogOut, Building2, CalendarCheck, FileText, Award, CreditCard, Server, Briefcase, Bell, Shield } from 'lucide-react';

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Clear tokens
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Smart Univ</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link to="/dashboard" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/campuses" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <Building2 size={20} />
            <span>Campuses</span>
          </Link>
          <Link to="/dashboard/students" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <Users size={20} />
            <span>Students</span>
          </Link>
          <Link to="/dashboard/attendance" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <CalendarCheck size={20} />
            <span>Attendance</span>
          </Link>
          <Link to="/dashboard/assignments" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <FileText size={20} />
            <span>Assignments</span>
          </Link>
          <Link to="/dashboard/examinations" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <Award size={20} />
            <span>Examinations</span>
          </Link>
          <Link to="/dashboard/fees" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <CreditCard size={20} />
            <span>Fees & Payments</span>
          </Link>
          <Link to="/dashboard/infrastructure" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <Server size={20} />
            <span>Infrastructure</span>
          </Link>
          <Link to="/dashboard/placements" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <Briefcase size={20} />
            <span>Placements & Jobs</span>
          </Link>
          <Link to="/dashboard/communications" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <Bell size={20} />
            <span>Communications</span>
          </Link>
          <Link to="/dashboard/security" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <Shield size={20} />
            <span>Security & Audit</span>
          </Link>
          <Link to="/dashboard/courses" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
            <BookOpen size={20} />
            <span>Courses</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button onClick={handleLogout} className="flex items-center space-x-2 text-red-600 hover:text-red-700 w-full p-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-800 shadow-sm z-10 h-16 flex items-center px-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Admin Portal</h2>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
