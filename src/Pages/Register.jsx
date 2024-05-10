import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import register from "../assets/register.json";
const Register = () => {
  const [isPassword, setIsPassword] = useState(true);
  return (
    <div className="h-full">
      {/* Container */}
      <div className="mx-auto">
        <div className="flex justify-center py-12">
          {/* Row */}
          <div className="w-full  lg:flex">
            {/* Col */}
            <div
              className="h-auto bg-cover rounded-lg"
              
            />
             <Lottie className="lg:w-1/2" animationData={register} loop={true} />
            {/* Col */}
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg ">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <form className="px-3 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-3 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                      className="w-full px-3 py-3 text-sm leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
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
                    className="w-full px-4 py-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none text-sm md:text-xl focus:shadow-outline"
                    type="button"
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