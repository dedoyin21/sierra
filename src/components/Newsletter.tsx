import { useState } from 'react';
import { Button } from './Button';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed with:', email);
      setEmail('');
    }
  };

  return (
    <section className="w-full px-4 py-12 md:py-20 flex justify-center">
      {/* Outer Pink Card */}
      <div className="w-full md:px-16">

        {/* Inner Gradient Background */}
        <div className="w-full bg-linear-to-b from-[#FFD8EE] to-[#FFEAF5] 
        rounded-xl py-12 md:py-20 px-2 md:px-4 text-center">

          {/* Header */}
          <h2 className="text-5xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl
          font-semibold text-[#242424] mb-6 md:px-41">
            Get Glowing Tips, First
            Dibs & Special Offers
          </h2>

          <p className="text-[#292929] text-xl sm:text-base md:text-[18px] py-4 md:py-0 mx-auto md:px-55 md:pt-6">
            Personalized skincare powered by science. Nourish, protect, and glow with formulas designed just for you.
          </p>

          {/* Newsletter Input */}
          <div className="mx-auto md:px-54 md:pt-10">
            {/* Desktop: Button inside input */}
            <div className="hidden md:block relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                className="w-full px-4 sm:px-6 py-3 pr-32 sm:pr-36 rounded-2xl bg-white
                border-2 border-transparent focus:outline-none 
                focus:border-white placeholder-[#292929]"
              />
              <Button
                variant="primary"
                size="md"
                onClick={handleSubscribe}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-8"
              >
                Subscribe
              </Button>
            </div>

            {/* Mobile: Button below input */}
            <div className="md:hidden flex flex-col items-center gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                className="w-full px-4 py-3 rounded-2xl bg-white
                border-2 border-transparent focus:outline-none 
                focus:border-white placeholder-[#292929]"
              />
              <Button
                variant="primary"
                size="md"
                onClick={handleSubscribe}
                className="px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
