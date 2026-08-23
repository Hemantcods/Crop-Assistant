import axios from 'axios';

// Base Axios instance ready for live backend deployment
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.cropcare.ag/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor to attach JWT token when available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('cropcare_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Mock helper to simulate network latency
export const simulateNetworkDelay = (ms = 400) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default apiClient;
