import Navbar from "../layout/Navbar";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";
import service1 from "../assets/services1.jpg";
import service2 from "../assets/services2.jpg";
import service3 from "../assets/services3.jpg";
import service4 from "../assets/services4.jpg";

const Products = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            OUR PRODUCTS
          </p>

          <h1 className="mt-3 text-white text-[52px] font-bold leading-tight">
            Premium Refurbished
            <br />
            IT Equipment
          </h1>

          <p className="mt-5 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            Explore our extensive range of professionally refurbished
            laptops, desktops, servers, monitors and IT accessories
            for businesses worldwide.
          </p>

        </div>

      </section>

      {/* Part 2 */}
      {/* Services Gallery */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
      OUR EXPERTISE
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Inside Our Services
    </h2>

    <p className="mt-5 max-w-3xl mx-auto text-center text-[#5B6472] leading-8">
      Every stage of our refurbishment and distribution process is handled
      with precision to deliver reliable IT equipment worldwide.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      {/* Image 1 */}

      <div className="group overflow-hidden rounded-3xl relative">

        <img
          src={service1}
          alt="IT Asset Sourcing"
          className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/90 to-transparent"></div>

        <div className="absolute bottom-8 left-8">

          <h3 className="text-white text-[26px] font-bold">
            IT Asset Sourcing
          </h3>

          <p className="mt-2 text-[#E6EEF9]">
            Bulk procurement from trusted global partners.
          </p>

        </div>

      </div>

      {/* Image 2 */}

      <div className="group overflow-hidden rounded-3xl relative">

        <img
          src={service2}
          alt="Refurbishment"
          className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/90 to-transparent"></div>

        <div className="absolute bottom-8 left-8">

          <h3 className="text-white text-[26px] font-bold">
            Professional Refurbishment
          </h3>

          <p className="mt-2 text-[#E6EEF9]">
            Complete testing, repair and quality grading.
          </p>

        </div>

      </div>

      {/* Image 3 */}

      <div className="group overflow-hidden rounded-3xl relative">

        <img
          src={service3}
          alt="Quality Check"
          className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/90 to-transparent"></div>

        <div className="absolute bottom-8 left-8">

          <h3 className="text-white text-[26px] font-bold">
            Quality Inspection
          </h3>

          <p className="mt-2 text-[#E6EEF9]">
            Every product undergoes strict quality control.
          </p>

        </div>

      </div>

      {/* Image 4 */}

      <div className="group overflow-hidden rounded-3xl relative">

        <img
          src={service4}
          alt="Global Shipping"
          className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/90 to-transparent"></div>

        <div className="absolute bottom-8 left-8">

          <h3 className="text-white text-[26px] font-bold">
            Worldwide Delivery
          </h3>

          <p className="mt-2 text-[#E6EEF9]">
            Safe packaging and fast international shipping.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* FAQ */}

<section className="bg-[#F7FAFF] py-20">

  <div className="max-w-5xl mx-auto px-6">

    <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
      FREQUENTLY ASKED QUESTIONS
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      Common Questions
    </h2>

    <div className="mt-14 space-y-6">

      {/* FAQ 1 */}

      <div className="bg-white rounded-2xl p-7 border border-[#E8EDF3]">

        <h3 className="text-[20px] font-bold text-[#071423]">
          Do you supply IT equipment in bulk?
        </h3>

        <p className="mt-3 text-[#5B6472] leading-8">
          Yes. We specialize in supplying large quantities of refurbished
          laptops, desktops, servers and IT accessories for businesses.
        </p>

      </div>

      {/* FAQ 2 */}

      <div className="bg-white rounded-2xl p-7 border border-[#E8EDF3]">

        <h3 className="text-[20px] font-bold text-[#071423]">
          Are all products tested?
        </h3>

        <p className="mt-3 text-[#5B6472] leading-8">
          Absolutely. Every device is inspected, tested and professionally
          refurbished before shipment.
        </p>

      </div>

      {/* FAQ 3 */}

      <div className="bg-white rounded-2xl p-7 border border-[#E8EDF3]">

        <h3 className="text-[20px] font-bold text-[#071423]">
          Do you offer international shipping?
        </h3>

        <p className="mt-3 text-[#5B6472] leading-8">
          Yes. We provide safe and reliable worldwide delivery for all
          business orders.
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

export default Products;