import Lottie from "lottie-react";
import AddJob from "../assets/Addjob.json";
import useAuth from "../Hook/useAuth";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Helmet } from "react-helmet";
const AddAJobs = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    reset();
    const { jobBanner, jobTitle, category, maxSalary, minSalary, description } =
      data;

    const createNewJob = {
      jobBanner,
      jobTitle,
      category,
      description,
      salaryRange: `$${minSalary} - $${maxSalary}`,
      jobUser: {
        name: user?.displayName,
        email: user?.email,
      },
      applicantsNumber: 0,
      postingDate: new Date().toLocaleDateString(),
      deadline: new Date(startDate).toLocaleDateString(),
    };
    try {
      const newJobData = await axios.post(
        `${import.meta.env.VITE_API_URL}/jobs`,
        createNewJob
      );
      if (newJobData?.data?.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Your job has been added successfully!",
          icon: "success",
        });
      }
    } catch (err) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };
  return (
    <section>
      <Helmet>
          <title>CareerLinkup || Add A Job</title>
        </Helmet>
        <div className="py-4 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center gap-5 rounded-md">
          <h1 className="text-center text-white text-2xl"> Add a Job</h1>
        </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <Lottie animationData={AddJob} loop={true} />
        </div>
        <div className=" my-12">
          <section className=" p-2 md:p-6 mx-auto bg-base-200 rounded-md shadow-md ">
            <h2 className="text-lg font-semibold capitalize ">Add a Job</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    id="jobTitle"
                    required
                    {...register("jobTitle")}
                    name="jobTitle"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label htmlFor="jobBanner">Job Banner Url</label>
                  <input
                    id="jobBanner"
                    required
                    {...register("jobBanner")}
                    name="jobBanner"
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
                  <label htmlFor="category">Category</label>
                  <select
                    {...register("category")}
                    name="category"
                    id="category"
                    className="border p-2 rounded-md"
                  >
                    <option selected disabled value="">
                      Category
                    </option>
                    <option value="Remote">Remote</option>
                    <option value="On Site">On Site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Part-Time">Part-Time</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="minSalary">Min Salary</label>
                  <input
                    id="minSalary"
                    required
                    {...register("minSalary")}
                    name="minSalary"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label htmlFor="maxSalary">Max salary</label>
                  <input
                    id="maxSalary"
                    required
                    {...register("maxSalary")}
                    name="maxSalary"
                    type="number"
                    className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="description">Description</label>
                <textarea
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  {...register("description")}
                  name="description"
                  id="description"
                ></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button className="btn w-1/2 btn-outline hover:bg-blue-500 hover:text-white">
                  Save
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AddAJobs;
