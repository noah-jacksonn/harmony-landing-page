"use client";

/**
 * Try For Free button component
 * Simple gradient button with hover effects
 */
export default function TryForFreeButton() {
  return (
    <div className="w-full flex justify-center items-center">
      <a
        href="https://app.harmonyappai.com"
        className="relative bg-gradient-to-r from-blue-400 to-blue-800 text-white font-quicksand font-black text-base md:text-md px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
      >
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
