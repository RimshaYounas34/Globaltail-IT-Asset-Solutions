import {
  HiOutlineComputerDesktop,
  HiOutlineUsers,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

import { TbRecycle } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa6";

const items = [
  {
    icon: <HiOutlineComputerDesktop size={38} />,
    title: "ITAD COMPANIES",
  },
  {
    icon: <HiOutlineUsers size={38} />,
    title: "MSPS",
  },
  {
    icon: <HiOutlineBuildingOffice2 size={38} />,
    title: "ENTERPRISES",
  },
  {
    icon: <TbRecycle size={38} />,
    title: "RECYCLERS",
  },
  {
    icon: <FiGlobe size={38} />,
    title: "EXPORT PARTNERS",
  },
  {
    icon: <FaHandshake size={38} />,
    title: "WHOLESALE BUYERS",
  },
];

const Trusted = () => {
  return (
    <section className="bg-white py-10 lg:py-0">

      <div className="max-w-[1320px] mx-auto px-5 lg:px-0">

        <div className="grid lg:grid-cols-[250px_1px_1fr] items-center gap-8 lg:gap-0 lg:min-h-[110px]">

          {/* Left */}

          <div className="text-center lg:text-left">

            <h3 className="text-[15px] font-bold uppercase leading-6 text-[#111827]">
              TRUSTED BY
              <br />
              BUSINESSES WORLDWIDE
            </h3>

          </div>

          {/* Divider */}

          <div className="hidden lg:block w-px h-14 bg-gray-300 mx-auto"></div>

          {/* Right */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

            {items.map((item, index) => (

              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 group cursor-pointer"
              >
                <div className="text-[#040506] transition duration-300 group-hover:text-[#0B84FF]">
                  {item.icon}
                </div>

                <p className="text-[13px] font-medium uppercase text-[#020405] text-center group-hover:text-[#0B84FF] transition">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Trusted;