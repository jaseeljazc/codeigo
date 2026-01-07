const Steps = () => {
  return (
    <section className="py-28 md:py-40 ">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Badge */}

        {/* Heading */}
        <div className="heading-font text-center text-gray-900 text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
          Intentional. Precise. Elegant.
        </div>

        {/* Subtext */}
        <div className="text-gray-500 text-center max-w-md mx-auto mb-24">
          Every engagement follows our deliberate 4-phase process designed to
          eliminate waste while maximizing creative potential.
        </div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[130px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10
               place-items-center md:place-items-start
               ml-0 md:ml-20"
          >
            {/* Step 1 */}
            <div className=" flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-7 flex flex-col items-center md:items-start">
                <div className="inline-block mb-3">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl font-semibold tabular-nums">
                      01
                    </span>
                  </div>
                </div>

                <div className="uppercase font-mono text-indigo-500 text-[11px] tracking-[0.14em] font-bold mb-2">
                  IMMERSION
                </div>

                <div className="heading-font text-2xl font-semibold text-gray-800">
                  Discover
                </div>
              </div>

              <div className="space-y-2.5 text-gray-500 text-[15px]">
                <div>Stakeholder interviews</div>
                <div>Technical discovery</div>
                <div>User research</div>
                <div>Competitive analysis</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className=" flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-7 flex flex-col items-center md:items-start">
                <div className="inline-block mb-3">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl font-semibold tabular-nums">
                      02
                    </span>
                  </div>
                </div>

                <div className="uppercase font-mono text-indigo-500 text-[11px] tracking-[0.14em] font-bold mb-2">
                  FOUNDATION
                </div>

                <div className="heading-font text-2xl font-semibold text-gray-800">
                  Blueprint
                </div>
              </div>

              <div className="space-y-2.5 text-gray-500 text-[15px]">
                <div>System architecture</div>
                <div>Component inventory</div>
                <div>Design token creation</div>
                <div>Technical specification</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className=" flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-7 flex flex-col items-center md:items-start">
                <div className="inline-block mb-3">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl font-semibold tabular-nums">
                      03
                    </span>
                  </div>
                </div>

                <div className="uppercase font-mono text-indigo-500 text-[11px] tracking-[0.14em] font-bold mb-2">
                  CREATION
                </div>

                <div className="heading-font text-2xl font-semibold text-gray-800">
                  Construct
                </div>
              </div>

              <div className="space-y-2.5 text-gray-500 text-[15px]">
                <div>Component development</div>
                <div>Pattern documentation</div>
                <div>Accessibility audit</div>
                <div>Motion specification</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className=" flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-7 flex flex-col items-center md:items-start">
                <div className="inline-block mb-3">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl font-semibold tabular-nums">
                      04
                    </span>
                  </div>
                </div>

                <div className="uppercase font-mono text-indigo-500 text-[11px] tracking-[0.14em] font-bold mb-2">
                  TRANSITION
                </div>

                <div className="heading-font text-2xl font-semibold text-gray-800">
                  Integrate
                </div>
              </div>

              <div className="space-y-2.5 text-gray-500 text-[15px]">
                <div>Developer handoff</div>
                <div>Design system portal</div>
                <div>Governance planning</div>
                <div>Ongoing support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
