import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import partnershipImg from "../assets/partnership.png";
import { Link } from "react-router-dom";

import {
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const LongTermPartnerships = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            LONG TERM PARTNERSHIPS
          </p>

          <h1 className="mt-4 text-white text-[50px] lg:text-[60px] font-bold leading-tight">
            Partnerships Built
            <br />
            On Trust & Growth
          </h1>

          <p className="mt-6 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            We believe successful partnerships are built through reliability,
            transparency and consistent value. Our goal is to become your
            trusted long-term IT asset partner.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#0B84FF] text-white font-semibold hover:bg-[#086dd6] transition"
            >
              Become A Partner
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#061326] transition"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

      {/* Partnership Overview */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Image */}

            <div>

              <img
                src={partnershipImg}
                alt="Long Term Partnerships"
                className="w-full h-[560px] object-cover rounded-3xl"
              />

            </div>

            {/* Right */}

            <div>

              <p className="uppercase text-[#0B84FF] font-bold tracking-[1px] text-sm">
                WORKING TOGETHER
              </p>

              <h2 className="mt-3 text-[42px] font-bold text-[#071423] leading-tight">
                More Than A Supplier,
                <br />
                A Trusted Partner
              </h2>

              <p className="mt-6 text-[#5B6472] leading-8">
                We work closely with our partners to understand their
                requirements, provide consistent inventory and deliver reliable
                IT solutions that support long-term business success.
              </p>

              <div className="space-y-6 mt-10">

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

<HiOutlineUserGroup className="text-[#0B84FF] text-3xl" />
                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Trusted Relationships
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Built on honesty, transparency and mutual success.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                    <HiOutlineBuildingOffice2 className="text-[#0B84FF] text-3xl"/>

                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Business Growth
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Supporting organizations with scalable IT solutions.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                    <HiOutlineGlobeAlt className="text-[#0B84FF] text-3xl"/>

                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Global Network
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Serving partners across multiple international markets.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Partnership Journey */}

      <section className="bg-[#F7FAFF] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase text-[#0B84FF] font-bold tracking-[1px] text-sm text-center">
            PARTNERSHIP JOURNEY
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Growing Together Every Step
          </h2>

          <div className="grid lg:grid-cols-4 gap-8 mt-16">

            {/* Step 1 */}

            <div className="text-center">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#0B84FF] text-white flex items-center justify-center text-3xl font-bold">
                1
              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Connect
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Discuss your business goals and IT equipment needs.
              </p>

            </div>

            {/* Step 2 */}

            <div className="text-center">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#0B84FF] text-white flex items-center justify-center text-3xl font-bold">
                2
              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Plan
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Build a customized sourcing and supply strategy.
              </p>

            </div>

            {/* Step 3 */}

            <div className="text-center">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#0B84FF] text-white flex items-center justify-center text-3xl font-bold">
                3
              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Deliver
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Receive premium refurbished IT equipment on time.
              </p>

            </div>

            {/* Step 4 */}

            <div className="text-center">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#0B84FF] text-white flex items-center justify-center text-3xl font-bold">
                4
              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Grow
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Continue expanding with long-term support and reliable supply.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Partner Benefits */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left */}

            <div className="bg-[#061326] rounded-3xl p-10 text-white">

              <HiOutlineUsers className="text-[#0B84FF] text-5xl"/>

              <h3 className="mt-6 text-[32px] font-bold">
                Why Businesses
                Choose Globaltail
              </h3>

              <p className="mt-6 leading-8 text-[#D5E1EF]">
                We focus on building lasting relationships through dependable
                service, quality products and responsive customer support.
              </p>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <div className="flex gap-4 p-6 rounded-2xl bg-[#F7FAFF]">

<HiOutlineUserGroup className="text-[#0B84FF] text-3xl" />
                <div>

                  <h3 className="font-bold text-xl text-[#071423]">
                    Dedicated Account Support
                  </h3>

                  <p className="mt-2 text-[#5B6472]">
                    Personalized assistance for every business partner.
                  </p>

                </div>

              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-[#F7FAFF]">

                <HiOutlineHeart className="text-[#0B84FF] text-3xl flex-shrink-0"/>

                <div>

                  <h3 className="font-bold text-xl text-[#071423]">
                    Long-Term Commitment
                  </h3>

                  <p className="mt-2 text-[#5B6472]">
                    We prioritize lasting business relationships over one-time sales.
                  </p>

                </div>

              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-[#F7FAFF]">

                <HiOutlineGlobeAlt className="text-[#0B84FF] text-3xl flex-shrink-0"/>

                <div>

                  <h3 className="font-bold text-xl text-[#071423]">
                    Global Opportunities
                  </h3>

                  <p className="mt-2 text-[#5B6472]">
                    Access international sourcing and worldwide delivery.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Final Partnership CTA */}

      <section className="bg-[#061326] py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
              LET'S BUILD SUCCESS TOGETHER
            </p>

            <h2 className="mt-4 text-white text-[46px] font-bold leading-tight">
              Become A Long-Term
              <br />
              Globaltail Partner
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-[#C8D3E2] text-[17px] leading-8">
              Whether you're a wholesaler, reseller, ITAD company, MSP or
              enterprise, Globaltail is committed to providing dependable
              inventory, competitive pricing and long-term business support.
            </p>

            {/* Statistics */}

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="bg-white/5 rounded-2xl border border-white/10 p-8">

                <h3 className="text-[#0B84FF] text-5xl font-bold">
                  40+
                </h3>

                <p className="mt-3 text-[#D6E1F0]">
                  Countries Served
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl border border-white/10 p-8">

                <h3 className="text-[#0B84FF] text-5xl font-bold">
                  500+
                </h3>

                <p className="mt-3 text-[#D6E1F0]">
                  Business Partners
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl border border-white/10 p-8">

                <h3 className="text-[#0B84FF] text-5xl font-bold">
                  10+
                </h3>

                <p className="mt-3 text-[#D6E1F0]">
                  Years Experience
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-[#0B84FF] text-white font-semibold hover:bg-[#086dd6] transition"
              >
                Partner With Us
              </Link>

              <Link
                to="/about"
                className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#061326] transition"
              >
                Learn More
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Existing Footer */}

      <Footer />

    </>
  );
};

export default LongTermPartnerships;