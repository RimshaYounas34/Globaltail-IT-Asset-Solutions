import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

import refurbishImg from "../assets/refurbishment.png";

import {
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const QualityRefurbishment = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            QUALITY REFURBISHMENT
          </p>

          <h1 className="mt-4 text-white text-[42px] md:text-[52px] lg:text-[60px] font-bold leading-tight max-w-4xl">
            Professionally Refurbished
            <br />
            IT Equipment You Can Trust
          </h1>

          <p className="mt-7 text-[#C8D3E2] text-[17px] leading-8 max-w-2xl">
            Every device is carefully inspected, cleaned, tested and graded
            to deliver dependable performance, outstanding value and long-term reliability.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="bg-[#0B84FF] hover:bg-[#006FE6] text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Request Inventory
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 hover:bg-white hover:text-[#061326] text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Talk To Our Team
            </Link>

          </div>

        </div>

      </section>
            {/* Overview */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div>

            <img
              src={refurbishImg}
              alt="Quality Refurbishment"
              className="w-full h-[560px] object-cover rounded-3xl shadow-lg"
            />

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
              QUALITY PROCESS
            </p>

            <h2 className="mt-3 text-[42px] font-bold text-[#071423] leading-tight">
              Every Device
              <br />
              Professionally Refurbished
            </h2>

            <p className="mt-6 text-[#5B6472] leading-8">
              Every product passes through a comprehensive refurbishment
              process that includes hardware inspection, component testing,
              cleaning, grading and final quality verification before shipment.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-2xl flex-shrink-0">
                  <HiOutlineShieldCheck />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#071423]">
                    Certified Testing
                  </h3>

                  <p className="mt-2 text-[#5B6472] leading-7">
                    Every device is fully tested for reliable performance.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-2xl flex-shrink-0">
                  <HiOutlineWrenchScrewdriver />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#071423]">
                    Professional Refurbishment
                  </h3>

                  <p className="mt-2 text-[#5B6472] leading-7">
                    Cleaning, repairs and grading carried out by experienced technicians.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-2xl flex-shrink-0">
                  <HiOutlineCpuChip />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#071423]">
                    Performance Verified
                  </h3>

                  <p className="mt-2 text-[#5B6472] leading-7">
                    Hardware is inspected to ensure dependable long-term use.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Our Standards */}

      <section className="bg-[#F7FAFF] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase text-center tracking-[1px] text-[#0B84FF] font-bold text-sm">
            OUR STANDARDS
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Why Our Refurbishment Stands Out
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">

              <HiOutlineShieldCheck className="mx-auto text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-xl font-bold">
                Fully Tested
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Complete hardware diagnostics before approval.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">

              <HiOutlineSparkles className="mx-auto text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-xl font-bold">
                Professionally Cleaned
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Devices cleaned inside and out for premium presentation.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">

              <HiOutlineCpuChip className="mx-auto text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-xl font-bold">
                Hardware Checked
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Components inspected to ensure stable operation.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">

              <HiOutlineCheckCircle className="mx-auto text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-xl font-bold">
                Ready To Deploy
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Carefully packed and prepared for immediate business use.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Why Globaltail */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
            WHY GLOBALTAIL
          </p>

          <h2 className="mt-3 text-[42px] font-bold text-[#071423]">
            Quality You Can Trust
          </h2>

          <p className="mt-6 text-[#5B6472] leading-8 max-w-3xl mx-auto">
            Our refurbishment process focuses on quality, consistency and
            reliability. Every product is carefully inspected and prepared to
            deliver dependable performance for businesses around the world.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-[#F7FAFF] rounded-3xl p-8">

              <h3 className="text-[40px] font-bold text-[#0B84FF]">
                100%
              </h3>

              <p className="mt-3 text-[#5B6472]">
                Quality Tested Products
              </p>

            </div>

            <div className="bg-[#F7FAFF] rounded-3xl p-8">

              <h3 className="text-[40px] font-bold text-[#0B84FF]">
                5000+
              </h3>

              <p className="mt-3 text-[#5B6472]">
                Devices Refurbished
              </p>

            </div>

            <div className="bg-[#F7FAFF] rounded-3xl p-8">

              <h3 className="text-[40px] font-bold text-[#0B84FF]">
                40+
              </h3>

              <p className="mt-3 text-[#5B6472]">
                Countries Served
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact CTA */}

      <section className="bg-[#061326] py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-white text-[42px] font-bold">
            Looking For Premium Refurbished
            <br />
            IT Equipment?
          </h2>

          <p className="mt-6 text-[#C8D3E2] leading-8 max-w-2xl mx-auto">
            Get in touch with our team today to discuss your refurbishment
            requirements and discover reliable IT solutions for your business.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="bg-[#0B84FF] hover:bg-[#006FE6] text-white px-8 h-14 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              CONTACT US
            </Link>

            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#061326] px-8 h-14 rounded-xl font-semibold flex items-center transition"
            >
              REQUEST A QUOTE
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default QualityRefurbishment;