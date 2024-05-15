import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const {handleLogout} = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(res=>{
        return res
    }, async err=>{
        if(err.response.status === 401 || err.response.status === 403){
           await handleLogout();
            navigate('/login')
        }
        return Promise.reject(err);
        
    });
   return axiosSecure;
   
};

export default useAxiosSecure;