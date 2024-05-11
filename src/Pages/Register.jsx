import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerImg from "../assets/register.json";
import useAuth from "../Hook/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
const Register = () => {
  const [isPassword, setIsPassword] = useState(true);

    const {createAccount} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
        const {
          register,
          handleSubmit,
          reset
        } = useForm();

        const onSubmit = (data) => {
            reset();
            const {name , photo , email , password} = data;
            
            if (!/^[a-zA-Z\-\'\s]+$/.test(name)){
                return Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Please enter a valid name containing only letters, spaces, hyphens, and apostrophes",
                });
              }
              if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
                return Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Invalid email format. Please use the format: example@example.com",
                });
              }
              if (!/^https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^/?]+)+\.(?:jpg|jpeg|png|gif)$/.test(photo)){
                return Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Invalid URL format. Please ensure the URL starts with 'http://' or 'https://' and ends with a supported image file extension (.jpg, .jpeg, .png, .gif).",
                });
              }
              if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
                return Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text:  "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
                });
              }
              createAccount(email , password)
              .then(() => {
                navigate(location?.state ? location?.state : '/' )
                updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo,
                })
                Swal.fire({
                  title: "Good job!",
                  text:  "Congratulations! Your account has been successfully created.",
                  icon: "success"
                });
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
    <div className="h-full">
      {/* Container */}
      <div className="mx-auto">
        <div className="flex justify-center ">
          {/* Row */}
          <div className="w-full  lg:flex">
            {/* Col */}
            <div
              className="h-auto bg-cover rounded-lg"
              
            />
             <Lottie className="lg:w-1/2" animationData={registerImg} loop={true} />
            {/* Col */}
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg ">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <form  onSubmit={handleSubmit(onSubmit)} className="px-3 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-3 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("name")}
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="photo"
                  >
                    Photo Url
                  </label>
                  <input
                    className="w-full px-3 py-3 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="photo"
                    {...register("photo")}
                    name="photo"
                    type="text"
                    placeholder="Photo Url"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-3 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    {...register("email")}
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-3 py-3 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      {...register("password")}
                      name="password"
                      type={isPassword ?  "password" : 'text'}
                      placeholder="password"
                    />
                    <span
                      className="absolute text-xl cursor-pointer right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setIsPassword(!isPassword)}
                    >
                      {isPassword ? <FaEye /> :  <FaEyeSlash />}
                    </span>
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="rounded-lg border-2 border-blue-500 w-full py-3 text-sm md:text-xl text-blue-500 duration-200 hover:bg-blue-500 hover:text-white "
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <p className="inline-block text-white text-sm align-baseline">
                    Already have an account? 
                     <Link
                      className=" text-blue-500 ml-3 hover:text-blue-800"
                      to={"/login"}
                    >
                       Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
