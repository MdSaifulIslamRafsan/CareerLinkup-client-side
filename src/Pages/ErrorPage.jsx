import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error from "../assets/error.json";

const ErrorPage = () => {
    const errorMessage = useRouteError();
    return (
        <section className="flex items-center h-full">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto ">
            <div className="max-w-lg text-center">
            <Lottie className="h-96" animationData={error} loop={true} />
                <p className="text-2xl font-semibold md:text-3xl">Sorry, This Page Was {errorMessage.statusText || errorMessage.message}.</p>
                <p className="mt-4 mb-8 ">But don't worry, you can find plenty of other things on our homepage.</p>
                <Link to="/" className="text-xl py-3 px-5 rounded-xl before:absolute before:block before:inset-0 before:-z-10 before:bg-green-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-green-900 after:absolute relative inline-block">Back to homepage</Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;