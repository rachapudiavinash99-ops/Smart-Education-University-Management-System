import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Campuses from './pages/university/Campuses';
import Attendance from './pages/academics/Attendance';
import Assignments from './pages/lms/Assignments';
import Examinations from './pages/academics/Examinations';
import Fees from './pages/finance/Fees';
import InfrastructureDashboard from './pages/infrastructure/InfrastructureDashboard';
import Placements from './pages/corporate/Placements';
import Notifications from './pages/communication/Notifications';
import SecurityAudit from './pages/security/SecurityAudit';

import Students from './pages/students/Students';
import Courses from './pages/courses/Courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<Courses />} />
          <Route path="campuses" element={<Campuses />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="examinations" element={<Examinations />} />
          <Route path="fees" element={<Fees />} />
          <Route path="infrastructure" element={<InfrastructureDashboard />} />
          <Route path="placements" element={<Placements />} />
          <Route path="communications" element={<Notifications />} />
          <Route path="security" element={<SecurityAudit />} />
          {/* Add more nested routes here in the future */}
        </Route>
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
