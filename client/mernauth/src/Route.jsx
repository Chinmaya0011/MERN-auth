import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import SignUpPage from './Page/SignUpPage';
import HomePage from './Page/HomePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
