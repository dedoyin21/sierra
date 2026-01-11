"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { LuArrowRightToLine } from "react-icons/lu";

export function SkincareFavorites() {
  const products = [
    { id: 1, name: "Radiance Renewal Serum", image: "/whitecream.jpg" },
    { id: 2, name: "Deep Hydration Moisturizer", image: "/containercream.jpg" },
    { id: 3, name: "Brightening Essence", image: "/whitecream.jpg" },
    { id: 4, name: "Calming Recovery Mask", image: "/creamcontains.jpg" },
    { id: 5, name: "Radiance Renewal Serum", image: "/whitecream.jpg" },
    { id: 6, name: "Deep Hydration Moisturizer", image: "/smallcream.jpg" },
    { id: 7, name: "Brightening Essence", image: "/whitecream.jpg" },
    { id: 8, name: "Calming Recovery Mask", image: "/smallcream.jpg" },
  ];

  return (
    <section id="favourites" className="w-full bg-white px-4 py-12 md:py-20">
      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#926A63] mb-4">
          Our Skincare Favorites
        </h2>
        <p className="text-[#292929] text-[16px] md:text-sm 2xl:text-[16px] mx-auto 2xl:px-80 pt-4 pb-6">
          Loved by thousands and recommended by experts — <br />
          explore our top-rated essentials.
        </p>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col gap-2 mx-auto">
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <div className="overflow-hidden bg-gray-100 w-full aspect-360/390 rounded-t-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-b-sm">
              <h3 className="text-base font-medium text-[#292929]">
                {product.name}
              </h3>
              <span className="text-[#926A63] text-xl">
                <LuArrowRightToLine />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP SLIDER */}
      <div className="hidden md:block relative md:px-14 max-w-350 mx-auto">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />

        <Swiper
          modules={[Autoplay]}
          loop
          grabCursor
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          centeredSlides
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 6,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="mx-auto w-full max-w-90">
                <div className="overflow-hidden bg-gray-100 w-full aspect-360/390 rounded-t-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-b-sm">
                  <h3 className="text-base md:text-lg font-medium text-[#292929]">
                    {product.name}
                  </h3>
                  <span className="text-[#292929] text-xl md:text-2xl font-light">
                    <LuArrowRightToLine />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
