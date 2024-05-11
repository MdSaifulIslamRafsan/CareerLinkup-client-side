import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../Hook/useAuth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, handleLogout } = useAuth();

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
                    <NavLink to={"/All-Jobs"}>All Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Applied-Jobs"}>Applied Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/Add-A-Job"}>Add A Job</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/My-Jobs"}>My Jobs</NavLink>
                  </li>
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
            <NavLink to={"/All-Jobs"}>All Jobs</NavLink>
          </li>
          <li>
            <NavLink to={"/Applied-Jobs"}>Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to={"/Add-A-Job"}>Add A Job</NavLink>
          </li>
          <li>
            <NavLink to={"/My-Jobs"}>My Jobs</NavLink>
          </li>
          <li>
            <NavLink to={"/Blogs"}>Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
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
