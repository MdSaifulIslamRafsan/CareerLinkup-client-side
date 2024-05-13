import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
const JobCard = ({ job }) => {
  const { user } = useAuth();
  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details",
      });
    }
  };

  const {
    _id,
    jobUser,
    jobTitle,
    postingDate,
    deadline,
    salaryRange,
    applicantsNumber,
  } = job;
  return (
    <div className="my-5 px-8 py-4  rounded-lg shadow-2xl">
      
      <p className="text-sm font-bold ">Job Posting Date :- {postingDate}</p>
      <p className="text-sm font-bold">Application Deadline :- {deadline}</p>

      <div className="mt-2">
        <h1 className="text-xl font-bold   hover:underline">{jobTitle}</h1>
        <p className="mt-2">Salary Range :- {salaryRange}</p>
        <p className="text-sm font-bold ">
        Job Applicants Number :- {applicantsNumber}
      </p>
      </div>
      <div className="flex gap-4 flex-col-reverse sm:flex-row justify-between  mt-4">
        <Link
          to={`/job/${_id}`}
          onClick={handleViewDetails}
          className="px-4 py-2  before:absolute before:block text-base before:inset-0 before:-z-10 before:bg-sky-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block"
        >
          View Details
        </Link>

        <div className="flex items-center">
          <p className="font-bold">{jobUser?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
