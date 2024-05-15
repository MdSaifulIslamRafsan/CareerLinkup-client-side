import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


const Carousel = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
      <>
        <Swiper 
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide><Slide img={"https://i.ibb.co/JC1NQMS/rivage-Fa9b57hffn-M-unsplash.jpg"} heading={"Discover Your Dream Job with CareerLinkup"} description={"Explore endless career possibilities tailored to your skills and aspirations on CareerLinkup, your trusted partner in job seeking."}></Slide></SwiperSlide>
          <SwiperSlide><Slide img={"https://i.ibb.co/syq67jQ/uk-black-tech-dfms-Zy-FVi-I-unsplash.jpg"} heading={"Unlock Career Opportunities on CareerLinkup"} description={"Join CareerLinkup and gain access to a vast network of employers and recruiters eager to connect with talented individuals like you."}></Slide></SwiperSlide>
          <SwiperSlide><Slide img={"https://i.ibb.co/d7Xq5xT/the-jopwell-collection-Y4uo-L2-SIGUQ-unsplash.jpg"} heading={"Find Your Perfect Career Match with CareerLinkup"} description={"Let CareerLinkup be your guide as you embark on a journey to find the career that aligns perfectly with your goals and passions."}></Slide></SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    );
};

export default Carousel;
