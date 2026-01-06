export function SkinDeepMission() {
  return (
    <section id="mission" className="w-full bg-white px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#926A63] mb-4">
            The Skin-Deep Mission
          </h2>
          <p className="text-center text-[#292929] text-xl sm:text-base md:text-sm mx-auto md:px-88 pt-4 pb-6">
            At the heart of everything we do is a simple belief — skincare should be deeper
            than surface-level beauty.
          </p>
        </div>

        {/* Video */}
        <div className="w-full mx-auto flex justify-center">
          <div className="border-4 border-[#E8B4D8] overflow-hidden">
            <video
              src="/creamVideo.mp4"
              controls
              className="w-full md:w-276 md:h-120 h-160 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
