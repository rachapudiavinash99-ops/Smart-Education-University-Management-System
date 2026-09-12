import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, LogOut, Building2, CalendarCheck, FileText, Award, CreditCard, Server, Briefcase, Bell, Shield } from 'lucide-react';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // TODO: Clear tokens
    navigate('/login');
  };

  const navLinks = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/dashboard/campuses', icon: Building2, label: 'Campuses' },
    { path: '/dashboard/students', icon: Users, label: 'Students' },
    { path: '/dashboard/attendance', icon: CalendarCheck, label: 'Attendance' },
    { path: '/dashboard/assignments', icon: FileText, label: 'Assignments' },
    { path: '/dashboard/examinations', icon: Award, label: 'Examinations' },
    { path: '/dashboard/fees', icon: CreditCard, label: 'Fees & Payments' },
    { path: '/dashboard/infrastructure', icon: Server, label: 'Infrastructure' },
    { path: '/dashboard/placements', icon: Briefcase, label: 'Placements & Jobs' },
    { path: '/dashboard/communications', icon: Bell, label: 'Communications' },
    { path: '/dashboard/security', icon: Shield, label: 'Security & Audit' },
    { path: '/dashboard/courses', icon: BookOpen, label: 'Courses' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Animated Sidebar - Charcoal Black with Gold/Amber Accents */}
      <aside className="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 shadow-2xl flex flex-col transition-all duration-300 border-r border-gray-800">
        <div className="p-5 border-b border-gray-800 flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg border-2 border-amber-500 p-1">
            <img src="/logo.png" alt="University Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-xl font-bold tracking-wider text-white">Univ<span className="font-light text-amber-500">Manage</span></h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:translate-x-2 ${
                  isActive 
                    ? 'bg-gradient-to-r from-amber-500/10 to-transparent shadow-lg border-l-4 border-amber-500 text-amber-400 font-semibold' 
                    : 'hover:bg-gray-800 text-gray-400 hover:text-amber-300'
                }`}
              >
                <Icon size={20} className={`${isActive ? 'animate-bounce text-amber-500' : ''}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout} 
            className="flex items-center space-x-3 text-red-400 hover:text-red-300 w-full p-3 rounded-lg hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-10 h-16 flex items-center px-8 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white flex items-center">
            Admin <span className="text-amber-600 dark:text-amber-500 ml-2 animate-pulse">Portal</span>
          </h2>
        </header>
        
        {/* Animated Page Content Wrapper */}
        <div className="flex-1 overflow-auto p-8 relative">
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 pointer-events-none transition-colors duration-500"></div>
          
          <div className="relative z-10 animate-fade-in-up transition-all duration-500">
            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fade-in-up {
                animation: fadeInUp 0.5s ease-out forwards;
              }
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.2);
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(245, 158, 11, 0.3); /* Amber 500 */
                border-radius: 3px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(245, 158, 11, 0.6);
              }
            `}</style>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
