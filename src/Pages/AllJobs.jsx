import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Lottie from "lottie-react";
import spinner from "../assets/spinner.json"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const AllJobs = () => {
    const [itemsPerPage , setItemsPerPage] = useState(5);
    const [currentPage , setCurrentPage] = useState(1);
    const [count , setCount] = useState(0);
    const [search , setSearch] = useState("");
    const [searchText , setSearchText] = useState("");
    const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys().map(element => element + 1)];
  const {data:allJobs = [] , isLoading} = useQuery({
    queryFn: ()=> getJobsData(),
    queryKey: ['allJobs' , currentPage , search]
  });
  const getJobsData = async()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-jobs?page=${currentPage}&size=${itemsPerPage}&search=${search}`);
    return data;
};

const handleReset = () => {
    setSearch("");
    setSearchText("");
}

const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = () => {
    setSearch(searchText);
  }
  useEffect(()=>{
    const getJobsCount = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/jobs-count?search=${search}`);
        setCount(data.count);
    };
    getJobsCount();
  },[search]);


  const handlePaginationBtn = (value) =>{
    setCurrentPage(value);
  }
  const handlePrevBtn = () => {
      console.log(currentPage);
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
            console.log(currentPage);
        }
  }
  const handleNextBtn = () => {
    if(currentPage < pages.length){
        setCurrentPage(currentPage + 1)
    }
  }
if(isLoading){
    return <div className="grid place-content-center h-screen">
    <Lottie className="h-40 w-40" animationData={spinner} loop={true} />
  </div>
  }
  return (
    <div className='px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <Helmet>
        <title>CareerLinkup || All Jobs</title>
    </Helmet>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input {...register("search")} 
                className='px-6 py-2 placeholder-gray-500  outline-none focus:placeholder-transparent'
                type='text'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='btn btn-outline text-white bg-blue-500'>
                Search
              </button>
            </div>
          </form>
         
          <button onClick={handleReset} className='btn btn-outline text-white bg-blue-500'>Reset</button>
        </div>
        <div className='mt-8'>
        <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium ">All Jobs</h2>

        <span className="px-6 py-1 bg-teal-900 text-white rounded-lg">
          {allJobs.length}
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
                        <span>Job Title</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      Posting Date
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      <span>Application Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right "
                    >
                      <span>Salary Range</span>
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right ">

                    </th>
                  </tr>
                </thead>
                {allJobs.map((job) => (
                  <tbody
                    key={job?._id}
                    className=" divide-y divide-gray-200 "
                  >
                    <tr>
                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {job?.jobTitle}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="
                             text-xs"
                          >
                            {job?.postingDate}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {job?.deadline}
                      </td>

                      <td className="px-4 py-4 text-sm   whitespace-nowrap">
                        {job?.salaryRange}
                      </td>
                      

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <Link to={`/job/${job?._id}`} className="relative inline-block rounded-lg 
                           overflow-hidden border-sky-500 px-8 py-3 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-sky-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-sky-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">
                          Details
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
        </div>
      </div>

      
      <div className='flex justify-center mt-12'>
        <button onClick={handlePrevBtn}  className={'bg-primary text-white hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-primary'} >
          <div className='flex items-center -mx-1'>
           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>

          </div>
        </button>

        {pages.map(btnNum => (
          <button
          onClick={()=> handlePaginationBtn(btnNum)}
            key={btnNum}
            
            className={currentPage === btnNum ? 'bg-primary text-white hover:text-white px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-primary' : ' hover:text-white px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-primary'}
          >
            {btnNum}
          </button>
        ))}

        <button  onClick={handleNextBtn}  className={'bg-primary text-white hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-primary'}>
          <div className='flex items-center -mx-1'>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default AllJobs