import {useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import spinner from '../assets/spinner.json'
const Categories = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const {data:jobs = [] , isLoading} = useQuery({
    queryFn: ()=> getJobsData(),
    queryKey: ['jobs']
  });

  
    const getJobsData = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
        return data;
       
    };
    if(isLoading){
      return <div className="grid place-content-center h-screen">
      <Lottie className="h-40 w-40" animationData={spinner} loop={true} />
    </div>
    }

  return (
    <section>
      <div className="text-center my-20 md:w-2/3 mx-auto space-y-4">
        <h1 className="text-xl lg:text-4xl font-bold">Job By Category</h1>
        <p>
          The Job By Category section features tabs for various job types . Each
          tab provides a brief description of the specific job role within that
          category, streamlining the job search process.
        </p>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex justify-center items-center">
          <TabList>
            <Tab>All jobs</Tab>
            <Tab>On-Site</Tab>
            <Tab>Remote</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <JobCard job={job} key={job?._id}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {jobs
              .filter((job) => job?.category === "On Site")
              .map((job) => (
                <JobCard job={job} key={job?._id}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {jobs
              .filter((job) => job?.category === "Remote")
              .map((job) => (
                <JobCard job={job} key={job?._id}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {jobs
              .filter((job) => job?.category === "Hybrid")
              .map((job) => (
                <JobCard job={job} key={job?._id}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {jobs
              .filter((job) => job?.category === "Part-Time")
              .map((job) => (
                <JobCard job={job} key={job?._id}></JobCard>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Categories;
