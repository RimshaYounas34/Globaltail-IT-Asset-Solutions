
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import supplyImg from "../assets/consistent-supply.png";
import { Link } from "react-router-dom";

import {
  HiOutlineCube,
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineClipboardDocumentList,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

const ConsistentSupply = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            CONSISTENT SUPPLY
          </p>

          <h1 className="mt-4 text-white text-[50px] lg:text-[60px] font-bold leading-tight">
            Reliable Inventory
            <br />
            When You Need It
          </h1>

          <p className="mt-6 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            We maintain a dependable inventory of refurbished IT equipment,
            ensuring businesses receive consistent supply, fast fulfillment
            and uninterrupted operations.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-[#0B84FF] text-white font-semibold hover:bg-[#086dd6] transition"
            >
              Check Availability
            </Link>

            <Link
              to="/bulk-purchasing"
              className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#061326] transition"
            >
              Browse Inventory
            </Link>

          </div>

        </div>

      </section>

      {/* Overview */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}

            <div>

              <img
                src={supplyImg}
                alt="Consistent Supply"
                className="w-full h-[560px] object-cover rounded-3xl"
              />

            </div>

            {/* Content */}

            <div>

              <p className="uppercase text-[#0B84FF] font-bold tracking-[1px] text-sm">
                ALWAYS IN STOCK
              </p>

              <h2 className="mt-3 text-[42px] font-bold text-[#071423] leading-tight">
                Consistent Inventory
                <br />
                For Every Business
              </h2>

              <p className="mt-6 text-[#5B6472] leading-8">
                Through our global sourcing network and warehouse management,
                Globaltail maintains a steady supply of quality refurbished
                laptops, desktops, servers, networking equipment and accessories.
              </p>

              <div className="space-y-6 mt-10">

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                    <HiOutlineCube className="text-[#0B84FF] text-3xl"/>

                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Large Inventory
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Thousands of devices ready for immediate dispatch.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                    <HiOutlineBuildingOffice2 className="text-[#0B84FF] text-3xl"/>

                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Warehouse Ready
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Organized inventory with quick order processing.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                    <HiOutlineGlobeAlt className="text-[#0B84FF] text-3xl"/>

                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-[#071423]">
                      Worldwide Supply
                    </h3>

                    <p className="mt-2 text-[#5B6472]">
                      Reliable sourcing and delivery across global markets.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Inventory Features */}

      <section className="bg-[#F7FAFF] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase text-[#0B84FF] text-sm font-bold tracking-[1px] text-center">
            INVENTORY FEATURES
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            What Makes Our Supply Reliable
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">

              <HiOutlineCube className="mx-auto text-[#0B84FF] text-5xl"/>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Ready Stock
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Large inventory available for immediate orders.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">

              <HiOutlineClipboardDocumentList className="mx-auto text-[#0B84FF] text-5xl"/>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Organized Inventory
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Efficient inventory management for faster fulfillment.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">

              <HiOutlineCheckBadge className="mx-auto text-[#0B84FF] text-5xl"/>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Quality Checked
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Every product is tested before shipment.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">

              <HiOutlineGlobeAlt className="mx-auto text-[#0B84FF] text-5xl"/>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Global Availability
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Reliable supply across local and international markets.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Supply Workflow */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase text-[#0B84FF] font-bold tracking-[1px] text-center text-sm">
            HOW WE WORK
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Our Supply Process
          </h2>

          <div className="grid lg:grid-cols-4 gap-8 mt-16">

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center mx-auto">

                <span className="text-[#0B84FF] text-3xl font-bold">
                  1
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                Source
              </h3>

              <p className="mt-3 text-[#5B6472]">
                Equipment sourced from trusted partners.
              </p>

            </div>

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center mx-auto">

                <span className="text-[#0B84FF] text-3xl font-bold">
                  2
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                Store
              </h3>

              <p className="mt-3 text-[#5B6472]">
                Products organized in secure warehouses.
              </p>

            </div>

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center mx-auto">

                <span className="text-[#0B84FF] text-3xl font-bold">
                  3
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                Prepare
              </h3>

              <p className="mt-3 text-[#5B6472]">
                Orders are tested and packed professionally.
              </p>

            </div>

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center mx-auto">

                <span className="text-[#0B84FF] text-3xl font-bold">
                  4
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                Deliver
              </h3>

              <p className="mt-3 text-[#5B6472]">
                Fast shipping to customers worldwide.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Business Promise */}

      <section className="bg-[#061326] py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
              YOUR RELIABLE PARTNER
            </p>

            <h2 className="mt-4 text-white text-[46px] font-bold leading-tight">
              Never Worry About
              <br />
              Inventory Shortages Again
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-[#C8D3E2] text-[17px] leading-8">
              With Globaltail's dependable sourcing network and warehouse
              management, your business always has access to premium
              refurbished IT equipment whenever you need it.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">

                <h3 className="text-[#0B84FF] text-4xl font-bold">
                  5000+
                </h3>

                <p className="mt-3 text-[#D7E3F4]">
                  Devices Ready In Stock
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">

                <h3 className="text-[#0B84FF] text-4xl font-bold">
                  40+
                </h3>

                <p className="mt-3 text-[#D7E3F4]">
                  Countries Supplied
                </p>

              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">

                <h3 className="text-[#0B84FF] text-4xl font-bold">
                  24/7
                </h3>

                <p className="mt-3 text-[#D7E3F4]">
                  Sales & Customer Support
                </p>

              </div>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-[#0B84FF] text-white font-semibold hover:bg-[#086dd6] transition"
              >
                Contact Our Team
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#061326] transition"
              >
                Explore Services
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

export default ConsistentSupply;