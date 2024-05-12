import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Lottie from "lottie-react";
import login from "../assets/login.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const Login = () => {
    const {handleGoogleLogin , loginAccount} = useAuth();
    
  const [isPassword, setIsPassword] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
    reset();
    const {email , password} = data;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email format. Please use the format: example@example.com",
        });
      }
      if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text:  "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
        });
      }
    loginAccount(email , password)
    .then(() => {
        navigate(location?.state ? location?.state : '/' );
        Swal.fire({
            title: "Good job!",
            text:  "You've successfully logged in. Let's get started!",
            icon: "success"
          });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });

}

  return (
    <>
      <div className=" lg:flex bg-base-200 rounded-lg shadow-lg overflow-hidden mx-auto">
        <div className="lg:w-1/2 bg-cover">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h3 className="text-center pb-5">
            <img className="mx-auto h-10" src={logo} alt="" />
            <span className="text-base md:text-3xl pb-5 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-bold">
              CareerLinkup
            </span>
          </h3>
          <p className="text-xl pb-3  text-center">
            Welcome back!
          </p>
          <button onClick={()=>handleGoogleLogin(navigate , location)} className="w-full py-3 flex items-center justify-center rounded-lg border-2 border-blue-500  text-sm md:text-xl text-blue-500 duration-200 hover:bg-blue-500 hover:text-white">
            <div className="bg-white p-2 rounded-full">
              <svg className="w-4" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path
                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
            <span className="ml-4">Sign Up with Google</span>
          </button>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b border-neutral w-1/5 lg:w-1/4" />
            <p className="text-xs text-center  uppercase">
              or login with email
            </p>
            <span className="border-b border-neutral w-1/5 lg:w-1/4" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="focus:outline-none focus:shadow-outline border border-gray-300 rounded py-3 px-4 block w-full appearance-none"
                type="email"
                {...register("email")}
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mt-4">
              <div className="flex  justify-between">
                <label className="block  text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" className="text-xs ">
                  Forget Password?
                </a>
              </div>
              <div className="relative">
              <input
                className="focus:outline-none focus:shadow-outline border border-gray-300 rounded py-3 px-4 block w-full appearance-none"
                type={isPassword ?  "password" : 'text'}
                placeholder="password"
                {...register("password")}
                name="password"
              />
              <span className="absolute text-xl cursor-pointer right-4 top-1/2 -translate-y-1/2" onClick={() => setIsPassword(!isPassword)}>
              {isPassword ? <FaEye /> :  <FaEyeSlash />}
              </span>
              </div>
            </div>
            <div className="mt-8">
              <button className="rounded-lg border-2 border-blue-500 w-full py-3 text-sm md:text-xl text-blue-500 duration-200 hover:bg-blue-500 hover:text-white">
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b border-neutral w-1/5 md:w-1/4" />
            <Link to="/register" className="text-xs  uppercase">
              or sign up
            </Link>
            <span className="border-b border-neutral w-1/5 md:w-1/4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
