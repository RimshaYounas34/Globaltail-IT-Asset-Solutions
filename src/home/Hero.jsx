import heroBg from "../assets/hero-bg.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#071321]/70"></div>

      <div className="relative z-10 max-w-[1320px] mx-auto h-full px-8 flex items-center">
        <div className="max-w-[760px]">
          <p className="text-[#0B84FF] uppercase tracking-[3px] font-bold text-[18px] mb-5">
            BULK IT ASSET SOLUTIONS
          </p>

          <h1 className="text-[48px] font-bold leading-[1.15] tracking-tight text-white lg:text-[60px]">
            Smart Solutions for
            <br />
            Retired Technology Assets
          </h1>

          <p className="mt-8 text-gray-300 text-[19px] leading-9 max-w-[680px]">
            Globaltail purchases, refurbishes, and wholesales quality IT
            equipment from trusted sources worldwide. Partner with us for
            reliable products, responsible practices, and long-term value.
          </p>

          <div className="mt-10 flex gap-5">
            <Link
              to="/sell-assets"
              className="min-w-[250px] h-[58px] px-8 rounded-md bg-[#0B84FF] text-white text-[15px] font-semibold flex items-center justify-center gap-3 whitespace-nowrap hover:bg-blue-700 duration-300"
            >
              SELL YOUR IT ASSETS
              <FaArrowRight />
            </Link>
            <Link
              to="/contact"
              className="min-w-[250px] h-[58px] px-8 rounded-md border border-gray-400 text-white text-[15px] font-semibold flex items-center justify-center gap-3 whitespace-nowrap hover:bg-white hover:text-black duration-300"
            >
              REQUEST INVENTORY
              <FaArrowRight />
            </Link>

            <Link
  to="/about"
  className="min-w-[250px] h-[58px] px-8 rounded-md border border-gray-400 text-white text-[15px] font-semibold flex items-center justify-center gap-3 whitespace-nowrap hover:bg-white hover:text-black duration-300"
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
