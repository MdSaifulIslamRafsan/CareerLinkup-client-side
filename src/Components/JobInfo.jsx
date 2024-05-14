import CountUp, { useCountUp } from "react-countup";
import { FaAddressCard, FaAward } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";

const JobInfo = () => {
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (

<div className="relative  my-10 bg-gradient-to-r from-purple-600 to-blue-600 py-20 rounded-lg text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative w-full z-10 px-10 h-full text-center">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 ">
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-blue-400">
        <MdOutlinePersonSearch className="w-12 h-12" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Available Jobs</h3>
          <div className="content text-3xl">
            <CountUp end={12768} enableScrollSpy />
          </div>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Employees</h3>
          <div className="content text-3xl">
            <CountUp end={5078} enableScrollSpy />
          </div>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-indigo-400">
          <FaAddressCard className="h-12 w-12 text-white" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">CV/Resume</h3>
          <div className="content text-3xl">
            <CountUp end={35580} enableScrollSpy />
          </div>
        </div>
      </div>
      <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div className="p-4 bg-red-400">
        <FaAward className="w-12 h-12" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">Campaigns</h3>
          <div className="content text-3xl">
            <CountUp  end={2478} enableScrollSpy />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




   
  );
};

export default JobInfo;
