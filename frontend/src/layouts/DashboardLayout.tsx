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
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      {/* Animated Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-600 via-purple-600 to-fuchsia-700 text-white shadow-xl flex flex-col transition-all duration-300">
        <div className="p-5 border-b border-white/20 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
            <BookOpen size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-wider">Univ<span className="font-light">Manage</span></h1>
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
                    ? 'bg-white/20 shadow-lg border-l-4 border-white font-semibold' 
                    : 'hover:bg-white/10 text-indigo-100 hover:text-white'
                }`}
              >
                <Icon size={20} className={`${isActive ? 'animate-bounce' : ''}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-white/20">
          <button 
            onClick={handleLogout} 
            className="flex items-center space-x-3 text-red-200 hover:text-white w-full p-3 rounded-lg hover:bg-red-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm z-10 h-16 flex items-center px-8 border-b border-indigo-100 dark:border-slate-700 transition-all duration-300">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 animate-pulse">
            Admin Portal
          </h2>
        </header>
        
        {/* Animated Page Content Wrapper */}
        <div className="flex-1 overflow-auto p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 opacity-50 pointer-events-none transition-colors duration-500"></div>
          
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
                background: rgba(255, 255, 255, 0.1);
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 3px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.4);
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
