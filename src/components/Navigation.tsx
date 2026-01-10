import { useEffect, useState } from 'react';

export function Navigation() {
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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 overflow-hidden
        ${scrolled ? 'backdrop-blur-lg shadow-md' : ''}
      `}
    >
      {/* Hero Background Image */}
      <img
        src="/heromage.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-cover object-[65%_center]"
      />
      
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 py-4">

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
  );
}
