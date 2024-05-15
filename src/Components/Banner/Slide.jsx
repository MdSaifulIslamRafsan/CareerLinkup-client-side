

const Slide = ({heading , description , img}) => {
    return (
        <div
        className="w-full rounded-xl bg-center bg-cover h-full"
        style={{
          backgroundImage:
            `url(${img})`
        }}
      >
        <div className="flex rounded-xl items-center justify-center w-full h-full bg-gray-900/50 ">
          <div className="text-center space-y-4 w-2/3">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white lg:text-4xl">
             {heading}
            </h1>
            <p className="text-white text-xs sm:text-base">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default Slide;