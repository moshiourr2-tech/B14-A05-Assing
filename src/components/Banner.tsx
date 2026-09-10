import logo from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-155 max-w-7xl items-center justify-between px-1 py-16 flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-gray-400 mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options,
            <br />
            Compare them side by side, and put together the stack that fits your{" "}
            <br /> next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center gap-5 md:justify-start">
            <button className="rounded-md bg-gradient-to-r from-orange-400 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow-md transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="px-5 py-3 text-sm font-medium text-gray-500 transition hover:text-gray-900">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end mt-8 md:mt-0">
          <img
            src={logo}
            alt="Development Stack"
            className="w-70 md:w-95 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
