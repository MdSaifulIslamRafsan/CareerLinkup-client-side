
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carreer.css';

// import required modules
import { EffectFlip,  Navigation , Autoplay } from 'swiper/modules';
import PromotingCareerCard from './PromotingCareerCard';


const PromotingCareer = () => {
  return (
    <section>
      <div className="grid items-center grid-cols-1 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="lg:flex-grow  lg:pr-10 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Promoting Career
          </h1>
          <p className="mb-8 leading-relaxed">
            Absolutely! Here's a description for the Promoting Career section
            of your job-seeking website: Promoting Career: Elevate Your
            Professional Journey In the dynamic landscape of career advancement,
            standing out is paramount. Welcome to our Promoting Career
            section, your gateway to unlocking opportunities, honing skills, and
            achieving professional excellence.
          </p>
         
        </div>
      </motion.div>
       
        <div className="">
        <Swiper
        effect={'flip'}
        grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        loop={true}
        navigation={true}
        modules={[EffectFlip,  Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
         <PromotingCareerCard title={"Set Up Your Profile All"}description={"After signing up to TechCareer, you start to set up your profile and find the hottest & latest tech jobs."} image={"https://i.ibb.co/G9fM8mD/step-1.png"}></PromotingCareerCard>
        </SwiperSlide>
        <SwiperSlide>
        <PromotingCareerCard image={"https://i.ibb.co/FJF9Bx2/step-2.png"} title={"Create A Pro CV"}description={"Tech career gives you more than 500 pre-made CV samples for candidates to personalize their CVs."}></PromotingCareerCard>
        </SwiperSlide>
        <SwiperSlide>
        <PromotingCareerCard title={"Get Applied"} description={"When owning a CV, don't hesitate to submit your CV to easily apply for a job from Tech companies."} image={"https://i.ibb.co/1bWDtFW/step-3.png"}></PromotingCareerCard>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PromotingCareer;
