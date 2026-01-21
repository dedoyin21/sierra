import { useEffect, useState } from 'react';

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/heromage.svg"
        alt="Woman with skincare product"
        className="
          absolute inset-0 w-full h-full object-cover
          object-[65%_center]
          md:object-[center_top]
          2xl:object-center
        "
      />

      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          backdrop-blur-md bg-black/20
          ${scrolled ? 'backdrop-blur-xl shadow-md bg-black/50' : ''}
        `}
      >
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 2xl:py-9">
          {/* Logo */}
          <a href='/'>
            <img src="/logo.png" alt="Sierra Logo" className="h-8 sm:h-9 md:h-10" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 lg:gap-10 2xl:gap-14 lg:text-sm 2xl:text-2xl text-white text-sm font-DMSans">
            {['Your skin', 'Our Mission', 'Favourites', 'Testimonials', 'FAQs'].map(
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

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20learning%20more%20about%20Sierra%20Skincare" target="_blank" rel="noopener noreferrer">
              <button className="hidden md:block border-2 border-white text-white px-6 lg:px-8 py-2 rounded-full text-sm font-DMSans hover:cursor-pointer transition">
                Get Started
              </button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : <img src="/dashboard.png" alt="Menu" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${isOpen ? 'max-h-145 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}
          `}
        >
          <div className="mx-4 mb-4 rounded-xl bg-linear-to-b from-[#FFD8EE] to-[#FFEAF5] px-6 py-4 font-DMSans text-center">
            {['Your Skin', 'Our Mission', 'Favourites', 'Testimonials', 'FAQs'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-black hover:opacity-80"
                >
                  {item}
                </a>
              )
            )}
            <a href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20learning%20more%20about%20Sierra%20Skincare" target="_blank" rel="noopener noreferrer" className="block">
              <button className="mt-12 w-full rounded-full bg-[#FFCEE9] py-2 font-medium text-black">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div
          className="
            mx-auto w-full
            px-6 lg:px-10
            grid md:grid-cols-2 items-center
          "
        >
          {/* Text */}
          <div className="text-white pt-62 md:pt-24">
            <h1
              className="
                font-Manrope font-medium
                text-[38px] sm:text-5xl md:text-6xl
                xl:text-7xl 2xl:text-[100px]
                md:leading-15 leading-9
                pb-6 2xl:leading-22
              "
            >
              Transform Your Skin.
              Unveil Your True Beauty.
            </h1>

            <p
              className="
              
                text-[13px] sm:text-base md:text-lg
                opacity-90 pb-8 text-balance 2xl:text-[30px] 2xl:text-pretty
              "
            >
              Personalized skin care powered by science. Nourish, protect & glow
              with formulas designed just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FFCEE9] text-black px-8 py-3 rounded-full text-lg font-bold">
                Take the Skin Quiz
              </button>
              <button className="bg-black/30 text-white px-8 py-3 rounded-full text-lg font-bold">
                Shop Products
              </button>
            </div>
          </div>

          {/* Right spacer */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
