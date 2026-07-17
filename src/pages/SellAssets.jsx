import Navbar from "../layout/Navbar";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";
import { useState,useRef } from "react";
import assets1 from "../assets/assets1.png";
import assets2 from "../assets/assets2.jpg";
import assets3 from "../assets/assets3.jpg";
import assets4 from "../assets/assets4.jpg";
import assets5 from "../assets/assets5.png";
import assets6 from "../assets/assets6.jpg";
import assets7 from "../assets/assets7.jpg";
import assets8 from "../assets/assets8.jpg";
import emailjs from "@emailjs/browser";



const SellAssets = () => {
  const [formData, setFormData] = useState({
  company: "",
  person: "",
  email: "",
  phone: "",
  brand: "",
  quantity: "",
  model: "",
  condition: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const [notification, setNotification] = useState({
  show: false,
  type: "",
  message: "",
});
const showNotification = (type, message) => {
  setNotification({
    show: true,
    type,
    message,
  });

  setTimeout(() => {
    setNotification({
      show: false,
      type: "",
      message: "",
    });
  }, 3000);
};
const sendMessage = (e) => {
  e.preventDefault();

  if (
    !formData.company ||
    !formData.person ||
    !formData.email ||
    !formData.phone ||
    !formData.brand ||
    !formData.quantity ||
    !formData.model ||
    !formData.condition ||
    !formData.message
  ) {
    showNotification("error", "Please fill all fields.");
    return;
  }

  setLoading(true);

  emailjs
    .send(
      "service_pksz01e",
      "template_hqt4m9n",
      {
        company: formData.company,
        person: formData.person,
        email: formData.email,
        phone: formData.phone,
        brand: formData.brand,
        quantity: formData.quantity,
        model: formData.model,
        condition: formData.condition,
        message: formData.message,
      },
      "50biiev4TaRa0_WRA"
    )
    .then(() => {
      showNotification("success", "Request Sent Successfully!");

      setFormData({
        company: "",
        person: "",
        email: "",
        phone: "",
        brand: "",
        quantity: "",
        model: "",
        condition: "",
        message: "",
      });

      setLoading(false);
    })
    .catch(() => {
      showNotification("error", "Failed to send request.");
      setLoading(false);
    });
};
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const formRef = useRef(null);

const scrollToForm = () => {
  formRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
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
     {/* ================= WHAT WE BUY ================= */}

<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#0B84FF] font-bold tracking-[2px] text-sm">
      SELL YOUR IT ASSETS
    </p>

    <h2 className="mt-3 text-[44px] font-bold text-[#071423]">
      What We Buy
    </h2>

    {/* Images */}


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

  <img
    src={assets1}
    alt="IT Asset 1"
    onClick={scrollToForm}
  className="cursor-pointer rounded-3xl h-[280px] w-full object-cover shadow-lg hover:scale-105 transition duration-300"
  />

  <img
    src={assets2}
    alt="IT Asset 2"
    onClick={scrollToForm}
  className="cursor-pointer rounded-3xl h-[280px] w-full object-cover shadow-lg hover:scale-105 transition duration-300"
  />

  <img
    src={assets3}
    alt="IT Asset 3"
    onClick={scrollToForm}
  className="cursor-pointer rounded-3xl h-[280px] w-full object-cover shadow-lg hover:scale-105 transition duration-300"
  />

  <img
    src={assets4}
    alt="IT Asset 4"
    onClick={scrollToForm}
  className="cursor-pointer rounded-3xl h-[280px] w-full object-cover shadow-lg hover:scale-105 transition duration-300"
  />

  <img
    src={assets5}
    alt="IT Asset 5"
    onClick={scrollToForm}
  className="cursor-pointer rounded-3xl h-[280px] w-full object-cover shadow-lg hover:scale-105 transition duration-300"
  />

  <img
    src={assets6}
    alt="IT Asset 6"
    onClick={scrollToForm}
  className="cursor-pointer rounded-3xl h-[280px] w-full object-cover shadow-lg hover:scale-105 transition duration-300"
  />

  <img
    src={assets7}
    alt="IT Asset 7"
    onClick={scrollToForm}
  className="cursor-pointer rounded-3xl h-[280px] w-full object-cover shadow-lg hover:scale-105 transition duration-300"
  />
  <img
    src={assets8}
    alt="IT Asset 8"
    onClick={scrollToForm}
  className="cursor-pointer rounded-3xl h-[280px] w-full object-cover shadow-lg hover:scale-105 transition duration-300"
  />

</div>

    <p className="mt-10 text-[#5B6472] leading-8 text-[17px]">
      At Globaltail, we purchase IT equipment in quantities ranging
      from single pallets to full truckloads, offering competitive
      pricing and a seamless buying process.
    </p>

    {/* We Buy */}

    <div className="mt-12">

      <h3 className="text-[30px] font-bold text-[#071423]">
        We Buy
      </h3>

      <ul className="mt-6 grid md:grid-cols-2 gap-y-4 text-[#5B6472] text-[18px] list-disc pl-6">

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Laptops (All Brands & Grades)
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Desktop Computers
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    All-in-One PCs
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Monitors
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Flat-Screen TVs
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Servers
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Network Switches
  </li>

</ul>

    </div>

    {/* Components */}

    <div className="mt-16">

      <h3 className="text-[30px] font-bold text-[#071423]">
        IT Components & Accessories
      </h3>

      <ul className="mt-6 grid md:grid-cols-2 gap-y-4 text-[#5B6472] text-[18px] list-disc pl-6">

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    AC Power Adapters & Chargers
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    RAM (Memory Modules)
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Hard Disk Drives (HDDs)
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Solid State Drives (SSDs)
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Power Cables
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Data Cables
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Docking Stations
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Keyboards & Mice
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Webcams
  </li>

  <li onClick={scrollToForm} className="cursor-pointer hover:text-[#0B84FF] transition">
    Other IT Accessories
  </li>

</ul>

    </div>

    <p className="mt-12 text-[#5B6472] leading-8 text-[17px]">
      Whether your equipment is used, off-lease, surplus, or retired,
      Globaltail provides a reliable and professional purchasing
      service for businesses worldwide.
    </p>

  </div>
</section>
{/* Sell Form */}

<section  ref={formRef}  className="bg-white py-20 ">

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
      {notification.show && (
  <div
    className={`mb-6 rounded-xl p-4 text-center text-white font-semibold ${
      notification.type === "success"
        ? "bg-green-500"
        : "bg-red-500"
    }`}
  >
    {notification.message}
  </div>
)}

<form onSubmit={sendMessage} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">

          <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Company Name"
  className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
/>

          <input
  type="text"
  name="person"
  value={formData.person}
  onChange={handleChange}
  placeholder="Contact Person"
  className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
/>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
/>

          <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
/>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

<select
  name="brand"
  value={formData.brand}
  onChange={handleChange}
  className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
>
           <option value="">Select Asset</option>
<option value="Laptops (All Brands & Grades)">Laptops (All Brands & Grades)</option>
<option value="Desktop Computers">Desktop Computers</option>
<option value="All-in-One PCs">All-in-One PCs</option>
<option value="Monitors">Monitors</option>
<option value="Flat-Screen TVs">Flat-Screen TVs</option>
<option value="Servers">Servers</option>
<option value="Network Switches">Network Switches</option>
<option value="IT Components & Accessories">IT Components & Accessories</option>
<option value="AC Power Adapters & Chargers">AC Power Adapters & Chargers</option>
<option value="RAM (Memory Modules)">RAM (Memory Modules)</option>
<option value="Hard Disk Drives (HDDs)">Hard Disk Drives (HDDs)</option>
<option value="Solid State Drives (SSDs)">Solid State Drives (SSDs)</option>
<option value="Power Cables">Power Cables</option>
<option value="Data Cables">Data Cables</option>
<option value="Docking Stations">Docking Stations</option>
<option value="Keyboards & Mice">Keyboards & Mice</option>
<option value="Webcams">Webcams</option>
<option value="Other IT Accessories">Other IT Accessories</option>
          </select>

          <input
  type="number"
  name="quantity"
  value={formData.quantity}
  onChange={handleChange}
  placeholder="Quantity"
  className="h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
/>
        </div>

       <input
  type="text"
  name="model"
  value={formData.model}
  onChange={handleChange}
  placeholder="Enter Product Model or Name"
  className="w-full h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
/>

        <select
  name="condition"
  value={formData.condition}
  onChange={handleChange}
  className="w-full h-[58px] rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
>
  <option value="">Condition</option>
  <option value="Excellent">Excellent</option>
  <option value="Good">Good</option>
  <option value="Fair">Fair</option>
  <option value="Not Working">Not Working</option>
</select>


        <textarea
  rows="6"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Additional Details..."
  className="w-full rounded-xl border border-[#D8E2EF] p-5 resize-none outline-none focus:border-[#0B84FF]"
></textarea>

        <div>
          

        </div>

        <button
  type="submit"
  disabled={loading}
  className="w-full h-[60px] rounded-xl bg-[#0B84FF] hover:bg-[#006FE6] text-white font-semibold transition disabled:opacity-60"
>
  {loading ? "Sending..." : "Submit Request"}
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