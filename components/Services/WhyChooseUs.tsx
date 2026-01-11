const VALUES = [
  {
    title: "Performance-Driven",
    description:
      "Fast, optimized applications built with clean code and modern technologies.",
  },
  {
    title: "User-Centered",
    description:
      "Intuitive interfaces designed to improve engagement and conversion.",
  },
  {
    title: "Future-Ready",
    description: "Scalable solutions that grow seamlessly with your business.",
  },
  {
    title: "Maintainable Code",
    description: "Clean, readable codebases following industry best practices.",
  },
  {
    title: "Transparent Process",
    description: "Clear communication keeping you informed at every stage.",
  },
  {
    title: "Long-Term Partnership",
    description: "Ongoing support and continuous product evolution.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-40 h-[520px] w-[520px]
        rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25
        blur-[120px] transform-gpu"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-gray-600">
            Thoughtfully designed solutions built to create real value
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((item) => (
            <div
              key={item.title}
              className="
                relative rounded-2xl border border-violet-100/50 bg-white p-7
                shadow-md shadow-violet-100/40
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:border-violet-200/80 hover:shadow-xl hover:shadow-violet-200/60
                motion-reduce:transition-none
                transform-gpu contain-paint
              "
              style={{ willChange: "transform" }}
            >
              {/* Hover Gradient */}
              <div
                aria-hidden
                className="
                  pointer-events-none absolute inset-0 rounded-2xl
                  bg-gradient-to-br from-violet-50/40 via-white to-purple-50/30
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              {/* Content */}
              <div className="relative">
                <h3 className="mb-3 text-lg font-bold transition-colors duration-300 hover:text-violet-700">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
