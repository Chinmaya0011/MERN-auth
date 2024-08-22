import React, { createContext } from 'react';
import axios from 'axios';

// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const userLogin = async (email, password) => {
    try {
      await axios.post('http://localhost:3000/auth/login', { email, password });
      window.location.href = '/'; // Navigate to the home page
    } catch (err) {
      alert('Error while logging in');
    }
  };

  const userSignUp = async (name, email, password) => {
    try {
      await axios.post('http://localhost:3000/auth/signup', { name, email, password });
      alert('Signup successful');
    } catch (err) {
      alert('Error while signing up');
    }
  };

  return (
    <AppContext.Provider value={{ userLogin, userSignUp }}>
      {children}
    </AppContext.Provider>
  );
};
