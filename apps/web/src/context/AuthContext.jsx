import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { MOCK_USER } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem('cropcare_auth_token');
        if (token) {
          const currentUser = await authService.getCurrentUser();
          setUser(currentUser);
          setIsAuthenticated(true);
        } else {
          // Default authenticated as Sagar for instant seamless experience
          setUser(MOCK_USER);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
        setUser(MOCK_USER);
        setIsAuthenticated(true);
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);

  const loginWithPhone = async (phone, otp) => {
    setIsLoading(true);
    try {
      const res = await authService.verifyOtp(phone, otp);
      setUser(res.user);
      setIsAuthenticated(true);
      return res;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const res = await authService.loginWithGoogle();
      setUser(res.user);
      setIsAuthenticated(true);
      return res;
    } finally {
      setIsLoading(false);
    }
  };

  const loginAsDemo = async () => {
    setIsLoading(true);
    try {
      setUser(MOCK_USER);
      setIsAuthenticated(true);
      localStorage.setItem('cropcare_auth_token', 'mock-jwt-token-farmer-01');
      localStorage.setItem('cropcare_user', JSON.stringify(MOCK_USER));
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (updates) => {
    const updated = await authService.updateProfile(updates);
    setUser(updated);
    return updated;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        loginWithPhone,
        loginWithGoogle,
        loginAsDemo,
        updateProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
