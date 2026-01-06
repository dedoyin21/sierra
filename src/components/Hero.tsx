export function Hero() {
  return (
    <section className="relative w-full h-full min-h-96 overflow-hidden">
      {/* Hero Image Background */}
      <img
        src="/heromage.svg"
        alt="Woman with skincare product"
        className="absolute inset-0 w-full h-full object-cover md:object-cover object-[65%_center]"
      />
      
      {/* Dark Overlay */}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className=" mx-auto w-full grid md:grid-cols-2 gap-8 items-center pt-12">
          {/* Hero Content */}
          <div className="flex flex-col md:justify-center text-white pt-84 md:pt-0">
            <h2 className="text-[45px] sm:text-5xl md:text-7xl lg:text-7xl font-medium leading-14 md:leading-16 md:pb-6 pb-5 font-Manrope">
              Transform Your Skin. Unveil Your True Beauty. 
            </h2>
            <p className="text-[14px] md:text-lg mb-16 opacity-90 max-w-md md:pb-6 pb-8 font-Manrope pl-[-3] md:pl-0">
              Personalized skin care powered by science. Nourish, protect & glow
              with formulas designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row md:gap-4 gap-5 w-full md:w-fit font-DMSans">
              <button className="bg-[#FFCEE9] hover:bg-[#FFCEE9] text-[18px] text-[#000000] px-6 md:py-2 py-3  rounded-[40px] font-bold transition duration-200">
                Take the Skin Quiz
              </button>
              <button className=" text-white bg-[#0000003D] text-[18px] hover:text-[#D4A574] px-6 md:py-2 py-3 rounded-[40px] font-bold transition duration-200">
                Shop Products
              </button>
            </div>
          </div>

          {/* Empty space on right for image visibility on desktop */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
