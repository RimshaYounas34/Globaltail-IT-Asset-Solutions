import laptopImg from "../assets/Laptop.jpg";
import desktopImg from "../assets/Desktop.jpg";
import monitorImg from "../assets/Monitor.jpg";
import serverImg from "../assets/Server.jpg";
import accessoriesImg from "../assets/accesories.jpg";
import { FiChevronRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const products = [
  {
    image: laptopImg,
    title: "Laptops",
    text: "Dell, HP, Lenovo, Apple & more",
  },
  {
    image: desktopImg,
    title: "Desktop PCs",
    text: "Towers, SFF, All-in-One",
  },
  {
    image: monitorImg,
    title: "Monitors",
    text: "Business LCD & LED Displays",
  },
  {
    image: serverImg,
    title: "Servers",
    text: "Rack & Tower Servers",
  },
  {
    image: accessoriesImg,
    title: "Accessories",
    text: "Adapters, Keyboards & More",
  },
];

const Products = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
          <div>
            <h2 className="mt-2 text-[30px] sm:text-[38px] lg:text-[40px] font-bold leading-tight text-[#071423]">
  Products We Handle
</h2>

          </div>

          <Link
            to="/sell-assets"
            className="w-full sm:w-auto bg-[#0B84FF] hover:bg-[#006FE6] text-white px-8 h-14 rounded-lg font-semibold flex items-center justify-center gap-3 transition duration-300"
          >
            VIEW ALL PRODUCTS
            <FaArrowRight />
          </Link>
        </div>

        {/* Product Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((item, index) => (
            <Link
              key={index}
              to="/sell-assets"
              className="group bg-white border border-[#ECEFF3] rounded-xl px-4 pt-3 pb-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-[190px] block"
            >
              <div className="h-[105px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[90px] object-contain group-hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="mt-2 text-[18px] font-bold text-[#071423]">
                {item.title}
              </h3>

              <div className="mt-1 flex items-center">
                <p className="text-[13px] text-[#050607] truncate flex-1">
                  {item.text}
                </p>

                <FiChevronRight className="ml-2 text-[15px] text-black group-hover:text-[#0B84FF] transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
