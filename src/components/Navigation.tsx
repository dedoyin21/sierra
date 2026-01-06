import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="w-full flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo - Left */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Sierra Logo" className="h-10 md:h-10 w-auto" />
        </div>

        {/* Center Navigation - Hidden on Mobile */}
        <div className="hidden md:flex gap-8 text-white text-sm absolute left-1/2 transform -translate-x-1/2 font-DMSans">
          <a href="#features" className="hover:opacity-80 transition font-DMSans">
            Your Skin
          </a>
          <a href="#mission" className="hover:opacity-80 transition font-DMSans">
            Our Mission
          </a>
          <a href="#favourites" className="hover:opacity-80 transition font-DMSans">
            Favourites
          </a>
          <a href="#testimonials" className="hover:opacity-80 transition font-DMSans">
            Testimonials
          </a>
          <a href="#faqs" className="hover:opacity-80 transition font-DMSans">
            FAQs
          </a>
        </div>

        {/* Right Side - Button and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden font-DMSans md:block border-2 border-white hover:bg-[#B470C4] text-white px-8 py-2 rounded-[40px] font-medium transition duration-200 text-sm">
            Get Started
          </button>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : <img src='/dashboard.png' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-linear-to-b from-[#C084D0] to-[#B470C4] rounded-lg mx-4 px-6 py-4 font-DMSans">
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:opacity-80 transition font-DMSans">
            Your Skin
          </a>
          <a href="#mission" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:opacity-80 transition font-DMSans">
            Our Mission
          </a>
          <a href="#favourites" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:opacity-80 transition font-DMSans">
            Favourites
          </a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:opacity-80 transition font-DMSans">
            Testimonials
          </a>
          <a href="#faqs" onClick={() => setIsOpen(false)} className="block text-white py-2 hover:opacity-80 transition font-DMSans">
            FAQs
          </a>
          <button className="w-full bg-[#FFCEE9] hover:bg-[#FFCEE9] text-[#000000] px-6 py-2 rounded-[40px] font-medium transition duration-200 text-sm mt-4">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
