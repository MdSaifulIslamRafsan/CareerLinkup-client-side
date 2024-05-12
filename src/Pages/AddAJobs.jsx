import Lottie from "lottie-react";
import AddJob from "../assets/Addjob.json";
import useAuth from "../Hook/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const AddAJobs = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="grid lg:grid-cols-2 gap-5">
      <div>
        <Lottie animationData={AddJob} loop={true} />
      </div>
      <div className=" my-12">
        <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Add a Job
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div className="space-y-2">
                <p>User Name</p>
                <p>{user?.displayName}</p>
              </div>
              <div className="space-y-2">
                <p>User Email</p>
                <p>{user?.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="job_title">
                  Job Title
                </label>
                <input
                  id="job_title"
                  name="job_title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="jobBanner">
                Job Banner Url
                </label>
                <input
                  id="jobBanner"
                  name="jobBanner"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700"> Application Deadline</label>

                <DatePicker className="border py-2 px-4 w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="category">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="border p-2 rounded-md"
                >
                  <option value="Remote">Remote</option>
                  <option value="On Site">On Site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Part-Time">Part-Time</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="maxSalary">
                Max salary
                </label>
                <input
                  id="maxSalary"
                  name="maxSalary"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="minSalary">
                  Min Salary 
                </label>
                <input
                  id="minSalary"
                  name="minSalary"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default AddAJobs;
