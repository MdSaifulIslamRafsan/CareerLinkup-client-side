import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
import Lottie from "lottie-react";
import spinner from "../assets/spinner.json";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../Components/PDF";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
  const axiosSecure = useAxiosSecure();
  const [filter , SetFilter] = useState('');
  const { user } = useAuth();
  const { data: appliedJobs = [], isLoading } = useQuery({
    queryFn: () => getJobData(),
    queryKey: ["myJobs", user?.email , filter],
  });




  const getJobData = async () => {
    const { data } = await axiosSecure(`/appliedJobs/${user?.email}?filter=${filter}`);
    return data;
  };
  if (isLoading) {
    return (
      <div className="grid place-content-center h-screen">
        <Lottie className="h-40 w-40" animationData={spinner} loop={true} />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-306px)]">
       <Helmet>
        <title>CareerLinkup || Applied Jobs</title>
    </Helmet>
      <div className="py-4 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center gap-5 rounded-md">
        <h1 className="text-center text-white text-2xl">Applied Jobs</h1>
        
          <select
            name="category"
            onChange={(e)=> SetFilter(e.target.value)}
            id="category"
            value={filter}
            className="border p-2 rounded-md"
          >
            <option value="">All Jobs</option>
            <option value="Remote">Remote</option>
            <option value="On Site">On Site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part-Time">Part-Time</option>
          </select>
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
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      <span>Job ID</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Job Title</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      Job Owner Email
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      Category
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
                      <span></span>
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "></th>
                  </tr>
                </thead>
                {appliedJobs.map((job) => (
                  <tbody key={job?._id} className=" divide-y divide-gray-200 ">
                    <tr>
                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {job?.jobID}
                      </td>
                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {job?.jobTitle}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="
                             text-xs"
                          >
                            {job?.jobOwnerEmail}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="
                             text-xs"
                          >
                            {job?.category}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {job?.salaryRange}
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <div>
                            <PDFDownloadLink
                              document={<PDF />}
                              fileName="resume.pdf"
                            >
                              {({ loading }) =>
                                loading ? (
                                  "loading"
                                ) : (
                                  <button
                                    className="relative inline-block rounded-lg 
                           overflow-hidden border-sky-500 px-8 py-3 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-sky-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-sky-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                                  >
                                    Download
                                  </button>
                                )
                              }
                            </PDFDownloadLink>
                          </div>
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
    </div>
  );
};

export default AppliedJobs;
