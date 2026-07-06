import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Logo from "../common/Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Services",
    "Products",
    "Partnerships",
    "Contact",
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-[16px] font-semibold transition ${
                    isActive ? "text-white" : "text-white hover:text-[#0B84FF]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item}
                    {isActive && (
                      <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-[#0B84FF]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/sell-assets"
              className="h-[56px] px-8 rounded-md bg-[#0B84FF] text-white font-semibold flex items-center gap-3 hover:bg-blue-700 duration-300"
            >
              SELL YOUR IT ASSETS
              <FaArrowRight size={14} />
            </Link>
          </div>
          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="lg:hidden bg-[#071423] rounded-2xl p-6 mt-2 shadow-xl">
            <nav className="flex flex-col gap-6">
              {links.map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#0B84FF] font-semibold"
                      : "text-white font-semibold"
                  }
                >
                  {item}
                </NavLink>
              ))}

              <Link
                to="/sell-assets"
                onClick={() => setMenuOpen(false)}
                className="mt-2 h-[54px] rounded-md bg-[#0B84FF] text-white font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 duration-300"
              >
                SELL YOUR IT ASSETS
                <FaArrowRight />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
