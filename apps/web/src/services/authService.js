import apiClient, { simulateNetworkDelay } from './apiClient';
import { MOCK_USER } from '../data/mockData';

const formatUserData = (data) => {
  if (!data) return null;
  return {
    ...MOCK_USER,
    id: data.id || MOCK_USER.id,
    name: data.name || MOCK_USER.name,
    fullName: data.name || MOCK_USER.fullName,
    email: data.email || MOCK_USER.email,
    phone: data.phone || MOCK_USER.phone,
    language: data.language || MOCK_USER.language || 'en',
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
};

export const authService = {
  // Real backend email/password sign up
  async signup(input) {
    const payload = {
      name: input.name?.trim(),
      email: input.email?.trim().toLowerCase(),
      password: input.password,
      phone: input.phone?.trim() || undefined,
      language: input.language?.trim() || 'en',
    };

    const response = await apiClient.post('/auth/signup', payload);
    const user = formatUserData(response.data.data);
    localStorage.setItem('cropcare_user', JSON.stringify(user));
    return user;
  },

  // Real backend email/password sign in
  async signin(input) {
    const payload = {
      email: input.email?.trim().toLowerCase(),
      password: input.password,
    };

    const response = await apiClient.post('/auth/signin', payload);
    const user = formatUserData(response.data.data);
    localStorage.setItem('cropcare_user', JSON.stringify(user));
    return user;
  },

  // Initiate Google OAuth redirect
  loginWithGoogle() {
    const baseUrl = apiClient.defaults.baseURL || 'http://localhost:5000/api';
    window.location.href = `${baseUrl}/auth/google`;
  },

  // Verify current session from backend /auth/me
  async getCurrentUser() {
    try {
      const response = await apiClient.get('/auth/me');
      if (response.data && response.data.data) {
        const user = formatUserData(response.data.data);
        localStorage.setItem('cropcare_user', JSON.stringify(user));
        return user;
      }
    } catch {
      // If backend auth check fails, try cached user or null
      const saved = localStorage.getItem('cropcare_user');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return null;
        }
      }
      return null;
    }
    return null;
  },

  // Update profile in local cache / future backend extension
  async updateProfile(updates) {
    await simulateNetworkDelay(300);
    const current = (await this.getCurrentUser()) || MOCK_USER;
    const updated = { ...current, ...updates };
    localStorage.setItem('cropcare_user', JSON.stringify(updated));
    return updated;
  },

  // Real backend Refresh Tokens: POST /auth/refresh
  async refreshTokens() {
    const response = await apiClient.post('/auth/refresh');
    return response.data;
  },

  // Real backend Log out: POST /auth/logout
  async logout() {
    try {
      await apiClient.post('/auth/logout');
    } catch (err) {
      console.warn('[authService.logout] Backend logout request failed:', err.message);
    } finally {
      localStorage.removeItem('cropcare_auth_token');
      localStorage.removeItem('cropcare_user');
    }
    return { success: true };
  },

  // Demo / Phone OTP helpers
  async requestOtp(phone) {
    await simulateNetworkDelay(400);
    if (!phone || phone.length < 10) {
      throw new Error('Please enter a valid 10-digit mobile number.');
    }
    return {
      success: true,
      phone,
      otp: '1234',
      message: `Verification code sent to +91 ${phone}`,
    };
  },

  async verifyOtp(phone, otp) {
    await simulateNetworkDelay(500);
    if (otp === '1234' || otp.length === 4) {
      const user = { ...MOCK_USER, phone };
      localStorage.setItem('cropcare_user', JSON.stringify(user));
      return { success: true, user };
    }
    throw new Error('Invalid OTP code. Please use demo code 1234.');
  },
};

