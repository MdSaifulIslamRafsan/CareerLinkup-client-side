import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedPage/Navbar";
import Footer from "../Components/SharedPage/Footer";

const Root = () => {
  return (
    <>
      {/* navbar */}
      <nav className="shadow-xl fixed bg-base-300 top-0 z-50 w-full">
        <Navbar></Navbar>
      </nav>

      <main className="max-w-[1440px] mt-20  w-[95%] lg:w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>

      {/* footer */}
      <footer className="shadow-2xl pt-8 bg-base-300">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
