import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import axios from "axios";

const Categories = () => {
    const [jobs , setJobs] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(()=>{
    const getJobsData = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
        setJobs(data);
    };
    getJobsData();
  },[])

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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {jobs.map((job) => (
              <JobCard job={job} key={job?._id}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {jobs
              .filter((job) => job?.category === "On Site")
              .map((job) => (
                <JobCard job={job} key={job?._id}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {jobs
              .filter((job) => job?.category === "Remote")
              .map((job) => (
                <JobCard job={job} key={job?._id}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {jobs
              .filter((job) => job?.category === "Hybrid")
              .map((job) => (
                <JobCard job={job} key={job?._id}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
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
