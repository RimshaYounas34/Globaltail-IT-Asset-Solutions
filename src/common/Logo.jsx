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
          isLarge ? "w-[84px] h-[84px]" : "w-[68px] h-[68px]"
        }`}
      />

      {/* Vertical Line */}
      <div
        className={`bg-white/60 ${
          isLarge
            ? "ml-2 mr-5 h-[52px] w-[2px]"
            : "ml-1 mr-4 h-[38px] w-[2px]"
        }`}
      />

      {/* Text */}
      <div className="flex flex-col">
        {/* Title */}
        <div className="flex items-end">
          <h1
            className={`font-extrabold leading-none ${
              isLarge
                ? "text-[38px] tracking-[0.5px]"
                : "text-[20px] tracking-[0.3px]"
            }`}
          >
            <span className="text-white">GLOBAL</span>
            <span className="text-[#1D6CFF]">TAIL</span>
          </h1>

          <span
            className={`text-white font-semibold ml-2 ${
              isLarge
                ? "text-[12px] mb-[6px]"
                : "text-[8px] mb-[3px]"
            }`}
          >
            LLC
          </span>
        </div>

        {/* Tagline */}
        <div className="flex items-center mt-2">
          <div className="w-7 h-[2px] bg-[#1D6CFF]" />

          <p
            className={`mx-3 uppercase text-white font-medium whitespace-nowrap ${
              isLarge
                ? "text-[10px] tracking-[3px]"
                : "text-[6px] tracking-[2px]"
            }`}
          >
            RESPONSIBLE IT ASSET SOLUTIONS
          </p>

          <div className="w-7 h-[2px] bg-[#1D6CFF]" />
        </div>
      </div>
    </div>
  );
}

export default Logo;