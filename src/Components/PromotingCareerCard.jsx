import { motion } from "framer-motion";
const PromotingCareerCard = ({image , title , description}) => {
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
       <div className="relative flex h-full bg-base-100 flex-col justify-center overflow-hidden ">
      <div className="group relative cursor-pointer overflow-hidden  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-md h-full sm:rounded-lg sm:px-10">
        <span className="absolute top-10 -z-10 h-20 w-20 rounded-full bg-base-200 transition-all duration-300 group-hover:scale-[11]" />
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid mx-auto h-20 w-20 place-items-center rounded-full  transition-all duration-300 ">
           <img className="w-full h-full" src={image} alt="" />
          </span>
          <div className="space-y-6 pt-5  leading-7 transition-all duration-300 ">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>
              {description}
            </p>
          </div>
          
        </div>
      </div>
    </div>
      </motion.div>
   
  );
};

export default PromotingCareerCard;
