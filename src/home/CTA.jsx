import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
<section className="relative overflow-hidden bg-[#061326] py-16 lg:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full border border-[#0B84FF]"></div>

        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[650px] h-[280px] rounded-full border border-[#0B84FF]"></div>
      </div>

<div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-wide">
          LET'S BUILD VALUE TOGETHER
        </p>

        <div className="mt-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Side */}

<div>

<h2 className="text-white text-[30px] sm:text-[38px] lg:text-[40px] font-bold leading-tight">
    Ready to Work With Globaltail?
  </h2>

  <p className="mt-1 text-[#C7D2E2] text-[15px] leading-8 max-w-2xl">
    Contact us today to discuss your requirements or
    partnership opportunities.
  </p>

</div>

{/* Right Side */}

<div className="flex flex-col sm:flex-row gap-4">
  {/* Contact Button */}

  <Link
  to="/contact"
  className="w-full sm:w-auto bg-[#0B84FF] hover:bg-[#006FE6] transition duration-300 text-white font-semibold h-[58px] px-8 rounded-lg flex items-center justify-center gap-3"
>
  CONTACT US
  <FaArrowRight className="text-sm" />
</Link>

  {/* Partnership Button */}

  <Link
  to="/contact"
  className="w-full sm:w-auto border border-[#5B6472] hover:border-[#0B84FF] hover:bg-[#0B84FF] transition duration-300 text-white font-semibold h-[58px] px-8 rounded-lg flex items-center justify-center gap-3"
>
  PARTNERSHIP INQUIRY
  <FaArrowRight className="text-sm" />
</Link>

</div>
        </div>

      </div>

    </section>
  );
};

export default CTA;