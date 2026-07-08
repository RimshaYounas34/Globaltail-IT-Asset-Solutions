import Navbar from "../layout/Navbar";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";
import {
  HiOutlineComputerDesktop,
  HiOutlineWrenchScrewdriver,
  HiOutlineArrowPath,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

import { FiChevronRight } from "react-icons/fi";
import serviceImg from "../assets/services.png";

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            OUR SERVICES
          </p>

          <h1 className="mt-3 text-white text-[52px] font-bold leading-tight">
            Professional IT
            <br />
            Asset Solutions
          </h1>

          <p className="mt-5 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            We help businesses buy, sell, refurbish and manage IT
            equipment through reliable, secure and sustainable services.
          </p>

        </div>

      </section>
      {/* Services */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
      WHAT WE OFFER
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Our Core Services
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">

      {/* Card 1 */}

      <div className="group bg-white border border-[#E8EDF3] rounded-3xl p-8 hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineComputerDesktop />
        </div>

        <h3 className="mt-8 text-[22px] font-bold text-[#071423]">
          IT Asset Sourcing
        </h3>

        <p className="mt-4 text-[#5B6472] leading-7">
          Bulk sourcing of laptops, desktops, servers and networking equipment.
        </p>

        <div className="mt-8 flex justify-end">
          <FiChevronRight className="text-[22px] group-hover:text-[#0B84FF]" />
        </div>

      </div>

      {/* Card 2 */}

      <div className="group bg-white border border-[#E8EDF3] rounded-3xl p-8 hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineWrenchScrewdriver />
        </div>

        <h3 className="mt-8 text-[22px] font-bold text-[#071423]">
          Refurbishment
        </h3>

        <p className="mt-4 text-[#5B6472] leading-7">
          Professional testing, grading and refurbishment to ensure reliable performance.
        </p>

        <div className="mt-8 flex justify-end">
          <FiChevronRight className="text-[22px] group-hover:text-[#0B84FF]" />
        </div>

      </div>

      {/* Card 3 */}

      <div className="group bg-white border border-[#E8EDF3] rounded-3xl p-8 hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineArrowPath />
        </div>

        <h3 className="mt-8 text-[22px] font-bold text-[#071423]">
          Asset Recovery
        </h3>

        <p className="mt-4 text-[#5B6472] leading-7">
          Helping businesses recover maximum value from retired IT assets.
        </p>

        <div className="mt-8 flex justify-end">
          <FiChevronRight className="text-[22px] group-hover:text-[#0B84FF]" />
        </div>

      </div>

      {/* Card 4 */}

      <div className="group bg-white border border-[#E8EDF3] rounded-3xl p-8 hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineGlobeAlt />
        </div>
<h3 className="mt-8 min-h-[60px] text-[20px] font-bold text-[#071423]">
  Local & Global Delivery
</h3>
<p className="-mt-3 text-[#5B6472] leading-7"> Safe and reliable worldwide delivery for businesses and partners. </p>

        <div className="mt-8 flex justify-end">
          <FiChevronRight className="text-[22px] group-hover:text-[#0B84FF]" />
        </div>

      </div>

    </div>

  </div>

</section>

      {/* Why Choose Our Services */}

<section className="bg-[#F7FAFF] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}

      <div>

        <img
          src={serviceImg}
          alt="Our Services"
          className="w-full h-[560px] rounded-3xl object-cover"
        />

      </div>

      {/* Right Side */}

      <div>

        <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
          WHY CHOOSE US
        </p>

        <h2 className="mt-3 text-[42px] font-bold text-[#071423] leading-tight">
          Reliable IT Solutions
          <br />
          For Modern Businesses
        </h2>

        <p className="mt-6 text-[#5B6472] leading-8">
        We deliver premium-quality IT products to local and global customers through reliable sourcing, certified refurbishment and dependable logistics.
        </p>

        <div className="mt-10 space-y-8">

          {/* Item */}

          <div className="flex gap-5">

            <div className="w-14 h-14 rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-xl flex-shrink-0">
              ✓
            </div>

            <div>

              <h3 className="text-[21px] font-bold text-[#071423]">
                Certified Refurbishment
              </h3>

              <p className="mt-2 text-[#5B6472] leading-7">
                Every device is professionally tested and refurbished.
              </p>

            </div>

          </div>

          {/* Item */}

          <div className="flex gap-5">

            <div className="w-14 h-14 rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-xl flex-shrink-0">
              ✓
            </div>

            <div>

              <h3 className="text-[21px] font-bold text-[#071423]">
                Secure Data Erasure
              </h3>

              <p className="mt-2 text-[#5B6472] leading-7">
                Complete data sanitization before resale or recycling.
              </p>

            </div>

          </div>

          {/* Item */}

          <div className="flex gap-5">

            <div className="w-14 h-14 rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-xl flex-shrink-0">
              ✓
            </div>

            <div>

              <h3 className="text-[21px] font-bold text-[#071423]">
                Local & Global Delivery
              </h3>

              <p className="mt-2 text-[#5B6472] leading-7">
                Delivering premium-quality IT products to local and global customers with reliability and value.
              </p>

            </div>

          </div>

          {/* Item */}

          <div className="flex gap-5">

            <div className="w-14 h-14 rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-xl flex-shrink-0">
              ✓
            </div>

            <div>

              <h3 className="text-[21px] font-bold text-[#071423]">
                Dedicated Business Support
              </h3>

              <p className="mt-2 text-[#5B6472] leading-7">
                Our experienced team supports you from sourcing to delivery.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Working Process */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
      HOW WE WORK
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Our Service Process
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-center text-[#5B6472] leading-8">
      From sourcing and refurbishment to local and global delivery, every step follows a professional and quality-focused process.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {/* Step 1 */}

      <div className="text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">

          <span className="text-[#0B84FF] text-[30px] font-bold">
            01
          </span>

        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Consultation
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          We understand your business needs and recommend the best IT solutions.
        </p>

      </div>

      {/* Step 2 */}

      <div className="text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">

          <span className="text-[#0B84FF] text-[30px] font-bold">
            02
          </span>

        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Inspection
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Every device is tested, repaired and professionally refurbished.
        </p>

      </div>

      {/* Step 3 */}

      <div className="text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">

          <span className="text-[#0B84FF] text-[30px] font-bold">
            03
          </span>

        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Quality Check
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Multiple quality inspections ensure every product meets our standards.
        </p>

      </div>

      {/* Step 4 */}

      <div className="text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">

          <span className="text-[#0B84FF] text-[30px] font-bold">
            04
          </span>

        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Delivery
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Safe packaging and reliable local and worldwide delivery to your destination.
        </p>

      </div>

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

export default Services;