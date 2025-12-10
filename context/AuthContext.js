// contexts/AuthContext.js
"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '@/lib/axios';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axiosInstance.get('/profile');
        if (response.data.status) {
          setUser(response.data.user);
        }
      }
    } catch (error) {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const response = await axiosInstance.post('/login', {
      email,
      password
    });
    
    if (response.data.status) {
      // Store token in localStorage
      const token = response.data.token;
      localStorage.setItem('token', token);
      
      setUser(response.data.user);
      return response.data;
    }
    throw new Error('Login failed');
  };

  const register = async (data) => {
    const response = await axiosInstance.post('/register', data);
    return response.data;
  };

  const logout = async () => {
    try {
      await axiosInstance.post('/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);