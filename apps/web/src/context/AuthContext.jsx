import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { MOCK_USER } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state by verifying session with backend /auth/me
  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          setIsAuthenticated(true);
        } else {
          // If no active session, default to demo farmer for frictionless UX
          setUser(MOCK_USER);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.warn('Auth initialization fallback:', err.message);
        setUser(MOCK_USER);
        setIsAuthenticated(true);
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);

  // Real backend Sign In
  const signin = async (credentials) => {
    setIsLoading(true);
    try {
      const loggedInUser = await authService.signin(credentials);
      setUser(loggedInUser);
      setIsAuthenticated(true);
      return loggedInUser;
    } finally {
      setIsLoading(false);
    }
  };

  // Real backend Sign Up
  const signup = async (userData) => {
    setIsLoading(true);
    try {
      const registeredUser = await authService.signup(userData);
      setUser(registeredUser);
      setIsAuthenticated(true);
      return registeredUser;
    } finally {
      setIsLoading(false);
    }
  };

  // Google OAuth Login
  const loginWithGoogle = () => {
    authService.loginWithGoogle();
  };

  // Mobile OTP Login
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

  // Instant Demo Farmer Login
  const loginAsDemo = async () => {
    setIsLoading(true);
    try {
      setUser(MOCK_USER);
      setIsAuthenticated(true);
      localStorage.setItem('cropcare_user', JSON.stringify(MOCK_USER));
    } finally {
      setIsLoading(false);
    }
  };

  // Profile update
  const updateProfile = async (updates) => {
    const updated = await authService.updateProfile(updates);
    setUser(updated);
    return updated;
  };

  // Logout
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
        signin,
        signup,
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

