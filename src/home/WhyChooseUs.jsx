import whyChooseImg from "../assets/why-choose.jpg";

import {
  HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck,
  HiOutlineShieldExclamation,
  HiOutlineTruck,
  HiOutlineArrowPath,
  HiOutlineCurrencyDollar,
  HiOutlineCube,
  HiOutlineUsers,
} from "react-icons/hi2";

import { BsPatchCheckFill } from "react-icons/bs";

const features = [
  {
    icon: <HiOutlineClipboardDocumentList />,
    title: "Bulk Purchasing",
    desc: "Large volumes from multiple sources",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Quality Refurbishment",
    desc: "Tested, graded & quality assured",
  },
  {
    icon: <HiOutlineShieldExclamation />,
    title: "Data Security",
    desc: "Secure data wiping & sanitization",
  },
  {
    icon: <HiOutlineTruck />,
    title: "Global Shipping",
    desc: "Fast & reliable worldwide delivery",
  },
  {
    icon: <HiOutlineArrowPath />,
    title: "Sustainable Approach",
    desc: "Extending life of technology",
  },
  {
    icon: <HiOutlineCurrencyDollar />,
    title: "Competitive Pricing",
    desc: "Best value for our partners",
  },
  {
    icon: <HiOutlineCube />,
    title: "Consistent Supply",
    desc: "Regular inventory availability",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Long Term Partnerships",
    desc: "Built on trust & reliability",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F7FAFF] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[450px_780px] gap-8 items-start">
          {/* Left Side */}

          <div className="relative -ml-12">
            <img
              src={whyChooseImg}
              alt="Warehouse"
              className="w-full h-[280px] sm:h-[350px] lg:h-[450px] object-contain rounded-2xl mt-12"
            />
            <div
              className="absolute bottom-3 right-3 lg:-bottom-10 lg:right-0 bg-white rounded-2xl shadow-xl
w-[130px] h-[165px]
sm:w-[150px] sm:h-[190px]
lg:w-[180px] lg:h-[220px]
flex flex-col items-center justify-center p-3"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">
                <BsPatchCheckFill className="text-[#0B84FF] text-3xl sm:text-4xl lg:text-5xl" />
              </div>
              <h3 className="mt-3 text-[12px] sm:text-[16px] lg:text-[20px] font-extrabold text-center leading-tight">
                QUALITY
                <br />
                TESTED
              </h3>
              <p className="mt-2 text-center text-gray-500 text-[9px] sm:text-xs lg:text-sm leading-4 lg:leading-6">
                DATA WIPED
                <br />
                READY TO DEPLOY
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div>
            <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
              WHY WORK WITH GLOBALTAIL
            </p>

            <h2 className="mt-3 text-[20px] lg:text-[35px] font-bold text-[#03070c] leading-[1.1]">
              Reliable. Responsible. Results Driven.
            </h2>

            <p className="mt-1 max-w-xl text-[15px] leading-7 text-black">
              We follow a strict refurbishment and quality assurance process to
              ensure every device meets the highest standards before reaching
              our customers.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[0].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[0].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[0].desc}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[1].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[1].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[1].desc}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[2].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[2].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[2].desc}
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[3].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[3].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[3].desc}
                </p>
              </div>
              {/* Card 5 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[4].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[4].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[4].desc}
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[5].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[5].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[5].desc}
                </p>
              </div>

              {/* Card 7 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[6].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[6].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[6].desc}
                </p>
              </div>

              {/* Card 8 */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[7].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[7].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[7].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
