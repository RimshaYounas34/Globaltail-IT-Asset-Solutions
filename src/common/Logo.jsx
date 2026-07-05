function Logo({ size = "md" }) {
  const iconSize = size === "lg" ? "w-14 h-14" : "w-11 h-11";
  const textSize = size === "lg" ? "text-[38px]" : "text-[22px]";
  const tagSize = size === "lg" ? "text-sm" : "text-xs";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${iconSize} shrink-0 rounded-full border-[3px] border-[#1677ff] flex items-center justify-center relative`}
      >
        <div className="w-[55%] h-[55%] rounded-full border-[3px] border-white" />
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#1677ff]" />
      </div>

      <div>
        <h1
          className={`text-white ${textSize} font-extrabold tracking-wide leading-none`}
        >
          GLOBAL<span className="text-[#1677ff]">TAIL</span>
        </h1>

        <p className={`text-gray-300 ${tagSize} mt-1`}>
          Responsible IT Asset Solutions
        </p>
      </div>
    </div>
  );
}

export default Logo;