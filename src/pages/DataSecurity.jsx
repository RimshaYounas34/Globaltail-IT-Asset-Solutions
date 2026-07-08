import Navbar from "../layout/Navbar";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";

import securityImg from "../assets/data-security.png";

import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineServerStack,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";

const DataSecurity = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-[#061326] pt-44 pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[2px] text-[#0B84FF] font-bold text-sm">
            DATA SECURITY
          </p>

          <h1 className="mt-4 text-white text-[42px] lg:text-[58px] font-bold leading-tight">
            Secure Data
            <br />
            Erasure & Protection
          </h1>

          <p className="mt-6 max-w-2xl text-[#C8D3E2] text-[17px] leading-8">
            Protect your business with certified data erasure services that
            ensure complete information security before refurbishment,
            resale or recycling.
          </p>

        </div>

      </section>

      {/* Overview */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div>

            <img
              src={securityImg}
              alt="Data Security"
              className="w-full h-[450px] object-cover rounded-3xl"
            />

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
              SECURITY FIRST
            </p>

            <h2 className="mt-3 text-[40px] font-bold text-[#071423] leading-tight">
              Protecting Your
              <br />
              Valuable Business Data
            </h2>

            <p className="mt-6 text-[#5B6472] leading-8">
              Every device that enters our facility undergoes a secure data
              sanitization process before refurbishment or resale. We follow
              professional industry practices to ensure your confidential
              information is permanently removed.
            </p>

            <p className="mt-5 text-[#5B6472] leading-8">
              Our commitment to data protection helps businesses confidently
              dispose of retired IT assets without worrying about data leaks,
              compliance risks or unauthorized access.
            </p>

          </div>

        </div>

      </section>
            {/* Security Features */}

      <section className="bg-[#F7FAFF] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
            OUR SECURITY STANDARDS
          </p>

          <h2 className="mt-3 text-center text-[40px] font-bold text-[#071423]">
            Your Data Is Always Protected
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-center text-[#5B6472] leading-8">
            We follow strict security procedures to ensure every storage device
            is completely sanitized before reuse or recycling.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">

            {/* Card 1 */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

              <HiOutlineLockClosed className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Secure Erasure
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Permanent removal of sensitive information from all storage
                devices.
              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

              <HiOutlineShieldCheck className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Certified Process
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Every device follows professional data sanitization procedures.
              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

              <HiOutlineServerStack className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Device Tracking
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Every asset is monitored throughout the refurbishment process.
              </p>

            </div>

            {/* Card 4 */}

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

              <HiOutlineDocumentCheck className="text-[#0B84FF] text-5xl" />

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Compliance
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Supporting secure IT asset disposal with industry best practices.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Our Secure Process */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm text-center">
            OUR PROCESS
          </p>

          <h2 className="mt-3 text-center text-[40px] font-bold text-[#071423]">
            Secure Data Handling
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="text-center">

              <div className="mx-auto w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                <span className="text-[#0B84FF] text-[30px] font-bold">
                  01
                </span>

              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Receive Assets
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Devices are safely received and registered.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                <span className="text-[#0B84FF] text-[30px] font-bold">
                  02
                </span>

              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Data Erasure
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Secure wiping removes all confidential information.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                <span className="text-[#0B84FF] text-[30px] font-bold">
                  03
                </span>

              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Verification
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Every device is checked to confirm successful sanitization.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto w-20 h-20 rounded-full bg-[#EEF5FF] flex items-center justify-center">

                <span className="text-[#0B84FF] text-[30px] font-bold">
                  04
                </span>

              </div>

              <h3 className="mt-6 text-[22px] font-bold text-[#071423]">
                Ready for Reuse
              </h3>

              <p className="mt-3 text-[#5B6472] leading-7">
                Devices move to refurbishment or responsible recycling.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Why Choose Globaltail */}

      <section className="bg-[#F7FAFF] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
                WHY GLOBALTAIL
              </p>

              <h2 className="mt-3 text-[40px] font-bold text-[#071423] leading-tight">
                Trusted Data Security
                <br />
                You Can Rely On
              </h2>

              <p className="mt-6 text-[#5B6472] leading-8">
                We understand that protecting your business data is just as
                important as delivering quality IT equipment. Our secure
                sanitization process ensures complete peace of mind before any
                device is refurbished or redistributed.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-start gap-4">

                  <HiOutlineShieldCheck className="text-[#0B84FF] text-3xl mt-1" />

                  <div>

                    <h3 className="font-bold text-[20px] text-[#071423]">
                      Professional Security
                    </h3>

                    <p className="mt-2 text-[#5B6472] leading-7">
                      Every device follows a secure and verified data removal
                      process.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <HiOutlineLockClosed className="text-[#0B84FF] text-3xl mt-1" />

                  <div>

                    <h3 className="font-bold text-[20px] text-[#071423]">
                      Confidential Handling
                    </h3>

                    <p className="mt-2 text-[#5B6472] leading-7">
                      Business information remains protected at every stage.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <HiOutlineDocumentCheck className="text-[#0B84FF] text-3xl mt-1" />

                  <div>

                    <h3 className="font-bold text-[20px] text-[#071423]">
                      Verified Results
                    </h3>

                    <p className="mt-2 text-[#5B6472] leading-7">
                      Every completed process is checked before refurbishment.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-white rounded-3xl shadow-lg p-10">

              <h3 className="text-[28px] font-bold text-[#071423]">
                Why Businesses Trust Us
              </h3>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between border-b pb-3">
                  <span className="text-[#5B6472]">Certified Data Erasure</span>
                  <span className="font-bold text-[#0B84FF]">✓</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-[#5B6472]">Secure Asset Tracking</span>
                  <span className="font-bold text-[#0B84FF]">✓</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-[#5B6472]">Quality Inspection</span>
                  <span className="font-bold text-[#0B84FF]">✓</span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-[#5B6472]">Responsible Recycling</span>
                  <span className="font-bold text-[#0B84FF]">✓</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5B6472]">Worldwide Support</span>
                  <span className="font-bold text-[#0B84FF]">✓</span>
                </div>

              </div>

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

export default DataSecurity;