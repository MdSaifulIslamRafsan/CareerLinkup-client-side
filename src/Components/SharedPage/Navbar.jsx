import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <details>
          <summary>Jobs</summary>
          <ul className="p-2 w-40">
            <li>
              <NavLink to={'/All-Jobs'}>All Jobs</NavLink>
            </li>
            <li>
              <NavLink to={'/Applied-Jobs'}>Applied Jobs</NavLink>
            </li>
            <li>
              <NavLink to={'/Add-A-Job'}>Add A Job</NavLink>
            </li>
            <li>
              <NavLink to={'/My-Jobs'}>My Jobs</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={'/Blogs'}>Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="">
            <img className="mx-auto" src={logo} alt="" />
         <span className="text-base md:text-lg bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-bold"> CareerLinkup</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      <Link to="/login" className="text-xl w-24 h-10 flex justify-center items-center rounded-md bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-green-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Login</Link>



        
      </div>
    </div>
  );
};

export default Navbar;
