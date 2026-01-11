import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const links = [
    { name: "How it works", href: "#features" },
    { name: "Our Mission", href: "#mission" },
    { name: "Favourites", href: "#favourites" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faqs" },
  ];

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        min-h-190
        md:min-h-95
        lg:min-h-102
      "
      style={{ backgroundImage: "url('/foot.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8B0F4E] opacity-80 z-0" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          px-8
          md:px-16
          pt-12
          md:pt-10
          xl:max-w-350
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8
            text-white

            md:flex-row
            md:items-start
            md:justify-between

            xl:items-start
            xl:justify-between
          "
        >
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Sierra"
            className="h-8 md:h-9 w-auto object-contain max-w-fit"
          />

          {/* Links */}
          <nav
            className="
              flex
              flex-col
              gap-6
              text-lg
              font-medium
              pt-9

              md:flex-row
              md:gap-12
              md:pt-0

              xl:gap-12
            "
          >
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:opacity-80">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div
            className="
              flex
              gap-8
              pt-8

              md:pt-0
              xl:pt-0
            "
          >
            <FaInstagram className="w-7 h-7" />
            <FaLinkedin className="w-7 h-7" />
            <FaTwitter className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* BIG LOGO — stays untouched, just capped on big screens */}
      <img
        src="/biglogo.png"
        alt="Sierra Watermark"
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-full
          opacity-30
          pointer-events-none
          xl:max-w-400
        "
        style={{
          filter: "brightness(1.4) saturate(2) hue-rotate(-10deg)",
        }}
      />
    </footer>
  );
}
