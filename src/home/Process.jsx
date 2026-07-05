import {
  HiOutlineMagnifyingGlass,
  HiOutlineWrenchScrewdriver,
  HiOutlineCube,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

const Process = () => {
  return (
    <section className="bg-[#F7FAFF] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <p className="uppercase text-[#0B84FF] font-bold text-sm">
          HOW IT WORKS
        </p>

        <h2 className="mt-2 text-[35px] font-bold text-[#071423] leading-tight">
          Our Simple 4 Step Process
        </h2>

        {/* Process */}

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                    {/* Step 1 */}

          <div className="relative flex items-start gap-5">

            <div className="w-16 h-16 rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-3xl flex-shrink-0">
              <HiOutlineMagnifyingGlass />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#071423]">
                1. Source
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-[#5B6472]">
                We purchase IT assets
                <br />
                in bulk from trusted
                <br />
                sources.
              </p>
            </div>

            {/* Line */}

            <div className="hidden lg:block absolute top-8 -right-14 w-24 border-t border-[#BFD8FF]">
              <span className="absolute right-0 -top-[5px] w-2 h-2 rounded-full bg-[#BFD8FF]"></span>
            </div>

          </div>

          {/* Step 2 */}

          <div className="relative flex items-start gap-5">

            <div className="w-16 h-16 rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-3xl flex-shrink-0">
              <HiOutlineWrenchScrewdriver />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#071423]">
                2. Inspect & Refurbish
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-[#5B6472]">
                Devices are tested,
                <br />
                refurbished, and graded
                <br />
                by our experts.
              </p>
            </div>

            {/* Line */}

            <div className="hidden lg:block absolute top-8 -right-14 w-24 border-t border-[#BFD8FF]">
              <span className="absolute right-0 -top-[5px] w-2 h-2 rounded-full bg-[#BFD8FF]"></span>
            </div>

          </div>          {/* Step 3 */}

          <div className="relative flex items-start gap-5">

            <div className="w-16 h-16 rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-3xl flex-shrink-0">
              <HiOutlineCube />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#071423]">
                3. Inventory & Quality Check
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-[#5B6472]">
                Every product goes through
                <br />
                a final quality check before
                <br />
                distribution.
              </p>
            </div>

            {/* Line */}

            <div className="hidden lg:block absolute top-8 -right-14 w-24 border-t border-[#BFD8FF]">
              <span className="absolute right-0 -top-[5px] w-2 h-2 rounded-full bg-[#BFD8FF]"></span>
            </div>

          </div>

          {/* Step 4 */}

          <div className="flex items-start gap-5">

            <div className="w-16 h-16 rounded-full bg-[#0B84FF] flex items-center justify-center text-white text-3xl flex-shrink-0">
              <HiOutlineGlobeAlt />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#071423]">
                4. Deliver Worldwide
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-[#5B6472]">
                We ship quality products
                <br />
                to our partners around
                <br />
                the world.
              </p>
            </div>

          </div>
                  </div>

      </div>

    </section>
  );
};

export default Process;