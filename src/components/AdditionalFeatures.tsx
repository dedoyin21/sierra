export function AdditionalFeatures() {
  const benefits = [
    "Cleanser matched to your skin type",
    "Moisturizer with active ingredients",
    "Optional treatments for target concerns",
  ];

  return (
    <section className="w-full bg-gray-50 px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-light mb-4 md:mb-6 text-gray-800">
              Achieve a Two-Quick Skincare Routine
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Skincare doesn't have to be complicated. With our science-backed
              approach, just two simple steps deliver professional-grade results.
              Our curated routines work with your skin, not against it.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#C084D0] font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 text-sm md:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Image */}
          <div className="w-full">
            <img
              src="/heromage.svg"
              alt="Skincare Routine"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
