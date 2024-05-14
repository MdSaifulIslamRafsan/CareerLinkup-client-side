
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Lottie from "lottie-react";
import spinner from '../assets/spinner.json'
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const MyJobs = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const {data:myJobs = [] , isLoading} = useQuery({
    queryFn: ()=> getJobData(),
    queryKey: ['myJobs' , user?.email]
  });



  const getJobData = async () => {
    const { data } = await axiosSecure(
      `/jobs/${user?.email}` ,
     
    );
    return data;
  };

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const deleted = async () => {
            const { data } = await axiosSecure.delete(
              `/job/${id}`
            );
            if (data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Delete operation successful.",
                icon: "success",
              });
            }

            queryClient.invalidateQueries({queryKey: ['myJobs']});
          };
          deleted();
        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };
  if(isLoading){
    return <div className="grid place-content-center h-screen">
    <Lottie className="h-40 w-40" animationData={spinner} loop={true} />
  </div>
  }

  return (
    <section className="container px-4 mx-auto pt-12">
       <Helmet>
        <title>CareerLinkup || My Jobs</title>
    </Helmet>
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium ">My Posted Jobs</h2>

        <span className="px-6 py-1 bg-teal-900 text-white rounded-lg">
          {myJobs.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      <span>Salary Range</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      Category
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right ">
                      Edit
                    </th>
                  </tr>
                </thead>
                {myJobs.map((myJob) => (
                  <tbody
                    key={myJob?._id}
                    className=" divide-y divide-gray-200 "
                  >
                    <tr>
                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {myJob?.jobTitle}
                      </td>

                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {myJob?.deadline}
                      </td>

                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {myJob?.salaryRange}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="
                             text-xs"
                          >
                            {myJob?.category}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => handleDelete(myJob?._id)}
                            className=" transition-colors duration-200   hover:text-red-500 focus:outline-none"
                          >
                            <FaTrashAlt className="text-xl" />
                          </button>

                          <Link to={`/update-a-job/${myJob?._id}`} className=" transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                            <FaPencilAlt className="text-xl" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJobs;
