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
import { useState } from "react";
import emailjs from "@emailjs/browser";
import monitor1 from "../assets/monitor1.jpg";
import monitor2 from "../assets/monitor2.jpg";
import monitor3 from "../assets/monitor3.jpg";
import monitor4 from "../assets/monitor4.jpg";


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
      "service_kmqww56",
      "template_bb02pka",
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
      "vARhTg6jI9rtgLq_K"
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
{/* Monitors */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-[1px] text-center">
      MONITORS
    </p>

    <h2 className="mt-3 text-center text-[42px] font-bold text-[#071423]">
      We Buy Monitors
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

      {/* Card 1 */}

      <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        <img
          src={monitor1}
          alt="Dell Monitor"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            Dell P2419H
          </h3>

          <p className="mt-2 text-[#5B6472]">
            24" Professional Monitor
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        <img
          src={monitor2}
          alt="HP Monitor"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            HP EliteDisplay E243
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Business Monitor
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        <img
          src={monitor3}
          alt="Lenovo Monitor"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            Lenovo ThinkVision
          </h3>

          <p className="mt-2 text-[#5B6472]">
            Full HD Monitor
          </p>

        </div>

      </div>

      {/* Card 4 */}

      <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

        <img
          src={monitor4}
          alt="LG Monitor"
          className="w-full h-[260px] object-cover"
        />

        <div className="p-6">

          <h3 className="text-[20px] font-bold text-[#071423]">
            LG 24MP400
          </h3>

          <p className="mt-2 text-[#5B6472]">
            IPS LED Monitor
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
            <option value="">Select Brand</option>
<option value="Dell">Dell</option>
<option value="HP">HP</option>
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
  placeholder="Laptop Model (Example: Dell Latitude 5400)"
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