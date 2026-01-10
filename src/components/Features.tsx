export function Features() {
  const cards = [
    {
      id: 1,
      title: "Answer a few quick questions",
      description:
        "Tell us about your skin type, lifestyle, and specific concerns. Our short quiz takes just minutes and helps us understand what your skin truly needs.",
    
      image: "/darkskin.png",},
    {
      id: 2,
      title: "Get matched with your formula",
      description:
        "Based on your answers, we’ll recommend a personalized routine with ingredients selected to target your unique skin goals.",
    
      image: "/lightskin.png",},
    {
      id: 3,
      title: "See your skin results in weeks",
      description:
        "Consistency pays off. With your tailored routine, you’ll notice visible improvements in texture, tone, and hydration — often within just a few weeks.",
    
      image: "/lighterskin.png",},
  ];

  return (
    <section id="features" className="w-full bg-white px-4 py-12 md:py-32 font-Manrope">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl md:px-100 px-0 font-medium text-center mb-3 md:mb-4 text-[#926A63] font-Manrope">
            Your Skin Is Unique, Your Routine Should Be Too
          </h2>
          
          <p className="text-center text-[#292929] text-[18px] sm:text-base md:text-sm mx-auto md:px-88 pt-4 pb-6">
            We don't believe in one-size-fits-all skincare. Take our quick skin
            quiz to discover a routine tailored to your skin type, concerns, and
            goals, all backed by science.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 md:px-14 md:pb-14">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-xl h-124 lg:h-102"
            >
              <img
                src={card.image || '/feature-placeholder.png'}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-6 text-white">
                <h3 className="text-3xl md:text-xl font-semibold pb-5 md:mb-4 md:pb-0">
                  {card.title}
                </h3>
                <p className="text-xl md:text-sm opacity-90 line-clamp-3 md:pt-3">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center md:mt-8 pt-9 md:pt-0">
          <button className="bg-[#FFCEE9] hover:bg-[#f3cfe3] text-black px-6 md:px-5 md:py-2 py-3 rounded-[40px] font-medium transition duration-200 text-sm md:text-base">
            Start Your Skin Quiz
          </button>
        </div>
      </div>
    </section>
  );
}
