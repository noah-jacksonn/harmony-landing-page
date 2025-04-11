"use client";

/**
 * Try For Free button component
 * Blue button with right chevron and laser outline animation on hover
 */
export default function TryForFreeButton() {
  return (
    <div className="w-full flex justify-center items-center">
      <a
        href="https://app.harmonyappai.com"
        className="relative bg-harmony-blue text-white font-quicksand font-black text-base md:text-md px-6 py-3 rounded-full shadow-lg group overflow-hidden"
      >
        {/* Thicker pulsing outline for normal state */}
        <span className="absolute inset-0 rounded-full border-[1px] border-white/30 animate-pulse group-hover:opacity-0 transition-opacity duration-200"></span>

        {/* Outline effect */}
        <span className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/100 transition-colors duration-1000"></span>

        {/* Top laser line that starts from right */}
        <span className="absolute top-0 right-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>

        {/* Bottom laser line that starts from right */}
        <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>

        {/* Left laser line that appears after top and bottom */}
        <span className="absolute left-0 top-0 w-[1px] h-0 bg-white group-hover:h-full transition-all duration-300 delay-500"></span>

        {/* Right laser line that only becomes visible on hover */}
        <span className="absolute right-0 top-0 w-[1px] h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>

        <span className="relative">
          Try for free
          <span className="ml-2 text-lg md:text-xl leading-none relative -top-[2px]">
            ›
          </span>
        </span>
      </a>
    </div>
  );
}
