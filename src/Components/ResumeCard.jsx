import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const ResumeCard = ({resumeCardData}) => {
    const {email , about , experienceDescription , experienceTitle , facebook , linkedin , institutionName , name,passingYear, phone, position , projectsDescription , projectsTitle, skills , profile} = resumeCardData
    return (
        <div className="bg-base-100 p-4">
      <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
        {/* top content */}
        <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg text-white bg-top-color sm:px-2 w-full">
          <div className="h-40 w-40  overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img className="w-full h-full" src={profile} />
          </div>
          <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
             {name}
            </p>
            <p className="text-heading">{position}</p>
          </div>
        </div>
        {/* main content */}
        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              {/* My contact */}
              <div className="py-3 sm:order-none order-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  My Contact
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div>
                  <div className="flex items-center my-1">
                  <MdOutlineEmail />
                    <div className="ml-2 truncate">{email}</div>
                  </div>
                  <div className="flex items-center my-1">
                  <FaPhoneAlt />
                    <div className="ml-2 truncate">{phone}</div>
                  </div>
                  <div className="flex items-center my-1">
                    <FaFacebook></FaFacebook>
                    <div className="ml-2 truncate">{facebook}</div>
                  </div>
                  <div className="flex items-center my-1">
                   <FaLinkedin></FaLinkedin>
                    <div className="ml-2 truncate">{linkedin}</div>
                  </div>
                </div>
              </div>
              {/* Skills */}
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Skills
                </h2>
                <div>
                    {
                        skills.map(skill=> <p key={skill}>{skill?.name}</p>)
                    }
                </div>
              </div>
              {/* Education Background */}
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Education Background
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div className="flex flex-col space-y-1">
                  <div className="flex flex-col">
                    <p className="font-semibold text-xs ">{new Date(passingYear).getFullYear()}</p>
                    <p className="text-sm font-medium">
                     {institutionName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              {/* About me */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  About Me
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <p>
                 {about}
                </p>
              </div>
              {/* Professional Experience */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Professional Experience
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">
                     {experienceTitle}
                    </p>
                    <p className="font-semibold text-sm mt-2 mb-1">
                     {experienceDescription}
                    </p>
                  </div>
                
                </div>
              </div>
              {/* Projects */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Projects
                </h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold ">
                     {projectsTitle}
                    </p>
                    <p className="font-normal text-sm mb-1 pl-2">
                     {projectsDescription}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ResumeCard;