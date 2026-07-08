import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import sustainableImg from "../assets/sustainable.png";
import { Link } from "react-router-dom";


import {
  HiOutlineArrowPath,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
  
} from "react-icons/hi2";
import { FaLeaf } from "react-icons/fa6";
const SustainableApproach = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            SUSTAINABLE APPROACH
          </p>

          <h1 className="mt-4 text-white text-[50px] lg:text-[60px] font-bold leading-tight">
            Giving Technology
            <br />
            A Second Life
          </h1>

          <p className="mt-6 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            Our sustainable refurbishment process reduces electronic waste,
            extends the life of IT equipment and helps businesses achieve their
            environmental goals without compromising quality.
          </p>

        </div>

      </section>

      {/* About Sustainability */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}

            <div>

              <img
                src={sustainableImg}
                alt="Sustainable IT"
                className="w-full h-[560px] rounded-3xl object-cover"
              />

            </div>

            {/* Content */}

            <div>

              <p className="uppercase text-[#0B84FF] font-bold tracking-[1px] text-sm">
                OUR COMMITMENT
              </p>

              <h2 className="mt-3 text-[42px] font-bold text-[#071423] leading-tight">
                Sustainable IT
                <br />
                For A Better Future
              </h2>

              <p className="mt-6 text-[#5B6472] leading-8">
                At Globaltail, sustainability is at the heart of everything we
                do. We maximize the value of retired IT assets while minimizing
                environmental impact through refurbishment, reuse and
                responsible recycling.
              </p>

              <div className="space-y-6 mt-10">

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

<FaLeaf className="text-[#0B84FF] text-3xl" />
                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Reduce E-Waste
                    </h3>

                    <p className="text-[#5B6472] mt-2">
                      Extending device life through refurbishment.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                    <HiOutlineArrowTrendingUp className="text-[#0B84FF] text-3xl" />

                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Maximize Asset Value
                    </h3>

                    <p className="text-[#5B6472] mt-2">
                      Helping businesses recover more from retired equipment.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                    <HiOutlineGlobeAlt className="text-[#0B84FF] text-3xl" />

                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Global Environmental Impact
                    </h3>

                    <p className="text-[#5B6472] mt-2">
                      Supporting sustainable technology worldwide.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Our Green Process */}

      <section className="bg-[#F7FAFF] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center uppercase text-[#0B84FF] font-bold tracking-[1px] text-sm">
            OUR PROCESS
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Building A Sustainable IT Lifecycle
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#EEF5FF] flex items-center justify-center">

                <HiOutlineArrowPath className="text-[#0B84FF] text-4xl"/>

              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Collect
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Secure collection of retired IT assets from businesses.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#EEF5FF] flex items-center justify-center">

                <HiOutlineSparkles className="text-[#0B84FF] text-4xl"/>

              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Refurbish
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Every device is cleaned, repaired and professionally tested.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#EEF5FF] flex items-center justify-center">

                <HiOutlineCheckCircle className="text-[#0B84FF] text-4xl"/>

              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Reuse
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Equipment receives a second life through responsible reuse.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#EEF5FF] flex items-center justify-center">

                <HiOutlineGlobeAlt className="text-[#0B84FF] text-4xl"/>

              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Recycle
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Non-reusable equipment is recycled responsibly.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Environmental Impact */}

      <section className="bg-[#061326] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[1px] text-center text-[#0B84FF] font-bold text-sm">
            OUR IMPACT
          </p>

          <h2 className="mt-3 text-center text-white text-[42px] font-bold">
            Creating A Greener Future
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="text-center">

              <h3 className="text-[#0B84FF] text-[52px] font-bold">
                5000+
              </h3>

              <p className="mt-3 text-[#C7D2E2]">
                Devices Reused
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-[#0B84FF] text-[52px] font-bold">
                40+
              </h3>

              <p className="mt-3 text-[#C7D2E2]">
                Countries Served
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-[#0B84FF] text-[52px] font-bold">
                95%
              </h3>

              <p className="mt-3 text-[#C7D2E2]">
                Assets Recovered
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-[#0B84FF] text-[52px] font-bold">
                100%
              </h3>

              <p className="mt-3 text-[#C7D2E2]">
                Eco Commitment
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Final CTA */}

      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-gradient-to-r from-[#0B84FF] to-[#0A6FDE] rounded-[32px] px-10 py-16 text-center">

            <p className="uppercase tracking-[2px] text-white/80 font-semibold text-sm">
              BUILD A GREENER FUTURE
            </p>

            <h2 className="mt-4 text-white text-[42px] font-bold leading-tight">
              Choose Sustainable
              <br />
              IT Solutions Today
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-[#E8F3FF] text-[17px] leading-8">
              Partner with Globaltail to reduce electronic waste, extend the
              life of IT equipment and support a cleaner, more sustainable
              future through responsible technology lifecycle management.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                to="/contact"
                className="bg-white text-[#0B84FF] px-8 py-4 rounded-xl font-semibold hover:bg-[#EEF5FF] transition"
              >
                Contact Us
              </Link>

              <Link
                to="/services"
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0B84FF] transition"
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <Footer />

    </>
  );
};

export default SustainableApproach;