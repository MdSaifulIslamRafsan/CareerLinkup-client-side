
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="max-w-[1440px] w-[95%] lg:w-11/12 mx-auto">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          
            <h3 className="flex gap-2">
              <img  src={logo} alt="" />
              <span className="text-base md:text-lg bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-bold">
                CareerLinkup
              </span>
            </h3>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
            Empowering your career journey, CareerLinkup is your ultimate destination for connecting with opportunities that align with your aspirations. 
            </p>
            <p className="mt-4 text-sm text-gray-800">
            Dive into a world of possibilities as we bridge the gap between talent and employers, guiding you towards your professional milestones with precision and support.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +850-123-5021
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:careerlinkup08@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              careerlinkup08@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
               Kamlapur, Dhaka
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex gap-2 my-4">
           
            <Link to="/" className="inline-flex items-center justify-center h-8 w-8 border border-gray-400 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
            <FaFacebook className="w-4 h-4 fill-current" />

            </Link>
            <Link to="/" className="inline-flex items-center justify-center h-8 w-8 border border-gray-400 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
            <FaTwitter className="w-4 h-4 fill-current" />
            </Link>
            <Link to="/" className="inline-flex items-center justify-center h-8 w-8 border border-gray-400 rounded-full mr-1 hover:text-red-400 hover:border-red-400">
            <FaInstagram className="w-4 h-4 fill-current" />
            </Link>
            <Link to="/" className="inline-flex items-center justify-center h-8 w-8 border border-gray-400 rounded-full mr-1 hover:text-gray-900 hover:border-gray-900">
            <FaGithub className="w-4 h-4 fill-current" />
            </Link>
            <Link to="/" className="inline-flex items-center justify-center h-8 w-8 border border-gray-400 rounded-full hover:text-red-600 hover:border-red-600">
            <FaYoutube className="w-4 h-4 fill-current" />
            </Link>
          </div>
          <div className="flex gap-4 sm:flex-col">
                <Link to="/" target="_blank">
                  <img
                    className="w-48 h-12"
                    src="https://i.ibb.co/wKDPz6J/Group-104.pnghttps://i.ibb.co/wKDPz6J/Group-104.png"
                    alt=""
                  />
                </Link>
                <Link to="/" target="_blank">
                  <img
                    className="w-48 h-12"
                    src="https://i.ibb.co/6rZ8jsR/app-store-apple-b35643c5.webp"
                    alt=""
                  />
                </Link>
              </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 CareerLinkup. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
