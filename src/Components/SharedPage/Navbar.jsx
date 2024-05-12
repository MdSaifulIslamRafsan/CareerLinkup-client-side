import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../Hook/useAuth";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, handleLogout } = useAuth();

  const [isDark , setDark] = useState(localStorage.getItem('theme') || "light")


    useEffect(()=>{
      localStorage.setItem('theme', isDark);
      const getLCItem = localStorage.getItem("theme");
      document.querySelector('html').setAttribute('data-theme' , getLCItem)

    },[isDark])
    const darkModeHandler = () => {
      isDark === "light" ? setDark("dracula") : setDark("light");
    }
  return (
    <div className="navbar max-w-[1440px] w-[95%] lg:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <details>
                <summary>Jobs</summary>
                <ul className="p-2 w-40">
                  <li>
                    <NavLink to={"/all-jobs"}>All Jobs</NavLink>
                  </li>
                  {user && (
                    <>
                      <li>
                        <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/add-a-job"}>Add A Job</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/my-jobs"}>My Jobs</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </details>
            </li>
            <li>
              <NavLink to={"/Blogs"}>Blogs</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <img className="mx-auto" src={logo} alt="" />
          <span className="text-base md:text-lg bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-bold">
            {" "}
            CareerLinkup
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/all-Jobs"}>All Jobs</NavLink>
          </li>
          {user && (
                    <>
                      <li>
                        <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/add-a-job"}>Add A Job</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/my-jobs"}>My Jobs</NavLink>
                      </li>
                    </>
                  )}
          <li>
            <NavLink to={"/blogs"}>Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <label className="swap mr-5 swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onChange={darkModeHandler}
              type="checkbox"
              className="theme-controller"

            />

            {/* sun icon */}
           {
            isDark === 'dracula' ?  <svg className="fill-current w-10 h-10 lg:w-12 lg:h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg> :  <svg className=" fill-current w-10 h-10 lg:w-12 lg:h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
           }

         
           
          </label>
        {user && (
          <div className="avatar">
            <div className="w-10 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img id="clickable" src={user?.photoURL} />
              <Tooltip anchorSelect="#clickable" clickable place="bottom">
                <p>{user?.email}</p>
                <button
                  onClick={handleLogout}
                  className="rounded mt-4 px-5 py-2 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Logout</span>
                </button>
              </Tooltip>
            </div>
          </div>
        )}
        {!user && (
          <Link
            to="/login"
            className="text-xl w-24 h-10 flex justify-center items-center rounded-md bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
          >
            <span className="absolute bg-green-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-green-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
