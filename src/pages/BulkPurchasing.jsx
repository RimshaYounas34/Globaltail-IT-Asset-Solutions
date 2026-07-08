import Navbar from "../layout/Navbar";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";
import bulkImg from "../assets/bulk-purchasing.jpg";

import {
  HiOutlineClipboardDocumentList,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
const BulkPurchasing = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="bg-[#061326] pt-44 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            BULK PURCHASING
          </p>

          <h1 className="mt-5 text-white text-[46px] lg:text-[62px] font-bold leading-tight max-w-4xl">
            Bulk IT Equipment
            <br />
            Purchasing Solutions
          </h1>

          <p className="mt-7 max-w-2xl text-[#C8D3E2] text-[18px] leading-8">
            We help businesses, wholesalers and resellers source premium-quality
            refurbished IT equipment in bulk with dependable service,
            competitive pricing and worldwide delivery.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              to="/contact"
              className="bg-[#0B84FF] text-white px-7 py-4 rounded-xl font-semibold hover:bg-[#006FE6] transition duration-300"
            >
              Bulk Orders
            </Link>

            <Link
              to="/contact"
              className="border border-[#2E4A67] text-white px-7 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#061326] transition duration-300"
            >
              Worldwide Supply
            </Link>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* IMAGE */}

            <div className="relative">
              <img
                src={bulkImg}
                alt="Bulk Purchasing"
                className="rounded-3xl w-full h-[540px] object-cover"
              />

              {/* Floating Card */}

              <div className="absolute -bottom-8 right-8 bg-white shadow-2xl rounded-2xl px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center">
                    <HiOutlineArrowTrendingUp className="text-[#0B84FF] text-3xl" />
                  </div>

                  <div>
                    <h3 className="text-[30px] font-bold text-[#071423]">
                      5000+
                    </h3>

                    <p className="text-gray-500 text-sm">Assets Purchased</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}

            <div>
              <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
                OVERVIEW
              </p>

              <h2 className="mt-4 text-[44px] font-bold text-[#071423] leading-tight">
                Reliable Bulk
                <br />
                IT Equipment Supply
              </h2>

              <p className="mt-7 text-[#5B6472] leading-8 text-[17px]">
                Globaltail supplies high-quality refurbished laptops, desktops,
                monitors, servers and accessories in bulk. We work closely with
                businesses to deliver dependable inventory, competitive pricing
                and reliable logistics.
              </p>

              {/* FEATURES */}

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <HiOutlineCheckCircle className="text-[#0B84FF] text-2xl flex-shrink-0" />

                  <p className="text-[#071423] font-medium">
                    Large inventory ready for immediate orders
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <HiOutlineCheckCircle className="text-[#0B84FF] text-2xl flex-shrink-0" />

                  <p className="text-[#071423] font-medium">
                    Professionally tested & quality checked
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <HiOutlineCheckCircle className="text-[#0B84FF] text-2xl flex-shrink-0" />

                  <p className="text-[#071423] font-medium">
                    Competitive pricing for wholesale buyers
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <HiOutlineCheckCircle className="text-[#0B84FF] text-2xl flex-shrink-0" />

                  <p className="text-[#071423] font-medium">
                    Local & worldwide delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= STATISTICS ================= */}

      <section className="bg-[#F7FAFF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
            OUR ACHIEVEMENTS
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Trusted By Businesses Worldwide
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
            <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition p-8 text-center">
              <h3 className="text-[50px] font-bold text-[#0B84FF]">5000+</h3>
              <p className="mt-2 text-[#5B6472]">IT Assets Purchased</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition p-8 text-center">
              <h3 className="text-[50px] font-bold text-[#0B84FF]">40+</h3>
              <p className="mt-2 text-[#5B6472]">Countries Served</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition p-8 text-center">
              <h3 className="text-[50px] font-bold text-[#0B84FF]">100%</h3>
              <p className="mt-2 text-[#5B6472]">Quality Checked</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition p-8 text-center">
              <h3 className="text-[50px] font-bold text-[#0B84FF]">24/7</h3>
              <p className="mt-2 text-[#5B6472]">Business Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
            WHY CHOOSE US
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Benefits of Bulk Purchasing
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-center text-[#5B6472] leading-8">
            We help organizations simplify procurement with reliable inventory,
            competitive pricing and professional logistics support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
            <div className="bg-[#F7FAFF] rounded-3xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                <HiOutlineClipboardDocumentList className="text-[#0B84FF] text-3xl" />
              </div>

              <h3 className="mt-7 text-[22px] font-bold text-[#071423]">
                Large Inventory
              </h3>

              <p className="mt-4 text-[#5B6472] leading-7">
                Ready stock of refurbished laptops, desktops, monitors and
                servers.
              </p>
            </div>

            <div className="bg-[#F7FAFF] rounded-3xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                <HiOutlineTruck className="text-[#0B84FF] text-3xl" />
              </div>

              <h3 className="mt-7 text-[22px] font-bold text-[#071423]">
                Fast Delivery
              </h3>

              <p className="mt-4 text-[#5B6472] leading-7">
                Reliable local and worldwide shipping with secure packaging.
              </p>
            </div>

            <div className="bg-[#F7FAFF] rounded-3xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                <HiOutlineCurrencyDollar className="text-[#0B84FF] text-3xl" />
              </div>

              <h3 className="mt-7 text-[22px] font-bold text-[#071423]">
                Best Pricing
              </h3>

              <p className="mt-4 text-[#5B6472] leading-7">
                Cost-effective solutions for wholesalers and business partners.
              </p>
            </div>

            <div className="bg-[#F7FAFF] rounded-3xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                <HiOutlineCheckCircle className="text-[#0B84FF] text-3xl" />
              </div>

              <h3 className="mt-7 text-[22px] font-bold text-[#071423]">
                Quality Assured
              </h3>

              <p className="mt-4 text-[#5B6472] leading-7">
                Every product is inspected and tested before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY PARTNER WITH GLOBALTAIL ================= */}

      <section className="bg-[#061326] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
                WHY GLOBALTAIL
              </p>

              <h2 className="mt-4 text-[44px] font-bold text-white leading-tight">
                Your Trusted Partner
                <br />
                For Bulk IT Procurement
              </h2>

              <p className="mt-7 text-[#C8D3E2] leading-8 text-[17px]">
                At Globaltail, we focus on building long-term partnerships by
                providing dependable inventory, transparent pricing and
                exceptional customer service. Our experienced team ensures every
                order is handled professionally from sourcing to delivery.
              </p>
            </div>

            {/* Right */}

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-[38px] font-bold text-[#0B84FF]">5000+</h3>

                <p className="mt-2 text-[#071423] font-semibold">
                  IT Assets Purchased
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-[38px] font-bold text-[#0B84FF]">40+</h3>

                <p className="mt-2 text-[#071423] font-semibold">
                  Global Markets
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-[38px] font-bold text-[#0B84FF]">100%</h3>

                <p className="mt-2 text-[#071423] font-semibold">
                  Quality Checked
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-[38px] font-bold text-[#0B84FF]">24/7</h3>

                <p className="mt-2 text-[#071423] font-semibold">
                  Business Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS CTA ================= */}

      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#F7FAFF] rounded-[32px] p-12 text-center">
            <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
              START TODAY
            </p>

            <h2 className="mt-4 text-[42px] font-bold text-[#071423]">
              Ready to Source IT Equipment in Bulk?
            </h2>

            <p className="mt-6 text-[#5B6472] leading-8 max-w-3xl mx-auto">
              Whether you're a reseller, enterprise or wholesale buyer,
              Globaltail provides reliable refurbished IT equipment, competitive
              pricing and worldwide delivery tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <CTA />

      {/* Footer */}

      <Footer />
    </>
  );
};

export default BulkPurchasing;
