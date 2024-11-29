import axios from 'axios';

// Create an Axios instance
console.log("API Base URL:", process.env.NEXT_PUBLIC_URL_PRODUCTION);
console.log(process.env) 
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_PRODUCTION, // Replace with your API's base URL
  timeout: 10000, // Optional: set a timeout (10 seconds)
});

apiClient.defaults.withCredentials = true; // Include credentials for cross-origin requests

// Add a request interceptor to include the API key in headers
apiClient.interceptors.request.use(
  (config) => {
    // Ensure the API key is available
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (apiKey) {
      config.headers['x-api-key'] = apiKey; // Add the API key to the headers
    } else {
      console.warn('API key is missing from environment variables.');
    }
    return config;
  },
  (error) => {
    // Log the error and return it
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;