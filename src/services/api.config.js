import axios from "axios";
import { supabase } from "@/services/supabaseClient";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: Infinity,
});

// Add auth token to every request
axiosClient.interceptors.request.use(async (config) => {
  const { data } = await supabase.auth.getSession();
  const token = data?.session?.access_token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle errors globally
// axiosClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.log("Unauthorized - redirect to login");
//       window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   },
// );

export default axiosClient;
