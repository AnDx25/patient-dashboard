import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Dashboard from './pages/Dashboard/Dashboard';

const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('loggedInPatient');
  return isLoggedIn ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router basename="/patient-dashboard">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
