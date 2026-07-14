import logoIcon from "../assets/logo1.png";

function Logo({ size = "md" }) {
  const isLarge = size === "lg";

  return (
    <div className="flex items-center">
      {/* Logo */}
      <img
        src={logoIcon}
        alt="GlobalTail Logo"
        className={`object-contain ${
  isLarge
    ? "w-[64px] h-[64px] md:w-[74px] md:h-[74px] lg:w-[92px] lg:h-[92px]"
    : "w-[42px] h-[42px] md:w-[50px] md:h-[50px] lg:w-[66px] lg:h-[66px]"
}`}
      />

      {/* Vertical Line */}
      <div
        className={`bg-white/60 ${
          isLarge
            ? "ml-2 mr-4 md:mr-5 h-[42px] md:h-[48px] lg:h-[52px] w-[2px]"
            : "ml-1 mr-3 md:mr-4 h-[28px] md:h-[34px] lg:h-[38px] w-[2px]"
        }`}
      />

      {/* Text */}
      <div className="flex flex-col">
        {/* Title */}
        <div className="flex items-end">
          <h1
            className={`font-extrabold leading-none ${
              isLarge
                ? "text-[28px] md:text-[34px] lg:text-[38px] tracking-[0.5px]"
                : "text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.3px]"
            }`}
          >
            <span className="text-white">GLOBAL</span>
            <span className="text-[#1D6CFF]">TAIL</span>
          </h1>

          <span
            className={`text-white font-semibold ml-2 ${
              isLarge
                ? "text-[10px] md:text-[11px] lg:text-[12px] mb-[5px]"
                : "text-[6px] md:text-[7px] lg:text-[8px] mb-[2px]"
            }`}
          >
            LLC
          </span>
        </div>

        {/* Tagline */}
        <div className="flex items-center mt-1 md:mt-2">
          <div className="w-4 md:w-6 lg:w-7 h-[2px] bg-[#1D6CFF]" />

          <p
            className={`mx-2 md:mx-3 uppercase text-white font-medium whitespace-nowrap ${
              isLarge
                ? "text-[7px] md:text-[8px] lg:text-[10px] tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px]"
                : "text-[4px] md:text-[5px] lg:text-[6px] tracking-[1px] md:tracking-[1.5px] lg:tracking-[2px]"
            }`}
          >
            RESPONSIBLE IT ASSET SOLUTIONS
          </p>

          <div className="w-4 md:w-6 lg:w-7 h-[2px] bg-[#1D6CFF]" />
        </div>
      </div>
    </div>
  );
}

export default Logo;