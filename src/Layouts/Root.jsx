import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedPage/Navbar";
import Footer from "../Components/SharedPage/Footer";

const Root = () => {
  return (
    <>
      {/* navbar */}
      <nav className="shadow-xl">
        <Navbar></Navbar>
      </nav>

      <main className="max-w-[1440px] h-[calc(100vh-380px)] w-[95%] lg:w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>

      {/* footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
