import Lottie from "lottie-react";
import spinner from "../assets/spinner.json";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import useAuth from "../Hook/useAuth";
import ResumeCard from "../Components/ResumeCard";

const Resume = () => {
    const {user} = useAuth();
  const { data: resumeData = [], isLoading } = useQuery({
    queryFn: () => getJobsData(),
    queryKey: ["resumeData"],
  });
  const getJobsData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/resume/${user?.email}`);
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
    <section>
    {
        resumeData?.map(data => <ResumeCard key={data?._id} resumeCardData={data}></ResumeCard>)
    }
    </section>
  
  );
};

export default Resume;
