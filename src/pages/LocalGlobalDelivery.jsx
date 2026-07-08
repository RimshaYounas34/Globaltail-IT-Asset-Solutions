import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import deliveryImg from "../assets/LocalGlobalDelivery.png";
import { Link } from "react-router-dom";
import {
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineMap,
  HiOutlineClock,
   HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineCheckBadge,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const LocalGlobalDelivery = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            LOCAL & GLOBAL DELIVERY
          </p>

          <h1 className="mt-4 text-white text-[48px] lg:text-[58px] font-bold leading-tight">
            Fast & Reliable
            <br />
            Worldwide Delivery
          </h1>

          <p className="mt-6 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            We safely deliver refurbished IT equipment across Pakistan
            and international markets with secure packaging,
            trusted logistics and on-time shipping.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="bg-[#0B84FF] hover:bg-[#006fe6] text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Request Shipping
            </Link>

            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#061326] px-8 py-4 rounded-xl font-semibold transition"
            >
              Get Quote
            </Link>

          </div>

        </div>

      </section>

      {/* Image + Content */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <img
              src={deliveryImg}
              alt=""
              className="rounded-3xl h-[550px] w-full object-cover"
            />

          </div>

          <div>

            <p className="uppercase text-[#0B84FF] font-bold tracking-[2px] text-sm">
              SHIPPING SOLUTIONS
            </p>

            <h2 className="mt-4 text-[44px] font-bold text-[#071423] leading-tight">
              Delivering Technology
              <br />
              Across The World
            </h2>

            <p className="mt-6 text-[#5B6472] leading-8">
              From single pallets to full container loads,
              we provide dependable shipping solutions for
              businesses worldwide. Every shipment is securely
              packed, quality checked and monitored from dispatch
              to delivery.
            </p>

          </div>

        </div>

      </section>
            {/* Delivery Coverage */}

      <section className="bg-[#F7FAFF] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase text-[#0B84FF] text-sm font-bold tracking-[2px] text-center">
            DELIVERY COVERAGE
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Shipping Wherever You Need
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-center text-[#5B6472] leading-8">
            Whether you're ordering locally or internationally,
            our logistics network ensures every shipment reaches
            its destination safely and on time.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

              <HiOutlineMap className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-2xl font-bold text-[#071423]">
                Pakistan
              </h3>

              <p className="mt-4 text-[#5B6472] leading-7">
                Fast nationwide delivery with secure packaging
                and trusted courier partners.
              </p>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

              <HiOutlineTruck className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-2xl font-bold text-[#071423]">
                Asia
              </h3>

              <p className="mt-4 text-[#5B6472] leading-7">
                Reliable shipping for businesses across
                major Asian markets.
              </p>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

              <HiOutlineGlobeAlt className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-2xl font-bold text-[#071423]">
                Europe
              </h3>

              <p className="mt-4 text-[#5B6472] leading-7">
                Safe international logistics with dependable
                freight solutions.
              </p>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

              <HiOutlineClock className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-2xl font-bold text-[#071423]">
                Worldwide
              </h3>

              <p className="mt-4 text-[#5B6472] leading-7">
                Efficient global delivery backed by
                professional export support.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* Delivery Process */}

<section className="bg-[#061326] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#0B84FF] font-bold tracking-[2px] text-sm text-center">
      OUR PROCESS
    </p>

    <h2 className="mt-3 text-center text-white text-[42px] font-bold">
      From Warehouse To Your Door
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-center text-[#C8D3E2] leading-8">
      Every shipment follows a carefully managed process to ensure speed,
      safety and complete customer satisfaction.
    </p>

    <div className="mt-20 grid md:grid-cols-4 gap-8">

      {/* Step 1 */}

      <div className="text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-[#0B84FF] flex items-center justify-center">
          <HiOutlineCube className="text-white text-4xl" />
        </div>

        <h3 className="mt-6 text-white text-[22px] font-bold">
          Order Ready
        </h3>

        <p className="mt-3 text-[#C8D3E2] leading-7">
          Products are selected and prepared according to your order.
        </p>

      </div>

      {/* Step 2 */}

      <div className="text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-[#0B84FF] flex items-center justify-center">
          <HiOutlineShieldCheck className="text-white text-4xl" />
        </div>

        <h3 className="mt-6 text-white text-[22px] font-bold">
          Secure Packing
        </h3>

        <p className="mt-3 text-[#C8D3E2] leading-7">
          Every shipment is packed safely to prevent damage.
        </p>

      </div>

      {/* Step 3 */}

      <div className="text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-[#0B84FF] flex items-center justify-center">
          <HiOutlineTruck className="text-white text-4xl" />
        </div>

        <h3 className="mt-6 text-white text-[22px] font-bold">
          Fast Shipping
        </h3>

        <p className="mt-3 text-[#C8D3E2] leading-7">
          Delivered through trusted local and international logistics.
        </p>

      </div>

      {/* Step 4 */}

      <div className="text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-[#0B84FF] flex items-center justify-center">
          <HiOutlineCheckBadge className="text-white text-4xl" />
        </div>

        <h3 className="mt-6 text-white text-[22px] font-bold">
          Delivered
        </h3>

        <p className="mt-3 text-[#C8D3E2] leading-7">
          Your order arrives safely, on time and ready for use.
        </p>

      </div>

    </div>

    {/* Bottom Banner */}

    <div className="mt-20 bg-[#0B84FF] rounded-3xl px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">

      <div>

        <h3 className="text-white text-[32px] font-bold">
          Need Worldwide IT Delivery?
        </h3>

        <p className="mt-3 text-[#EAF3FF] text-[16px] max-w-2xl">
          We deliver refurbished IT equipment securely to businesses,
          distributors and partners around the globe.
        </p>

      </div>

      <Link
        to="/contact"
        className="bg-white text-[#0B84FF] font-semibold px-8 py-4 rounded-xl hover:bg-[#EEF5FF] transition flex items-center gap-3"
      >
        Contact Us
        <HiOutlineArrowLongRight className="text-xl" />
      </Link>

    </div>

  </div>

</section>


{/* Footer */}
<Footer />

    </>
  );
};

export default LocalGlobalDelivery;