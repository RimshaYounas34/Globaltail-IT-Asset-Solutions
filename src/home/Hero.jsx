import heroBg from "../assets/hero-bg.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#071321]/70"></div>

      <div className="relative z-10 max-w-[1320px] mx-auto min-h-screen px-5 sm:px-8 lg:px-8 flex items-center">
        <div className="max-w-[760px] pt-36 lg:pt-12">
          <p className="text-[#0B84FF] uppercase tracking-[2px] sm:tracking-[2px] font-bold text-[13px] sm:text-[16px] lg:text-[18px] mb-4 sm:mb-5">
            BULK IT ASSET SOLUTIONS
          </p>

          <h1 className="text-white font-bold leading-[1.2] text-[30px] sm:text-[40px] lg:text-[56px]">
            Smart Solutions for
            <br className="hidden sm:block" />
            Retired Technology Assets
          </h1>
          <p className="mt-3 text-gray-300 text-[20px] sm:text-[18px] lg:text-[19px] leading-8 max-w-[680px]">
            Globaltail purchases, refurbishes, and wholesales quality IT
            equipment from trusted sources worldwide. Partner with us for
            reliable products, responsible practices, and long-term value.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col lg:flex-row gap-4">
            <Link
              to="/sell-assets"
              className="w-full lg:w-auto min-w-0 lg:min-w-[250px] h-[56px] px-8 rounded-md bg-[#0B84FF] text-white text-[15px] font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 duration-300"
            >
              SELL YOUR IT ASSETS
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="w-full lg:w-auto min-w-0 lg:min-w-[250px] h-[56px] px-8 rounded-md border border-gray-400 text-white text-[15px] font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-black duration-300"
            >
              REQUEST INVENTORY
              <FaArrowRight />
            </Link>

            <Link
              to="/about"
              className="w-full lg:w-auto min-w-0 lg:min-w-[250px] h-[56px] px-8 rounded-md border border-gray-400 text-white text-[15px] font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-black duration-300"
            >
              BECOME A PARTNER
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
