// contexts/AuthContext.js
"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '@/lib/axios';

// nak masukkan data ( user , auth )
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
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

  const orderlist = async () => {
    try {
      const token = localStorage.getItem('token');

      if(!token) {
        throw new Error('No authentication token found');
      }

      const response = await axiosInstance.get('/listorder');

      if (response.data.status) {
        return response.data.request || response.data.requests || response.data.data;
      }
      else{
        throw new Error(response.data.message || 'Failed to fetch requests');
      }
      
    }catch (error) {
      console.error('Error fetching request list:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        setUser(null);
      }
      
      throw error;
    }
  };

  const requestlist = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await axiosInstance.get('/listrequest');
      
      if (response.data.status) {
        
        return response.data.request || response.data.requests || response.data.data;
      } else {
        throw new Error(response.data.message || 'Failed to fetch requests');
      }
    } catch (error) {
      console.error('Error fetching request list:', error);
      
      
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        setUser(null);
      }
      
      throw error;
    }
  };

  const login = async (email, password) => {
    const response = await axiosInstance.post('/login', {
      email,
      password
    });
    
    if (response.data.status) {
      
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

  const editprofile = async (data) => {
    const response = await axiosInstance.put('/profileupdate', data);

    if (response.data.status) {
      const profileRes = await axiosInstance.get('/profile');
      if (profileRes.data.status) {
        setUser(profileRes.data.user);
      }
    }

    return response;
  };



  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, checkAuth ,editprofile,requestlist,orderlist }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);