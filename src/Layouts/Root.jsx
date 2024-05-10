import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedPage/Navbar";


const Root = () => {
    return (
        <>
            {/* navbar */}
           <nav className="max-w-[1440px] w-[95%] lg:w-11/12 mx-auto">
                 <Navbar></Navbar>
           </nav>
           
            <main className="max-w-[1440px] w-[95%] lg:w-11/12 mx-auto">
                <Outlet></Outlet>
            </main>

            {/* footer */}
        </>
    );
};

export default Root;