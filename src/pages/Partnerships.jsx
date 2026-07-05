import Navbar from "../layout/Navbar";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";
import partnerImg from "../assets/partner.jpg";
import {
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const Partnerships = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            PARTNERSHIPS
          </p>

          <h1 className="mt-3 text-white text-[52px] font-bold leading-tight">
            Grow Together With
            <br />
            Globaltail
          </h1>

          <p className="mt-5 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            We build long-term partnerships with IT suppliers,
            distributors, recyclers and businesses around the world.
          </p>

        </div>

      </section>

      {/* Part 2 */}
      {/* Partnership */}

<section className="bg-white py-20">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>

<p className="uppercase text-[#0B84FF] font-bold text-sm">
WHO CAN PARTNER
</p>

<h2 className="mt-3 text-[42px] font-bold text-[#071423] leading-tight">
Let's Build Strong
Business Relationships
</h2>

<p className="mt-6 text-[#5B6472] leading-8">
We work with organizations looking for trusted
partners in refurbished IT equipment and
sustainable asset management.
</p>

<div className="mt-10 space-y-5">

<div className="flex items-center gap-4">
<div className="w-3 h-3 rounded-full bg-[#0B84FF]"></div>
<p className="text-[#071423] font-semibold">
IT Equipment Suppliers
</p>
</div>

<div className="flex items-center gap-4">
<div className="w-3 h-3 rounded-full bg-[#0B84FF]"></div>
<p className="text-[#071423] font-semibold">
Wholesale Buyers
</p>
</div>

<div className="flex items-center gap-4">
<div className="w-3 h-3 rounded-full bg-[#0B84FF]"></div>
<p className="text-[#071423] font-semibold">
Recycling Companies
</p>
</div>

<div className="flex items-center gap-4">
<div className="w-3 h-3 rounded-full bg-[#0B84FF]"></div>
<p className="text-[#071423] font-semibold">
International Distributors
</p>
</div>

</div>

</div>

<div>

<img
src={partnerImg}
alt=""
className="w-full h-[550px] rounded-3xl object-cover"
/>

</div>

</div>

</div>

</section>
{/* Partnership Benefits */}

<section className="bg-[#F7FAFF] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-[1px] text-center">
      WHY PARTNER WITH US
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Benefits of Working With Globaltail
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-center text-[#5B6472] leading-8">
      We believe in long-term business relationships built on trust,
      transparency and consistent product quality.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {/* Card 1 */}

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineGlobeAlt />
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Global Network
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Expand your business through our worldwide partner network.
        </p>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineShieldCheck />
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Trusted Quality
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Professionally tested and certified IT equipment you can trust.
        </p>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineTruck />
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Fast Logistics
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Efficient international shipping and reliable order fulfillment.
        </p>

      </div>

      {/* Card 4 */}

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineUserGroup />
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Dedicated Support
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Our experienced team supports every stage of your partnership.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Partnership Process */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-[1px] text-center">
      HOW IT WORKS
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Partnership Process
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-center text-[#5B6472] leading-8">
      Becoming our partner is simple. We focus on transparency,
      efficiency and long-term collaboration.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {/* Step 1 */}

      <div className="text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-[#0B84FF] text-white text-3xl font-bold flex items-center justify-center">
          1
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Contact Us
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Share your business requirements and partnership goals.
        </p>

      </div>

      {/* Step 2 */}

      <div className="text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-[#0B84FF] text-white text-3xl font-bold flex items-center justify-center">
          2
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Evaluation
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Our team reviews your inquiry and identifies opportunities.
        </p>

      </div>

      {/* Step 3 */}

      <div className="text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-[#0B84FF] text-white text-3xl font-bold flex items-center justify-center">
          3
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Agreement
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Finalize partnership terms and establish collaboration.
        </p>

      </div>

      {/* Step 4 */}

      <div className="text-center">

        <div className="mx-auto w-20 h-20 rounded-full bg-[#0B84FF] text-white text-3xl font-bold flex items-center justify-center">
          4
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
          Grow Together
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7">
          Build a successful long-term business relationship with us.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Partnership CTA */}

<section className="bg-[#061326] py-20">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-white text-[44px] font-bold">
      Ready To Become Our Partner?
    </h2>

    <p className="mt-5 text-[#C8D3E2] text-[17px] leading-8">
      Let's discuss how we can build a successful partnership together.
    </p>

    <div className="mt-10">

      <a
        href="/contact"
        className="inline-flex items-center gap-3 bg-[#0B84FF] hover:bg-[#006FE6] transition text-white font-semibold px-10 h-[58px] rounded-lg"
      >
        Contact Us
      </a>

    </div>

  </div>

</section>

<CTA />

<Footer />

    </>
  );
};

export default Partnerships;