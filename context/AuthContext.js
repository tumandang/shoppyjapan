// contexts/AuthContext.js
"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '@/lib/axios';

// nak masukkan data ( user , auth )
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [marketplaces, setMarketplaces] = useState([]);
  
  useEffect(() => {
    checkAuth();
    fetchMarketplaces();
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
const getRequestById = async (id) => {
  try {
    console.log("Fetching request ID:", id);
    const response = await axiosInstance.get(`/request/${id}`);
    console.log("Response:", response.data);
    return response.data; 
  } catch (error) {
    console.error(
      "Error fetching request by ID:",
      error.response?.data || error.message
    );
    throw new Error("Request not found or you are not authorized");
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
      } 
      else {
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

  const fetchMarketplaces = async () => {
    try {
      const response = await axiosInstance.get('/marketplace'); 
      if (response.data.status) {
        setMarketplaces(response.data.data || response.data.marketplaces || response.data); 
      }
    } catch (error) {
      console.error('Error fetching marketplaces:', error);
    }
  };



  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, checkAuth ,editprofile,requestlist,orderlist,getRequestById, marketplaces, fetchMarketplaces}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);