import { useEffect, useState } from 'react';

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for blur background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Image Background */}
      <img
        src="/heromage.svg"
        alt="Woman with skincare product"
        className="absolute inset-0 w-full h-full object-cover object-[65%_center] md:object-[center_top]"
      />
      
      {/* Navigation Bar with blur effect */}
      <nav
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/5
          ${scrolled ? 'backdrop-blur-lg shadow-md' : ''}
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Sierra Logo"
              className="h-8 sm:h-9 md:h-10 w-auto"
            />
          </div>

          {/* Center Navigation (Tablet & Up) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-white text-sm font-DMSans">
            {['Your Skin', 'Our Mission', 'Favourites', 'Testimonials', 'FAQs'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="hover:opacity-80 transition"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* CTA — visible on iPad & Desktop */}
            <button className="hidden md:block border-2 border-white hover:bg-[#B470C4] text-white px-6 lg:px-8 py-2 rounded-[40px] font-medium transition duration-200 text-sm font-DMSans">
              Get Started
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : <img src="/dashboard.png" alt="Menu" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out
            ${isOpen ? 'max-h-125 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}
          `}
        >
          <div className="mx-4 mb-4 rounded-lg bg-linear-to-b from-[#C084D0] to-[#B470C4] px-6 py-4 font-DMSans origin-top">
            {['Your Skin', 'Our Mission', 'Favourites', 'Testimonials', 'FAQs'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-white py-2 hover:opacity-80 transition"
                >
                  {item}
                </a>
              )
            )}

            <button className="mt-4 w-full rounded-[40px] bg-[#FFCEE9] px-6 py-2 text-sm font-medium text-black transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className=" mx-auto w-full grid md:grid-cols-2 gap-8 items-center md:mt-24">
          {/* Hero Content */}
          <div className="flex flex-col md:justify-center text-white pt-72 xs:pt-20 md:pt-16">
            <h2 className="text-[38px] xs:text-[45px] sm:text-5xl md:text-7xl lg:text-7xl font-medium leading-tight xs:leading-14 md:leading-16 md:pb-6 pb-4 xs:pb-5 font-Manrope">
              Transform Your Skin. Unveil Your True Beauty. 
            </h2>
            <p className="text-[14px] md:text-lg mb-8 xs:mb-16 opacity-90 max-w-md md:pb-6 pb-4 xs:pb-8 font-Manrope pl-[-3] md:pl-0">
              Personalized skin care powered by science. Nourish, protect & glow
              with formulas designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row md:gap-4 gap-4 xs:gap-5 w-full md:w-fit font-DMSans pb-4 xs:pb-8 md:pb-0">
              <button className="bg-[#FFCEE9] hover:bg-[#FFCEE9] text-[18px] text-[#000000] px-6 md:py-2 py-3  rounded-[40px] font-bold transition duration-200 cursor-pointer">
                Take the Skin Quiz
              </button>
              <button className=" text-white bg-[#0000003D] text-[18px] hover:text-[#D4A574] px-6 md:py-2 py-3 rounded-[40px] font-bold transition duration-200 cursor-pointer">
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
