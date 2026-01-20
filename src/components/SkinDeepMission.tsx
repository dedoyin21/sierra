export function SkinDeepMission() {
  return (
    <section
      id="ourmission"
      className="w-full bg-white px-4 py-16 md:py-24 font-Manrope"
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 xl:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-[#926A63] pb-3">
            The Skin-Deep Mission
          </h2>

          <p className="mx-auto text-[#292929] lg:px-70 text-base md:text-sm xl:text-lg 2xl:text-[30px] leading-relaxed pb-8">
            At the heart of everything we do is a simple belief — skincare should
            be deeper than surface-level beauty.
          </p>
        </div>

        {/* Video */}
        <div className="w-full flex justify-center lg:px-14 2xl:px-17">
          <div
            className="
              border-4 border-[#E8B4D8]
              overflow-hidden
              w-full
              
            "
          >
            <video
              src="/creamVideo.mp4"
              controls
              className="
                w-full
                h-64 sm:h-80
                md:h-112
                xl:h-138
                2xl:h-144
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
