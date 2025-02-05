import { Helmet } from "react-helmet";
import Carousel from "../Components/Banner/Carousel";
import Categories from "../Components/Categories";
import JobInfo from "../Components/JobInfo";
import { motion } from "framer-motion";
import ContactUs from "../Components/ContactUs";
import PromotingCareer from "../Components/PromotingCareer";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>CareerLinkup</title>
      </Helmet>
        <Carousel></Carousel>

      <Categories></Categories>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <JobInfo></JobInfo>
      </motion.div>
      
       <PromotingCareer></PromotingCareer>
      
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
