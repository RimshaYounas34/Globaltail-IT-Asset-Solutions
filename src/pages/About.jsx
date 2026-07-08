import Navbar from "../layout/Navbar";
import aboutImg from "../assets/about.jpg";
import {
  HiOutlineRocketLaunch,
  HiOutlineEye,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineTruck,
} from "react-icons/hi2";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";
import services2 from "../assets/services2.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="bg-[#061326] pt-36 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            ABOUT GLOBALTAIL
          </p>

          <h1 className="mt-3 text-white text-[52px] font-bold leading-tight">
            Building Sustainable
            <br />
            IT Solutions Worldwide
          </h1>

          <p className="mt-5 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            Globaltail is a trusted supplier of refurbished IT equipment,
            helping businesses source quality technology while promoting a
            sustainable future through responsible IT asset management.
          </p>

        </div>

      </section>
      {/* Company Story */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}

      <div>

        <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
          WHO WE ARE
        </p>

        <h2 className="mt-3 text-[40px] font-bold text-[#071423] leading-tight">
          Trusted Global Partner
          <br />
          For Refurbished
          IT Equipment
        </h2>

        <p className="mt-6 text-[#5B6472] text-[16px] leading-8">
          Globaltail specializes in sourcing, refurbishing and supplying
          premium IT equipment to businesses across the world. We help
          organizations maximize the value of their IT assets while reducing
          electronic waste through responsible refurbishment.
        </p>

        <p className="mt-6 text-[#5B6472] text-[16px] leading-8">
          Every device undergoes a strict inspection and quality assurance
          process before reaching our customers, ensuring reliability,
          performance and long-term value.
        </p>

        <div className="mt-10 flex flex-wrap gap-8">

          <div>
            <h3 className="text-[36px] font-bold text-[#0B84FF]">
              10+
            </h3>

            <p className="mt-1 text-[#5B6472]">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-[36px] font-bold text-[#0B84FF]">
              5000+
            </h3>

            <p className="mt-1 text-[#5B6472]">
              Devices Processed
            </p>
          </div>

          <div>
            <h3 className="text-[36px] font-bold text-[#0B84FF]">
              40+
            </h3>

            <p className="mt-1 text-[#5B6472]">
              Countries Served
            </p>
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="relative">

        <img
          src={aboutImg}
          alt="About Globaltail"
          className="w-full h-[560px] object-cover rounded-3xl"
        />

        <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-8 py-6">

          <h3 className="text-[34px] font-bold text-[#0B84FF]">
            100%
          </h3>

          <p className="mt-2 text-[#5B6472] leading-7">
            Quality Tested
            <br />
            & Data Secure
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Mission & Vision */}

<section className="bg-[#F7FAFF] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
      OUR PURPOSE
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Mission & Vision
    </h2>

    <div className="grid lg:grid-cols-2 gap-8 mt-14">

      {/* Mission */}

      <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineRocketLaunch />
        </div>

        <h3 className="mt-6 text-[28px] font-bold text-[#071423]">
          Our Mission
        </h3>

        <p className="mt-4 text-[#5B6472] leading-8 text-[16px]">
          To provide businesses with reliable refurbished IT equipment,
          reduce electronic waste, and deliver exceptional value through
          responsible technology lifecycle management.
        </p>

      </div>

      {/* Vision */}

      <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-3xl">
          <HiOutlineEye />
        </div>

        <h3 className="mt-6 text-[28px] font-bold text-[#071423]">
          Our Vision
        </h3>

        <p className="mt-4 text-[#5B6472] leading-8 text-[16px]">
          To become the world's most trusted partner for sustainable IT
          asset solutions by giving technology a second life and creating
          long-term value for our partners.
        </p>

      </div>

    </div>

    {/* Core Values */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

      <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">

        <div className="w-14 h-14 mx-auto rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-2xl">
          <HiOutlineShieldCheck />
        </div>

        <h3 className="mt-5 text-[20px] font-bold text-[#071423]">
          Quality
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7 text-[14px]">
          Every device is tested and certified before delivery.
        </p>

      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">

        <div className="w-14 h-14 mx-auto rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-2xl">
          <HiOutlineGlobeAlt />
        </div>

        <h3 className="mt-5 text-[20px] font-bold text-[#071423]">
          Sustainability
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7 text-[14px]">
          Extending the life of technology while reducing e-waste.
        </p>

      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">

        <div className="w-14 h-14 mx-auto rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-2xl">
          <HiOutlineShieldCheck />
        </div>

        <h3 className="mt-5 text-[20px] font-bold text-[#071423]">
          Trust
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7 text-[14px]">
          Long-term partnerships built on honesty and reliability.
        </p>

      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">

        <div className="w-14 h-14 mx-auto rounded-full bg-[#EEF5FF] flex items-center justify-center text-[#0B84FF] text-2xl">
          <HiOutlineRocketLaunch />
        </div>

        <h3 className="mt-5 text-[20px] font-bold text-[#071423]">
          Innovation
        </h3>

        <p className="mt-3 text-[#5B6472] leading-7 text-[14px]">
          Continuously improving our refurbishment and supply process.
        </p>

      </div>

    </div>

  </div>

</section>
{/* Why Choose Globaltail */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}

      <div>

        <img
          src={services2}
          alt="Why Choose Globaltail"
          className="w-full h-[550px] object-cover rounded-3xl"
        />

      </div>

      {/* Right Side */}

      <div>

        <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
          WHY CHOOSE US
        </p>

        <h2 className="mt-3 text-[42px] font-bold text-[#071423] leading-tight">
          Trusted By Businesses
          <br />
          Around The World
        </h2>

        <p className="mt-6 text-[#5B6472] leading-8 text-[16px]">
          We combine quality refurbishment, secure data handling and
          worldwide logistics to deliver reliable IT solutions that
          businesses can trust.
        </p>

        <div className="mt-10 space-y-7">

          <div className="flex gap-5">

            <HiOutlineCheckCircle className="text-[#0B84FF] text-3xl mt-1 flex-shrink-0" />

            <div>

              <h3 className="font-bold text-[20px] text-[#071423]">
                Premium Quality Products
              </h3>

              <p className="mt-2 text-[#5B6472] leading-7">
                Every device is professionally tested before delivery.
              </p>

            </div>

          </div>

          <div className="flex gap-5">

            <HiOutlineShieldCheck className="text-[#0B84FF] text-3xl mt-1 flex-shrink-0" />

            <div>

              <h3 className="font-bold text-[20px] text-[#071423]">
                Secure Data Sanitization
              </h3>

              <p className="mt-2 text-[#5B6472] leading-7">
                Certified data wiping ensures complete security.
              </p>

            </div>

          </div>

          <div className="flex gap-5">

            <HiOutlineTruck className="text-[#0B84FF] text-3xl mt-1 flex-shrink-0" />

            <div>

              <h3 className="font-bold text-[20px] text-[#071423]">
                Fast Global Shipping
              </h3>

              <p className="mt-2 text-[#5B6472] leading-7">
                Reliable worldwide logistics for every order.
              </p>

            </div>

          </div>

          <div className="flex gap-5">

            <HiOutlineGlobeAlt className="text-[#0B84FF] text-3xl mt-1 flex-shrink-0" />

            <div>

              <h3 className="font-bold text-[20px] text-[#071423]">
                Worldwide Partnerships
              </h3>

              <p className="mt-2 text-[#5B6472] leading-7">
                Supporting partners across multiple international markets.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Statistics */}

<section className="bg-[#061326] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-[1px] text-center">
      OUR IMPACT
    </p>

    <h2 className="mt-3 text-center text-white text-[42px] font-bold">
      Numbers That Speak
    </h2>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      <div className="text-center">

        <h3 className="text-[52px] font-bold text-[#0B84FF]">
          10+
        </h3>

        <p className="mt-2 text-[#C7D2E2]">
          Years Experience
        </p>

      </div>

      <div className="text-center">

        <h3 className="text-[52px] font-bold text-[#0B84FF]">
          5000+
        </h3>

        <p className="mt-2 text-[#C7D2E2]">
          Devices Refurbished
        </p>

      </div>

      <div className="text-center">

        <h3 className="text-[52px] font-bold text-[#0B84FF]">
          40+
        </h3>

        <p className="mt-2 text-[#C7D2E2]">
          Countries Served
        </p>

      </div>

      <div className="text-center">

        <h3 className="text-[52px] font-bold text-[#0B84FF]">
          100%
        </h3>

        <p className="mt-2 text-[#C7D2E2]">
          Customer Satisfaction
        </p>

      </div>

    </div>

  </div>

</section>

<CTA />

<Footer />

    </>
  );
};

export default About;