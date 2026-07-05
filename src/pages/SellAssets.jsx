import Navbar from "../layout/Navbar";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";
import dell1 from "../assets/dell1.jpg";
import dell2 from "../assets/dell2.jpg";
import dell3 from "../assets/dell3.jpg";
import dell4 from "../assets/dell4.jpg";
import hp1 from "../assets/hp1.jpg";
import hp2 from "../assets/hp2.jpg";
import hp3 from "../assets/hp3.jpg";
import hp4 from "../assets/hp4.jpg";

const SellAssets = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            SELL YOUR IT ASSETS
          </p>

          <h1 className="mt-3 text-white text-[52px] font-bold leading-tight">
            Turn Your Used IT
            <br />
            Equipment Into Value
          </h1>

          <p className="mt-5 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            We purchase refurbished and used laptops, desktops,
            servers, networking equipment and other IT assets from
            businesses worldwide.
          </p>

        </div>

      </section>

      {/* Part 2 */}
      {/* Dell Laptops */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-[1px] text-center">
      DELL LAPTOPS
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      We Buy Dell Laptops
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

      {/* Card 1 */}

      <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        <img
          src={dell1}
          alt="Dell Latitude 5400"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            Dell Latitude 5400
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Business Laptop
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        <img
          src={dell2}
          alt="Dell Latitude 7490"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            Dell Latitude 7490
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Business Laptop
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        <img
          src={dell3}
          alt="Dell Precision 5530"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            Dell Precision 5530
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Mobile Workstation
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        <img
          src={dell4}
          alt="Dell XPS 13"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            Dell XPS 13
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Premium Ultrabook
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* HP Laptops */}

<section className="bg-[#F7FAFF] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-[1px] text-center">
      HP LAPTOPS
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      We Buy HP Laptops
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

      {/* Card 1 */}

      <div className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">

        <img
          src={hp1}
          alt="HP EliteBook 840 G6"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            HP EliteBook 840 G6
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Business Laptop
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">

        <img
          src={hp2}
          alt="HP EliteBook 850 G5"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            HP EliteBook 850 G5
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Business Laptop
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">

        <img
          src={hp3}
          alt="HP ProBook 450 G7"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            HP ProBook 450 G7
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Business Laptop
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">

        <img
          src={hp4}
          alt="HP ZBook 15 G5"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            HP ZBook 15 G5
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Mobile Workstation
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Sell Form */}

<section className="bg-white py-20">

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-[1px]">
        REQUEST A QUOTE
      </p>

      <h2 className="mt-3 text-[42px] font-bold text-[#071423]">
        Sell Your IT Assets
      </h2>

      <p className="mt-4 text-[#5B6472] max-w-2xl mx-auto leading-8">
        Fill out the form below and our team will contact you with the
        best possible offer for your IT equipment.
      </p>

    </div>

    <div className="mt-14 bg-[#F7FAFF] rounded-3xl p-10 shadow-lg">

      <form className="space-y-6">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Company Name"
            className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
          />

          <input
            type="text"
            placeholder="Contact Person"
            className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="email"
            placeholder="Email Address"
            className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <select className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]">

            <option>Select Brand</option>

            <option>Dell</option>

            <option>HP</option>

          </select>

          <input
            type="number"
            placeholder="Quantity"
            className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
          />

        </div>

        <input
          type="text"
          placeholder="Laptop Model (Example: Dell Latitude 5400)"
          className="w-full h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
        />

        <select className="w-full h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]">

          <option>Condition</option>

          <option>Excellent</option>

          <option>Good</option>

          <option>Fair</option>

          <option>Not Working</option>

        </select>

        <textarea
          rows="6"
          placeholder="Additional Details..."
          className="w-full rounded-xl border border-[#D8E2EF] p-5 resize-none outline-none focus:border-[#0B84FF]"
        ></textarea>

        <div>

          <label className="block mb-3 font-semibold text-[#071423]">
            Upload Laptop Images
          </label>

          <input
            type="file"
            multiple
            className="w-full border border-dashed border-[#0B84FF] rounded-xl p-5"
          />

        </div>

        <button
          className="w-full h-[60px] rounded-xl bg-[#0B84FF] hover:bg-[#006FE6] text-white font-semibold transition"
        >
          Submit Request
        </button>

      </form>

    </div>

  </div>

</section>

<CTA />

<Footer />

    </>
  );
};

export default SellAssets;