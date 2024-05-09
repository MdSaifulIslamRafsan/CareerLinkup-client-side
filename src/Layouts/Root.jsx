import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedPage/Navbar";


const Root = () => {
    return (
        <>
            {/* navbar */}
            <Navbar></Navbar>
           
            <main>
                <Outlet></Outlet>
            </main>

            {/* footer */}
        </>
    );
};

export default Root;