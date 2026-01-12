import { Button } from './Button';

export function ScienceMeetsNature() {
  const benefits = [
    {
      id: 1,
      title: 'Deep Hydration',
      description: 'Locks in moisture and plumps the skin, keeping it supple and smooth.',
      image: '/backlight.jpg',
      icon: '/acid.png',
    },
    {
      id: 2,
      title: 'Brightening',
      description: 'Evens skin tone, reduces the appearance of dark spots and restores radiance.',
      image: '/beauty.jpg',
      icon: '/bright.png',
    },
    {
      id: 3,
      title: 'Calming',
      description: 'Soothes irritation to sensitize redness and protects from environmental stressors.',
      image: '/facegame.jpg',
      icon: '/hammock.png ',
    },
    {
      id: 4,
      title: 'Firming & Repair',
      description: 'Boosts elasticity and collagen to reduce fine lines and restore firmness.',
      image: '/firmrepair.jpg',
      icon: "/sun.png",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-16 md:py-32 font-Manrope">
        {/* Header */}
        <div className="mx-auto">
          <h2 className="font-medium text-center text-[#926A63] text-3xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-4">
             Science Meets Nature
          </h2>
          <p className="text-center mx-auto xl:px-65 text-[#292929] text-base md:text-sm xl:text-lg  2xl:text-[30px] leading-relaxed pb-9">
            Every formula is crafted by dermatologists using ingredients that are both clean
            and clinically proven. No parabens, no harsh chemicals — just skin-loving actives
            that deliver real results.
          </p>
        </div>

        {/* Benefits Grid - Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:px-14 w-full">
          {/* Card 1: Smaller width, centered content */}
          <div className="md:col-span-1">
            <div
              key={benefits[0].id}
              className="group relative overflow-hidden rounded-2xl h-114 md:h-90 2xl:h-134 cursor-pointer"
            >
              <img
                src={benefits[0].image}
                alt={benefits[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center text-center justify-center md:align-middle p-4 md:p-8">
                <img src={benefits[0].icon} alt={`${benefits[0].title} icon`} className="h-45 md:h-25 w-auto 2xl:h-45 md:pb-8 pb-16" />
                <div>
                  <h3 className="text-[25px] md:text-xl font-medium text-white mb-2 2xl:text-5xl 2xl:pb-4">
                    {benefits[0].title}
                  </h3>
                  <p className="text-xl md:text-[13px] text-gray-100 opacity-90 text-center md:px-4 2xl:text-2xl">
                    {benefits[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Wider width, left-aligned content */}
          <div className="md:col-span-2">
            <div
              key={benefits[1].id}
              className="group relative overflow-hidden rounded-2xl h-114 md:h-90 2xl:h-134 cursor-pointer"
            >
              <img
                src={benefits[1].image}
                alt={benefits[1].title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col p-4 md:p-6 justify-center align-middle">
                <img src={benefits[1].icon} alt={`${benefits[1].title} icon`} className="h-45 md:h-25 w-auto 2xl:h-45 self-center md:self-start pb-16 md:pb-8" />
                <div className="md:text-left text-center">
                  <h3 className="text-[25px] md:text-xl font-semibold text-white 2xl:text-5xl 2xl:pb-4 mb-2">
                    {benefits[1].title}
                  </h3>
                  <p className="text-xl md:text-[13px] text-gray-100 opacity-90 text-center md:text-left md:pr-110 pr-0 2xl:text-2xl">
                    {benefits[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Wider width, left-aligned content */}
          <div className="md:col-span-2">
            <div
              key={benefits[2].id}
              className="group relative overflow-hidden rounded-2xl h-114 md:h-90 2xl:h-134 cursor-pointer"
            >
              <img
                src={benefits[2].image}
                alt={benefits[2].title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center align-middle p-4 md:p-6">
                <img src={benefits[2].icon} alt={`${benefits[2].title} icon`} className="h-45 md:h-25 w-auto 2xl:h-45 self-center md:self-start pb-16 md:pb-8" />
                <div className="md:text-left text-center">
                  <h3 className="text-[25px] md:text-xl font-semibold text-white mb-2 2xl:text-5xl 2xl:pb-4">
                    {benefits[2].title}
                  </h3>
                  <p className="text-xl md:text-[13px] text-gray-100 opacity-90 text-center md:text-left md:pr-110 pr-0 2xl:text-2xl">
                    {benefits[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Smaller width, centered content */}
          <div className="md:col-span-1">
            <div
              key={benefits[3].id}
              className="group relative overflow-hidden rounded-2xl h-114 md:h-90 2xl:h-134 cursor-pointer"
            >
              <img
                src={benefits[3].image}
                alt={benefits[3].title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center text-center justify-center align-middle p-4 md:p-6">
                <img src={benefits[3].icon} alt={`${benefits[3].title} icon`} className="h-45 md:h-25 w-auto pb-16 md:pb-8 2xl:h-45" />
                <div>
                  <h3 className="text-[25px] md:text-xl font-semibold text-white mb-2 2xl:text-5xl 2xl:pb-4">
                    {benefits[3].title}
                  </h3>
                  <p className="text-xl md:text-[13px] text-gray-100 opacity-90 text-center md:px-4 2xl:text-2xl">
                    {benefits[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="hidden md:pt-12">
          <Button variant="primary" size="lg">
            Explore Our Ingredients
          </Button>
        </div>
    </section>
  );
}
