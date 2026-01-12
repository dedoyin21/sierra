"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Evelyn T.",
      image: "/darkgirl.jpg",
      quote:
        "The formula is light, clean, and powerful. I noticed a visible difference within a week — fewer breakouts and smoother texture.",
    },
    {
      id: 2,
      name: "Amina O.",
      image: "/lightgirl.jpg",
      quote:
        "I've tried countless products, but this is the first time my skin actually feels balanced and cared for. The glow is real!",
      featured: true,
    },
    {
      id: 3,
      name: "Lizzie P.",
      image: "/morelight.jpg",
      quote:
        "Finally, a brand that understands sensitive skin! No irritation, just pure results. I'm hooked.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-16 lg:py-28 2xl:py-36 xl:px-17">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20 xl:pb-8 pb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl 2xl:text-6xl font-medium text-[#926A63] pb-4">
            Real Results from Real People
          </h2>
          <p className="mx-auto xl:px-80 text-[#292929] text-base lg:text-lg 2xl:text-[30px]">
            Read why our methods, processes and products are loved by many around the world
          </p>
        </div>

        {/* MOBILE & TABLET: Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            loop
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides
            autoplay={{ delay: 3000 }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-96 w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="font-medium mb-3">{t.name}</p>
                    <p className="text-[#242424]">{t.quote}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP & UP: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-10 2xl:gap-14">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`flex flex-col ${
                t.featured ? "xl:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`overflow-hidden rounded-2xl ${
                  t.featured
                    ? "h-96 xl:h-130 2xl:h-155"
                    : "h-80 xl:h-96 2xl:h-120"
                }`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text */}
              <div
                className={`mt-6 ${
                  t.featured
                    ? "bg-[#FFF5FA] p-6 rounded-2xl mt-8"
                    : ""
                }`}
              >
                <p className="font-medium text-[#292929] 2xl:text-2xl pb-3 2xl:pb-3 2xl:pt-4">{t.name}</p>
                <p className="text-[#242424] text-sm xl:text-base 2xl:text-2xl">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
