import Lottie from "lottie-react";
import AddJob from "../assets/Addjob.json";
import useAuth from "../Hook/useAuth";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateAJob = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, reset } = useForm();
    const job = useLoaderData();
  const {_id, jobBanner, jobTitle, category, salaryRange  , description } = job;
  const minSalary = parseInt(salaryRange.split('-').slice(0,1).toString().split('$').slice(1,2).toString());
  const maxSalary = parseInt(salaryRange.split('-').slice(1,2).toString().split('$').slice(1,2).toString());
    const onSubmit = async(data) => {
      reset();
      const { jobBanner, jobTitle, category, maxSalary, minSalary, description , applicantsNumber } =
        data;
      const updatedJob = {
        jobBanner,
        jobTitle,
        category,
        description,
        salaryRange: `$${minSalary} - $${maxSalary}`,
        jobUser: {
          name: user?.displayName,
          email: user?.email,
        },
        applicantsNumber,
        postingDate: new Date().toLocaleDateString(),
        deadline:  new Date(startDate).toLocaleDateString()
      };
      try{
          const newJobData = await axios.put(`${import.meta.env.VITE_API_URL}/job/${_id}`, updatedJob);
          if(newJobData?.data?.modifiedCount){
            navigate("/my-jobs");

              Swal.fire({
                  title: "Good job!",
                  text: "Your job has been updated successfully!",
                  icon: "success",
                });
          }
      }
      catch(err){
          return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
      }
    };
    return (
      <section className="grid lg:grid-cols-2 gap-5">
        <div>
          <Lottie animationData={AddJob} loop={true} />
        </div>
        <div className=" my-12">
          <section className=" p-2 md:p-6 mx-auto bg-base-200 rounded-md shadow-md ">
            <h2 className="text-lg font-semibold capitalize ">
              Update a Job
            </h2>
  
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p>User Name</p>
                  <p>{user?.displayName}</p>
                </div>
                <div className="space-y-2">
                  <p>User Email</p>
                  <p className="break-words">{user?.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label  htmlFor="jobTitle">
                    Job Title
                  </label>
                  <input
                    id="jobTitle"
                    {...register("jobTitle")}
                    name="jobTitle"
                    defaultValue={jobTitle}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label  htmlFor="jobBanner">
                    Job Banner Url
                  </label>
                  <input
                    id="jobBanner"
                    {...register("jobBanner")}
                    name="jobBanner"
                    defaultValue={jobBanner}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
  
                <div className="flex flex-col gap-2 ">
                  <label> Application Deadline</label>
  
                  <DatePicker
                    className="border py-2 px-4 w-full"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
  
                <div className="flex flex-col gap-2 ">
                  <label  htmlFor="category">
                    Category
                  </label>
                  <select
                    {...register("category")}
                    name="category"
                    defaultValue={category}
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
                  <label htmlFor="minSalary">
                    Min Salary
                  </label>
                  <input
                    id="minSalary"
                    defaultValue={minSalary}
                    {...register("minSalary")}
                    name="minSalary"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label  htmlFor="maxSalary">
                    Max salary
                  </label>
                  <input
                    id="maxSalary"
                    defaultValue={maxSalary}
                    {...register("maxSalary")}
                    name="maxSalary"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
  
              
              </div>
  
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="description">
                  Description
                </label>
                <textarea
                  className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  {...register("description")}
                  defaultValue={description}
                  name="description"
                  id="description"
                ></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button className="btn w-1/2 btn-outline btn-primary">
                  Save
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    );
};

export default UpdateAJob;