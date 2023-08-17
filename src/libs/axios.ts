import { URL } from "@/constants";
import Axios from "axios";
import { useAuthStore } from "../store/auth";

// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? process.env.DOMAIN
//     : "http://localhost:3000";

const baseURL = URL.url;
 

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type" : "multipart/form-data"
  }
  // withCredentials: true,
});

api.interceptors.request.use((config) => {
  
    const token = useAuthStore.getState().token;

    if (config && config.headers) { 
      config.headers["x-token"] = token
    }
  
  return config;
});

export default api;