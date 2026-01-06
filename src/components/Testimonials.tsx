"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Evelyn T.',
      image: '/darkgirl.jpg',
      quote: 'The formula is light, clean, and powerful. I noticed a visible difference within a week — fewer breakouts and smoother texture.',
    },
    {
      id: 2,
      name: 'Amina O.',
      image: '/lightgirl.jpg',
      quote: 'I\'ve tried countless products, but this is the first time my skin actually feels balanced and cared for. The glow is real!',
      featured: true,
    },
    {
      id: 3,
      name: 'Lizzie P.',
      image: '/morelight.jpg',
      quote: 'Finally, a brand that understands sensitive skin! No irritation, just pure results. I\'m hooked.',
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-white px-3 sm:px-4 md:px-6 lg:px-8 2xl:px-12 py-8 sm:py-12 md:py-20 lg:py-32 2xl:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl 2xl:text-7xl font-medium font-Manrope text-[#926A63] mb-3 sm:mb-4 md:mb-6">
            Real Results from Real People
          </h2>
          <p className="text-center text-[#292929] text-[18px] px-2 sm:text-base md:text-xl mx-auto md:px-80 pt-4 pb-10 font-Manrope">
            Read why our methods, processes and products are loved by many around the world
          </p>
        </div>

        {/* MOBILE: Slider/Carousel */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            grabCursor={true}
            initialSlide={2}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col h-full pb-4">
                  {/* Image Container */}
                  <div
                    className={`mb-4 sm:mb-6 overflow-hidden rounded-2xl bg-gray-100 ${
                      testimonial.featured
                        ? 'h-130 sm:h-96'
                        : 'h-130 sm:h-96'
                    }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  {!testimonial.featured && (
                    <div className="flex flex-col grow px-6">
                      <p className="text-2xl py-6 sm:text-base font-medium text-[#242424] mb-8">
                        {testimonial.name}
                      </p>
                      <p className="text-xl sm:text-base text-[#242424]">
                        {testimonial.quote}
                      </p>
                    </div>
                  )}

                  {/* Featured testimonial content */}
                  {testimonial.featured && (
                    <div className="bg-[#FFF5FA] rounded-2xl p-4 sm:p-6 px-6">
                      <p className="text-2xl py-3 sm:text-base font-medium text-[#292929] mb-8">
                        {testimonial.name}
                      </p>
                      <p className="text-xl sm:text-base text-[#242424]">
                        {testimonial.quote}
                      </p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-2 lg:gap-4 md:px-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex flex-col h-full ${
                testimonial.featured
                  ? 'lg:col-span-1 lg:row-span-2'
                  : ''
              }`}
            >
              {/* Image Container */}
              <div
                className={`mb-4 sm:mb-6 md:mb-8 overflow-hidden rounded-2xl bg-gray-100 ${
                  testimonial.featured
                    ? 'h-52 sm:h-60 md:h-56 lg:h-88 xl:h-114'
                    : 'h-48 sm:h-60 md:h-72 lg:h-88'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              {!testimonial.featured && (
                <div className="flex flex-col grow md:pt-5">
                  <p className="text-xs sm:text-sm md:text-base font-medium text-[#242424] mb-3 sm:mb-4">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-[#242424] grow">
                    {testimonial.quote}
                  </p>
                </div>
              )}

              {/* Featured testimonial content */}
              {testimonial.featured && (
                <div className="bg-[#FFF5FA] rounded-2xl p-4 sm:p-6 md:p-4 md:mt-14 sm:mt-6">
                  <p className="text-sm sm:text-base md:text-lg font-medium text-[#292929] mb-3 sm:mb-4">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-base text-[#242424]">
                    {testimonial.quote}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
