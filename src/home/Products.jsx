import laptopImg from "../assets/Laptop.jpg";
import desktopImg from "../assets/Desktop.jpg";
import monitorImg from "../assets/Monitor.jpg";
import serverImg from "../assets/Server.jpg";
import accessoriesImg from "../assets/Accesories.jpg";
import { FiChevronRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const products = [
  {
    image: laptopImg,
    title: "Laptops",
    desc: "Business-grade refurbished laptops from trusted global brands.",
  },
  {
    image: desktopImg,
    title: "Desktop PCs",
    desc: "Powerful desktop computers for offices and commercial use.",
  },
  {
    image: monitorImg,
    title: "Monitors",
    desc: "High-quality LCD and LED displays in multiple sizes.",
  },
  {
    image: serverImg,
    title: "Servers",
    desc: "Enterprise rack and tower servers for business infrastructure.",
  },
  {
    image: accessoriesImg,
    title: "Accessories",
    desc: "Keyboards, mice, adapters and essential IT accessories.",
  },
];

const Products = () => {
  return (
    <section className="bg-white py-5">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
          <div>

            <p className="uppercase tracking-[1px] text-[#0B84FF] font-bold text-sm">
              PRODUCTS WE HANDLE
            </p>

            <h2 className="mt-1 text-[25px] lg:text-[30px] font-bold leading-tight text-[#071423]">
              Quality Refurbished
              IT Equipment
            </h2>

          </div>

          <button className="bg-[#0B84FF] hover:bg-[#006FE6] text-white px-8 h-14 rounded-lg font-semibold flex items-center gap-3 transition duration-300 whitespace-nowrap">

            VIEW ALL PRODUCTS

            <FaArrowRight />

          </button>

        </div>

        {/* Product Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                     {/* Card 1 */}

<div className="group bg-white border border-[#ECEFF3] rounded-xl px-4 pt-3 pb-4 hover:shadow-md transition-all duration-300 h-[190px]">

  <div className="h-[105px] flex items-center justify-center">
    <img
      src={products[0].image}
      alt={products[0].title}
      className="h-[90px] object-contain group-hover:scale-105 transition"
    />
  </div>

  <h3 className="mt-2 text-[17px] font-bold text-[#071423]">
    {products[0].title}
  </h3>

  <div className="mt-1 flex items-center">
    <p className="text-[13px] text-[#090a0b] truncate flex-1">
      Dell, HP, Lenovo, Apple & more
    </p>

    <FiChevronRight className="ml-2 text-[15px] text-black group-hover:text-[#0B84FF] transition" />
  </div>

</div>

{/* Card 2 */}

<div className="group bg-white border border-[#ECEFF3] rounded-xl px-4 pt-3 pb-4 hover:shadow-md transition-all duration-300 h-[190px]">

  <div className="h-[105px] flex items-center justify-center">
    <img
      src={products[1].image}
      alt={products[1].title}
      className="h-[90px] object-contain group-hover:scale-105 transition"
    />
  </div>

  <h3 className="mt-2 text-[17px] font-bold text-[#071423]">
    {products[1].title}
  </h3>

  <div className="mt-1 flex items-center">
    <p className="text-[13px] text-[#0a0b0d] truncate flex-1">
      Towers, SFF, All-in-One
    </p>

    <FiChevronRight className="ml-2 text-[15px] text-black group-hover:text-[#0B84FF] transition" />
  </div>

</div>
          {/* Card 3 */}

<div className="group bg-white border border-[#ECEFF3] rounded-xl px-4 pt-3 pb-4 hover:shadow-md transition-all duration-300 h-[190px]">

  <div className="h-[105px] flex items-center justify-center">
    <img
      src={products[2].image}
      alt={products[2].title}
      className="h-[90px] object-contain group-hover:scale-105 transition"
    />
  </div>

  <h3 className="mt-2 text-[17px] font-bold text-[#071423]">
    {products[2].title}
  </h3>

  <div className="mt-1 flex items-center">
    <p className="text-[13px] text-[#08080a] truncate flex-1">
      Towers, SFF, All-in-One
    </p>

    <FiChevronRight className="ml-2 text-[15px] text-black group-hover:text-[#0B84FF] transition" />
  </div>

</div>

{/* Card 4 */}

<div className="group bg-white border border-[#ECEFF3] rounded-xl px-4 pt-3 pb-4 hover:shadow-md transition-all duration-300 h-[190px]">

  <div className="h-[105px] flex items-center justify-center">
    <img
      src={products[3].image}
      alt={products[3].title}
      className="h-[90px] object-contain group-hover:scale-105 transition"
    />
  </div>

  <h3 className="mt-2 text-[17px] font-bold text-[#071423]">
    {products[3].title}
  </h3>

  <div className="mt-1 flex items-center">
    <p className="text-[13px] text-[#050506] truncate flex-1">
      Towers, SFF, All-in-One
    </p>

    <FiChevronRight className="ml-2 text-[15px] text-black group-hover:text-[#0B84FF] transition" />
  </div>

</div>

{/* Card 5 */}

<div className="group bg-white border border-[#ECEFF3] rounded-xl px-4 pt-3 pb-4 hover:shadow-md transition-all duration-300 h-[190px]">

  <div className="h-[105px] flex items-center justify-center">
    <img
      src={products[4].image}
      alt={products[4].title}
      className="h-[90px] object-contain group-hover:scale-105 transition"
    />
  </div>

  <h3 className="mt-2 text-[17px] font-bold text-[#071423]">
    {products[4].title}
  </h3>

  <div className="mt-1 flex items-center">
    <p className="text-[13px] text-[#050607] truncate flex-1">
      Towers, SFF, All-in-One
    </p>

    <FiChevronRight className="ml-2 text-[15px] text-black group-hover:text-[#0B84FF] transition" />
  </div>

</div>

        </div>

      </div>

    </section>
  );
};

export default Products;
        