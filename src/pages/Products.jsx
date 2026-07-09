import Navbar from "../layout/Navbar";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

const Products = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="bg-[#061326] pt-44 pb-28">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            OUR PRODUCTS
          </p>

          <h1 className="mt-4 text-white text-[52px] font-bold leading-tight">
            Premium Refurbished
            <br />
            IT Equipment
          </h1>

          <p className="mt-6 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            Explore our extensive range of professionally refurbished
            laptops, desktops, servers, networking devices, monitors,
            storage solutions and accessories. Every product is tested,
            graded and ready for business use.
          </p>

        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase text-[#0B84FF] tracking-[2px] font-bold text-sm">
            FEATURED PRODUCTS
          </p>

          <h2 className="mt-3 text-[44px] font-bold text-[#071423]">
            Browse Our IT Equipment
          </h2>

          <p className="mt-5 max-w-3xl text-[#5B6472] text-[17px] leading-8">
            We provide high-quality refurbished IT equipment sourced from
            leading global brands. Every device undergoes professional
            testing and quality inspection before shipment to ensure
            outstanding performance and reliability.
          </p>

          {/* Product Cards Start */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                        {/* Card 1 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src={product1}
                alt="Laptops"
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071423]">
                  Laptops
                </h3>

                <p className="mt-3 text-[#5B6472] leading-7">
                  Dell, HP, Lenovo, Apple and other enterprise-grade refurbished laptops.
                </p>
              </div>
            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src={product2}
                alt="Desktop Computers"
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071423]">
                  Desktop Computers
                </h3>

                <p className="mt-3 text-[#5B6472] leading-7">
                  Reliable business desktops designed for office and enterprise environments.
                </p>
              </div>
            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src={product3}
                alt="Monitors"
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071423]">
                  Monitors
                </h3>

                <p className="mt-3 text-[#5B6472] leading-7">
                  High-quality LCD and LED monitors for professional workspaces.
                </p>
              </div>
            </div>

            {/* Card 4 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src={product4}
                alt="Servers"
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071423]">
                  Servers
                </h3>

                <p className="mt-3 text-[#5B6472] leading-7">
                  Enterprise rack and tower servers for modern IT infrastructure.
                </p>
              </div>
            </div>

            {/* Card 5 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src={product5}
                alt="Network Switches"
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071423]">
                  Network Switches
                </h3>

                <p className="mt-3 text-[#5B6472] leading-7">
                  Managed and unmanaged switches for secure and scalable networking.
                </p>
              </div>
            </div>

            {/* Card 6 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src={product6}
                alt="Storage Devices"
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071423]">
                  HDD & SSD
                </h3>

                <p className="mt-3 text-[#5B6472] leading-7">
                  Fast and reliable storage solutions including HDDs and SSDs.
                </p>
              </div>
            </div>

            {/* Card 7 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src={product7}
                alt="Docking Stations"
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071423]">
                  Docking Stations
                </h3>

                <p className="mt-3 text-[#5B6472] leading-7">
                  Universal docking stations for enhanced productivity and connectivity.
                </p>
              </div>
            </div>

            {/* Card 8 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src={product8}
                alt="IT Accessories"
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071423]">
                  IT Accessories
                </h3>

                <p className="mt-3 text-[#5B6472] leading-7">
                  Chargers, keyboards, mice, cables, adapters and many other accessories.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>
      {/* ================= PRODUCTS WE OFFER ================= */}

<section className="bg-[#F7FAFF] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm text-center">
      PRODUCT CATEGORIES
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Products We Offer
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-center text-[#5B6472] leading-8">
      We supply a wide selection of refurbished IT products for
      businesses, wholesalers and IT resellers around the world.
    </p>

    <div className="grid md:grid-cols-3 gap-10 mt-14">

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-[#071423]">
          Computers
        </h3>

        <ul className="mt-6 space-y-3 text-[#5B6472]">
          <li>✓ Business Laptops</li>
          <li>✓ Desktop Computers</li>
          <li>✓ All-in-One PCs</li>
          <li>✓ Workstations</li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-[#071423]">
          Infrastructure
        </h3>

        <ul className="mt-6 space-y-3 text-[#5B6472]">
          <li>✓ Rack Servers</li>
          <li>✓ Tower Servers</li>
          <li>✓ Network Switches</li>
          <li>✓ Routers</li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-[#071423]">
          Components
        </h3>

        <ul className="mt-6 space-y-3 text-[#5B6472]">
          <li>✓ HDD & SSD</li>
          <li>✓ RAM Modules</li>
          <li>✓ Docking Stations</li>
          <li>✓ Keyboards & Mice</li>
          <li>✓ Chargers & Adapters</li>
        </ul>
      </div>

    </div>

  </div>

</section>

{/* ================= WHY CHOOSE OUR PRODUCTS ================= */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm text-center">
      WHY CHOOSE US
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Why Choose Our Products
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {/* Card 1 */}

      <div className="rounded-3xl border border-[#E5ECF5] p-8 text-center hover:shadow-xl transition">

        <div className="w-16 h-16 mx-auto rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-3xl">
          ✓
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#071423]">
          Fully Tested
        </h3>

        <p className="mt-4 text-[#5B6472] leading-8">
          Every product is carefully inspected, tested and graded by our
          experienced technicians before shipment.
        </p>

      </div>

      {/* Card 2 */}

      <div className="rounded-3xl border border-[#E5ECF5] p-8 text-center hover:shadow-xl transition">

        <div className="w-16 h-16 mx-auto rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-3xl">
          ★
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#071423]">
          Business Grade
        </h3>

        <p className="mt-4 text-[#5B6472] leading-8">
          We supply enterprise-quality IT equipment from trusted global
          brands including Dell, HP, Lenovo and Cisco.
        </p>

      </div>

      {/* Card 3 */}

      <div className="rounded-3xl border border-[#E5ECF5] p-8 text-center hover:shadow-xl transition">

        <div className="w-16 h-16 mx-auto rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-3xl">
          🌍
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#071423]">
          Worldwide Delivery
        </h3>

        <p className="mt-4 text-[#5B6472] leading-8">
          Secure packaging, reliable logistics and fast international
          shipping for businesses across the globe.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* ================= FAQ ================= */}

      <section className="bg-[#F7FAFF] py-20">

        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm text-center">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
            Common Questions
          </h2>

          <div className="mt-14 space-y-6">

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <h3 className="text-[22px] font-bold text-[#071423]">
                Do you supply IT equipment in bulk?
              </h3>

              <p className="mt-4 text-[#5B6472] leading-8">
                Yes. We specialize in supplying large quantities of
                refurbished laptops, desktops, servers, networking
                equipment and accessories for businesses worldwide.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <h3 className="text-[22px] font-bold text-[#071423]">
                Are all products tested before shipping?
              </h3>

              <p className="mt-4 text-[#5B6472] leading-8">
                Absolutely. Every device is inspected, professionally
                refurbished and quality tested before leaving our
                warehouse.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <h3 className="text-[22px] font-bold text-[#071423]">
                Do you offer international shipping?
              </h3>

              <p className="mt-4 text-[#5B6472] leading-8">
                Yes. We provide secure packaging and reliable worldwide
                shipping for businesses, distributors and wholesalers.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <h3 className="text-[22px] font-bold text-[#071423]">
                Which brands do you supply?
              </h3>

              <p className="mt-4 text-[#5B6472] leading-8">
                We regularly supply products from Dell, HP, Lenovo,
                Apple, Cisco and many other trusted enterprise brands.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <CTA />

      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  );
};

export default Products;