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
import { Link } from "react-router-dom";

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
    title: " Local & Global Delivery",
    desc: "Fast, reliable local and worldwide delivery.",
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center"></div>
          {/* Left Side */}

          {/* Right Side */}

          <div>
            <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
              WHY WORK WITH GLOBALTAIL
            </p>

            <h2 className="mt-3 text-[20px] lg:text-[40px] font-bold text-[#03070c] leading-[1.1]">
              Reliable. Responsible. Results Driven.
            </h2>

            <p className="mt-1 max-w-xl text-[15px] leading-7 text-black">
              We follow a strict refurbishment and quality assurance process to
              ensure every device meets the highest standards before reaching
              our customers.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {/* Card 1 */}
              <Link
                to="/bulk-purchasing"
                className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[0].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[0].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[0].desc}
                </p>
              </Link>
              {/* Card 2 */}
              <Link
                to="/quality-refurbishment"
                className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[1].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[1].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[1].desc}
                </p>
              </Link>

              {/* Card 3 */}
              <Link
                to="/data-security"
                className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[2].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[2].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[2].desc}
                </p>
              </Link>

              {/* Card 4 */}
             <Link
                to="/local-global-delivery"
                className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[3].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[3].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[3].desc}
                </p>
              </Link>
              {/* Card 5 */}
              <Link
                to="/sustainable-approach"
                className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[4].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[4].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[4].desc}
                </p>
              </Link>

              {/* Card 6 */}
              <Link
                to="/competitive-pricing"
                className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[5].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[5].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[5].desc}
                </p>
              </Link>

              {/* Card 7 */}
              <Link
                to="/consistent-supply"
                className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[6].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[6].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[6].desc}
                </p>
              </Link>

              {/* Card 8 */}
              <Link
                to="/long-term-partnerships"
                className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-[185px] px-5 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl mb-5">
                  {features[7].icon}
                </div>

                <h3 className="text-[17px] font-bold text-[#111827]">
                  {features[7].title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-gray-500">
                  {features[7].desc}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
