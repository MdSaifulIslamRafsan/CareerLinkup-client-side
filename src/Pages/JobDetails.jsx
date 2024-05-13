import { useState } from "react";
import {useParams } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Lottie from "lottie-react";
import spinner from '../assets/spinner.json'
const JobDetails = () => {
  const { user } = useAuth();
const params = useParams();
const queryClient = useQueryClient();
  const {data:job = [] , isLoading} = useQuery({
    queryFn: ()=> getJobData(),
    queryKey: ['applicants-number']
  });


  const getJobData = async () => {
    const {data} = await axios(`${import.meta.env.VITE_API_URL}/job/${params?.id}`);
    return data
  };
  const {
    _id,
    jobBanner,
    jobTitle,
    description,
    salaryRange,
    applicantsNumber,
    jobUser,
    deadline,
  } = job;
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    reset();
    const { name, email, resume } = data;
    const jobOwnerEmail = jobUser?.email;

    if (jobOwnerEmail === email) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You cannot apply for your own job.",
      });
    }
    if (
      new Date().toLocaleDateString() > new Date(deadline).toLocaleDateString()
    ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The deadline for this job has already passed.",
      });
    }
    const applyJob = {
      name,
      email,
      resume,
      jobOwnerEmail,
      jobID: _id
    };

    try {
      const applyJobData = await axios.post(
        `${import.meta.env.VITE_API_URL}/appliedJobs`,
        applyJob
      );
      const applicantsJobData = await axios.post(
        `${import.meta.env.VITE_API_URL}/job/${_id}`
      );
      if (
        applyJobData?.data?.insertedId &&
        applicantsJobData?.data?.modifiedCount
      ) {
        
        queryClient.invalidateQueries({queryKey: ['applicants-number']});
        Swal.fire({
          title: "Good job!",
          text: "Application submitted successfully",
          icon: "success",
        });
      }
    } catch (err) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data,
      });
    }
  };

  if(isLoading){
    return <div className="grid place-content-center h-screen">
    <Lottie className="h-40 w-40" animationData={spinner} loop={true} />
  </div>
  }

  return (
    <div className="overflow-hidden p-4 rounded-lg shadow-md bg-base-200">
      <img
        className="object-cover rounded-lg w-full h-64"
        src={jobBanner}
        alt="Article"
      />
      <div className="p-6">
        <div>
          <span className="text-lg font-medium">
            Number of Applicants :- {applicantsNumber}
          </span>
          <p className="block mt-2 text-2xl font-bold  transition-colors duration-300 transform hover:underline">
            {jobTitle}
          </p>
          <p className="mt-2 text-lg">{description}</p>
          <p className="my-2 text-lg">{salaryRange}</p>

          <div className="relative">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Apply
            </button>
            {isOpen && (
              <div
                className="fixed inset-0 z-10 overflow-y-auto"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                  <span
                    className="hidden sm:inline-block sm:h-screen sm:align-middle"
                    aria-hidden="true"
                  >
                    ​
                  </span>
                  <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                      id="modal-title"
                    >
                      Apply for Jobs
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Browse through our latest job openings and apply to
                      kickstart your career today!
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                      <label
                        htmlFor="name"
                        className="text-sm text-gray-700 dark:text-gray-200"
                      >
                        User Name
                      </label>
                      <label className="block mt-3" htmlFor="name">
                        <input
                          type="text"
                          name="name"
                          {...register("name")}
                          id="name"
                          required
                          defaultValue={user?.displayName}
                          className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                      </label>
                      <label
                        htmlFor="email"
                        className="text-sm text-gray-700 dark:text-gray-200"
                      >
                        Email Address
                      </label>
                      <label className="block mt-3" htmlFor="email">
                        <input
                          type="email"
                          name="email"
                          {...register("email")}
                          id="email"
                          defaultValue={user?.email}
                          required
                          className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                      </label>
                      <label
                        htmlFor="resume"
                        className="text-sm text-gray-700 dark:text-gray-200"
                      >
                        Resume Link
                      </label>
                      <label className="block mt-3" htmlFor="resume">
                        <input
                          type="resume"
                          name="resume"
                          required
                          {...register("resume")}
                          id="resume"
                          placeholder="resume link"
                          className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                        />
                      </label>

                      <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
