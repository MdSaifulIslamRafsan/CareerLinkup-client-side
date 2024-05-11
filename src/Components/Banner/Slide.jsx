

const Slide = ({heading , description , img}) => {
    return (
        <div
        className="w-full rounded-xl bg-center bg-cover h-[450px]"
        style={{
          backgroundImage:
            `url(${img})`
        }}
      >
        <div className="flex rounded-xl items-center justify-center w-full h-full bg-gray-900/50 ">
          <div className="text-center space-y-4 w-2/3">
            <h1 className="text-xl font-semibold text-white lg:text-4xl">
             {heading}
            </h1>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default Slide;