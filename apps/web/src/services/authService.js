import { simulateNetworkDelay } from './apiClient';
import { MOCK_USER } from '../data/mockData';

export const authService = {
  async requestOtp(phone) {
    await simulateNetworkDelay(500);
    if (!phone || phone.length < 10) {
      throw new Error('Please enter a valid 10-digit mobile number.');
    }
    return {
      success: true,
      phone,
      otp: "1234", // Demo OTP
      message: "Verification code sent successfully to +91 " + phone,
    };
  },

  async verifyOtp(phone, otp) {
    await simulateNetworkDelay(600);
    if (otp === "1234" || otp.length === 4) {
      const user = { ...MOCK_USER, phone };
      localStorage.setItem('cropcare_auth_token', 'mock-jwt-token-farmer-01');
      localStorage.setItem('cropcare_user', JSON.stringify(user));
      return { success: true, user, token: 'mock-jwt-token-farmer-01' };
    }
    throw new Error('Invalid OTP. Please use demo code 1234.');
  },

  async loginWithGoogle() {
    await simulateNetworkDelay(700);
    const user = { ...MOCK_USER, email: 'sagar.google@gmail.com' };
    localStorage.setItem('cropcare_auth_token', 'mock-google-token-farmer-01');
    localStorage.setItem('cropcare_user', JSON.stringify(user));
    return { success: true, user, token: 'mock-google-token-farmer-01' };
  },

  async getCurrentUser() {
    const saved = localStorage.getItem('cropcare_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return MOCK_USER;
      }
    }
    return MOCK_USER;
  },

  async updateProfile(updates) {
    await simulateNetworkDelay(400);
    const currentUser = await this.getCurrentUser();
    const updated = { ...currentUser, ...updates };
    localStorage.setItem('cropcare_user', JSON.stringify(updated));
    return updated;
  },

  async logout() {
    await simulateNetworkDelay(200);
    localStorage.removeItem('cropcare_auth_token');
    localStorage.removeItem('cropcare_user');
    return { success: true };
  }
};
