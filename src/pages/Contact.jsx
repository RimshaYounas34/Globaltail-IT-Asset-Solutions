import { useState } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "../layout/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      showNotification("error", "Please fill all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_pksz01e",
        "template_szg0okj",
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "50biiev4TaRa0_WRA",
      )
      .then(() => {
        showNotification("success", "Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setLoading(false);
      })
      .catch(() => {
        showNotification("error", "Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="relative overflow-hidden bg-[#061326] pt-20 pb-24">
        {/* Background Effects */}

        <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-[#0B84FF]/10 blur-3xl"></div>

        <div className="absolute -bottom-16 left-0 w-60 h-60 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="mt-5 inline-block rounded-full border border-[#0B84FF]/30 bg-[#0B84FF]/10 px-5 py-2 text-[13px] font-semibold uppercase tracking-[2px] text-[#5EB3FF]">
            Contact Globaltail
          </span>

          <h1 className="mt-6 text-white text-[42px] md:text-[56px] lg:text-[60px] font-bold leading-[1.15]">
            Let's Build Something
            <br />
            Great Together
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[#C8D3E2] text-[17px] leading-8">
            Whether you're looking to buy refurbished IT equipment, sell retired
            assets, or establish a long-term partnership, our team is ready to
            assist you with reliable and professional solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-[#0B84FF] px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#086dd6]"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F7FAFF] py-24 -mt-12">
        <div className="max-w-3xl mx-auto px-6">
          {notification.show && (
            <div
              className={`mb-8 rounded-xl p-4 text-center text-white font-semibold ${
                notification.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {notification.message}
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-12">
            <p className="uppercase text-[#0B84FF] font-bold text-sm tracking-[1px]">
              SEND MESSAGE
            </p>

            <h2 className="mt-2 text-[36px] font-bold text-[#071423]">
              Let's Talk
            </h2>

            <p className="mt-3 text-[#5B6472] leading-7">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={sendMessage} className="mt-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-14 rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full h-14 rounded-xl border border-[#D8E2EF] px-5 outline-none focus:border-[#0B84FF]"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#D8E2EF] p-5 outline-none resize-none focus:border-[#0B84FF]"
              />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-xl bg-[#0B84FF] hover:bg-[#006FE6] text-white font-semibold transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-[14px] text-[#6B7280]">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
