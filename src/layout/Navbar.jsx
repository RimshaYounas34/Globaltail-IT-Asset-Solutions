import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <div className="h-28 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-[16px] font-semibold transition duration-300 ${
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

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <FiSearch
              size={22}
              className="text-white cursor-pointer hover:text-[#0B84FF] duration-300"
            />
            <Link
              to="/sell-assets"
              className="h-[56px] px-8 rounded-md bg-[#0B84FF] text-white font-semibold flex items-center gap-3 hover:bg-blue-700 duration-300"
            >
              SELL YOUR IT ASSETS
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
