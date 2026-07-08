import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import pricingImg from "../assets/pricing.png";
import { Link } from "react-router-dom";

import {
  HiOutlineCurrencyDollar,
  HiOutlineBuildingOffice2,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const CompetitivePricing = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            COMPETITIVE PRICING
          </p>

          <h1 className="mt-4 text-white text-[50px] lg:text-[60px] font-bold leading-tight">
            Premium IT Equipment
            <br />
            At Competitive Prices
          </h1>

          <p className="mt-6 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            We help businesses maximize value by providing high-quality
            refurbished IT equipment at fair, transparent and competitive
            wholesale prices.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#0B84FF] text-white font-semibold hover:bg-[#086dd6] transition"
            >
              Request A Quote
            </Link>

            <Link
              to="/sell-assets"
              className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#061326] transition"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <img
                src={pricingImg}
                alt="Competitive Pricing"
                className="rounded-3xl h-[560px] w-full object-cover"
              />
            </div>

            {/* Right */}

            <div>
              <p className="uppercase text-[#0B84FF] font-bold tracking-[1px] text-sm">
                WHY OUR PRICING
              </p>

              <h2 className="mt-3 text-[42px] font-bold text-[#071423] leading-tight">
                Better Prices.
                Greater Value.
              </h2>

              <p className="mt-6 text-[#5B6472] leading-8">
                Our efficient sourcing and refurbishment process allows us to
                deliver premium IT equipment at prices that help businesses
                reduce costs without compromising on quality.
              </p>

              <div className="space-y-6 mt-10">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">
                    <HiOutlineCurrencyDollar className="text-[#0B84FF] text-3xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-[#071423]">
                      Fair Pricing
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Transparent quotes with no hidden costs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">
                    <HiOutlineBuildingOffice2 className="text-[#0B84FF] text-3xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-[#071423]">
                      Wholesale Discounts
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Better pricing for bulk and repeat orders.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">
                    <HiOutlineShieldCheck className="text-[#0B84FF] text-3xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-[#071423]">
                      Quality Guaranteed
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Premium refurbished equipment with reliable performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Advantages */}

      <section className="bg-[#F7FAFF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center uppercase text-[#0B84FF] font-bold text-sm tracking-[1px]">
            PRICING ADVANTAGES
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Why Businesses Choose Us
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
              <HiOutlineCurrencyDollar className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-[24px] font-bold text-[#071423]">
                Competitive Quotes
              </h3>

              <p className="mt-4 text-[#5B6472] leading-8">
                Fair market pricing with transparent quotations and flexible
                purchasing options.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
              <HiOutlineChartBar className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-[24px] font-bold text-[#071423]">
                Better Return
              </h3>

              <p className="mt-4 text-[#5B6472] leading-8">
                Our sourcing network allows us to deliver premium equipment at
                exceptional value for businesses.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
              <HiOutlineCheckCircle className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-[24px] font-bold text-[#071423]">
                Trusted Partnership
              </h3>

              <p className="mt-4 text-[#5B6472] leading-8">
                Long-term pricing consistency backed by reliable customer
                support and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <section className="bg-[#061326] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
              READY TO SAVE MORE?
            </p>

            <h2 className="mt-4 text-white text-[46px] font-bold">
              Request Your Custom Quote
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-[#C8D3E2] leading-8">
              Whether you need a few devices or a large wholesale order,
              Globaltail offers competitive pricing tailored to your business
              requirements.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-[#0B84FF] text-white font-semibold hover:bg-[#086dd6] transition"
              >
                Request Quote
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#061326] transition"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CompetitivePricing;
