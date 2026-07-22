import Logo from "../common/Logo";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGlobe } from "react-icons/fa";

import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-[#061326] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-5 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[380px_1fr_1fr_1fr_260px] gap-10">
          {/* Logo */}

          <div>
            <div className="scale-100 lg:scale-95 origin-left mt-2 lg:mt-4">
              <Logo />
            </div>
          </div>
          {/* Company */}

          <div>
            <h3 className="text-white font-bold uppercase text-[15px] tracking-wide mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-[#B8C4D4] text-[15px]">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Our Process
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Quality Standards
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Sustainability
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-white font-bold uppercase text-[15px] tracking-wide mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-[#B8C4D4] text-[15px]">
              <li className="hover:text-white cursor-pointer transition">
                IT Asset Purchasing
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Refurbishment
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Wholesale Distribution
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Asset Recovery Solutions
              </li>
            </ul>
          </div>

          {/* Partnerships */}

          <div>
            <h3 className="text-white font-bold uppercase text-[15px] tracking-wide mb-6">
              Partnerships
            </h3>

            <ul className="space-y-4 text-[#B8C4D4] text-[15px]">
              <li className="hover:text-white cursor-pointer transition">
                ITAD Partners
              </li>

              <li className="hover:text-white cursor-pointer transition">
                MSP Partners
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Corporate Partners
              </li>

              <li className="hover:text-white cursor-pointer transition">
                International Partners
              </li>
            </ul>
          </div>
          {/* Contact */}

          <div>
            <h3 className="text-white font-bold uppercase text-[15px] tracking-wide mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-[#B8C4D4]">
              {/* Email */}
              <div className="flex items-start gap-3">
                <HiOutlineEnvelope className="text-[#0B84FF] text-[20px]" />
                <span className="hover:text-white transition cursor-pointer">
                  info@globaltail.com
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6 flex-wrap">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2B3A4D] hover:bg-[#0B84FF] hover:border-[#0B84FF] transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2B3A4D] hover:bg-[#0B84FF] hover:border-[#0B84FF] transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2B3A4D] hover:bg-[#0B84FF] hover:border-[#0B84FF] transition flex items-center justify-center"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1E2D40] flex flex-col md:flex-row items-center md:justify-between text-center md:text-left gap-4">
          <p className="text-[#9CA9BA] text-[13px] sm:text-[14px]">
            © 2024 Globaltail. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8 text-[14px] text-[#9CA9BA]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
