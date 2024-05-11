import Lottie from "lottie-react";
import spinner from "../assets/spinner.json"
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({children}) => {
  const location = useLocation();
    const {user , loader} = useAuth();
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