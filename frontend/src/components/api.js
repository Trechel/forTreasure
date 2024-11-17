// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your base URL
});

// Request interceptor
api.interceptors.request.use((config) => {
  // You can manipulate the request config here if needed
  console.log(`Making request to: ${config.url}`); // Log the request URL
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`Request successful: ${response.config.url}`, response);
    return response.data; // Return only the data part of the response
  },
  async (error) => {
    const originalRequest = error.config;

    // Log and handle the error response
    console.error(`Request failed for ${originalRequest.url} with status ${error.response?.status}:`, error);
    return Promise.reject(error); // Reject the promise with the error
  }
);

export default api;
