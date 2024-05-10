import Lottie from "lottie-react";
import { useRef } from "react";
import spinner from "../assets/spinner.json"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , loader} = useRef();
    const location = useLocation();
    
    if(loader){
        return  <div className="grid place-content-center h-screen">
        <Lottie className="h-40 w-40" animationData={spinner} loop={true} />
      </div>
    }
    if(user){
        return children;
    }

   return <Navigate state={location?.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;