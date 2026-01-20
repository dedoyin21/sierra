export function Features() {
  const cards = [
    {
      id: 1,
      title: "Answer a few quick questions",
      description:
        "Tell us about your skin type, lifestyle, and specific concerns. Our short quiz takes just minutes and helps us understand what your skin truly needs.",
      image: "/darkskin.png",
    },
    {
      id: 2,
      title: "Get matched with your formula",
      description:
        "Based on your answers, we’ll recommend a personalized routine with ingredients selected to target your unique skin goals.",
      image: "/lightskin.png",
    },
    {
      id: 3,
      title: "See your skin results in weeks",
      description:
        "Consistency pays off. With your tailored routine, you’ll notice visible improvements in texture, tone, and hydration — often within just a few weeks.",
      image: "/lighterskin.png",
    },
  ];

  return (
    <section
      id="yourskin"
      className="w-full bg-white px-4 py-16 md:py-32 font-Manrope"
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="font-medium xl:px-72 text-[#926A63] text-3xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-4">
            Your Skin Is Unique, Your Routine Should Be Too
          </h2>

          <p className="mx-auto xl:px-62 text-[#292929] text-base md:text-sm xl:text-lg 
              2xl:text-[30px] leading-relaxed pb-4
              2xl:pb-6">
            We don't believe in one-size-fits-all skincare. Take our quick skin
            quiz to discover a routine tailored to your skin type, concerns, and
            goals, all backed by science.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6 md:gap-8
            xl:gap-12 2xl:gap-16
            px-0 md:px-14
          "
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`
                group relative overflow-hidden rounded-2xl
                h-105 md:h-95 xl:h-120 2xl:h-140 w-full

                ${
                  card.id === 3
                    ? 'md:col-span-2 md:mx-auto md:max-w-[48%] lg:col-span-1 lg:max-w-none md:mt-6'
                    : ''
                }
              `}
            >
              <img
                src={card.image}
                alt={card.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  lg:group-hover:scale-[1.04]
                "
              />

              {/* Overlay — BACK TO BOTTOM */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-t from-black/70 via-black/20 to-transparent
                  flex flex-col justify-end
                  p-4 xl:px-4 xl:py-6
                  text-white
                "
              >
                <h3 className="font-semibold text-xl md:text-xl xl:text-xl 2xl:text-3xl pb-2">
                  {card.title}
                </h3>

                <p className="opacity-90 text-sm md:text-sm xl:text-[14px] 2xl:text-2xl leading-relaxed max-w-[90%]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA (hidden on desktop) */}
        <div className="text-center pt-16 xl:pt-16 lg:pt-14">
          <button className="bg-[#FFCEE9] hover:bg-[#f3cfe3] text-black font-medium 2xl:text-2xl
            px-8 py-3 rounded-full text-sm md:text-base transition">
            Start Your Skin Quiz
          </button>
        </div>
      </div>
    </section>
  );
}
