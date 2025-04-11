"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

/**
 * Navigation bar component for the Harmony website
 * Transparent on homepage, white on mission page, blue on other pages
 * Features a full-screen mobile menu with smooth animations
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Check if current page is homepage or mission page
  const isHomepage = pathname === "/";
  const isMissionPage = pathname === "/mission";

  // Determine navbar styles based on current page
  const getNavbarStyles = () => {
    // If mobile menu is open, keep bg transparent/white/blue but always use blue text on homepage
    if (isMenuOpen && isHomepage) return "bg-transparent text-harmony-blue";
    if (isHomepage) return "bg-transparent text-white";
    if (isMissionPage) return "bg-white text-harmony-blue shadow-sm";
    return "bg-harmony-blue text-white shadow-md";
  };

  // Get mobile menu background style
  const getMobileMenuBg = () => {
    if (isHomepage) return "bg-black bg-opacity-70";
    if (isMissionPage) return "bg-white";
    return "bg-harmony-blue";
  };

  // Auth button styles based on current page
  const getLoginButtonStyles = () => {
    if (isHomepage) return "text-white border-white";
    if (isMissionPage) return "text-harmony-blue border-harmony-blue";
    return "text-white border-white";
  };

  const getSignupButtonStyles = () => {
    if (isHomepage) return "text-white border-white";
    if (isMissionPage) return "bg-harmony-blue text-white";
    return "bg-white text-harmony-blue";
  };

  return (
    <>
      <nav
        className={`${getNavbarStyles()} py-4 px-4 md:px-12 transition-colors duration-300 relative z-50`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Harmony Logo"
              width={75}
              height={75}
              className="h-12 w-auto"
            />
            <span
              className={`ml-1 font-semibold text-4xl ${
                isMenuOpen && isHomepage ? "text-harmony-blue" : ""
              }`}
            >
              Harmony
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-8">
              <Link
                href="/"
                className={`font-bold text-lg transition-colors duration-200 ${
                  pathname === "/" ? "opacity-100" : "opacity-75"
                }`}
              >
                Home
              </Link>
              <Link
                href="/mission"
                className={`font-bold text-lg transition-colors duration-200 ${
                  pathname === "/mission" ? "opacity-100" : "opacity-75"
                }`}
              >
                Our Mission
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex space-x-4">
              <a
                href="http://app.harmonyappai.com?login=true"
                className={`border rounded-full px-6 py-2 font-black text-lg transition transform hover:scale-110 duration-200 ${getLoginButtonStyles()}`}
              >
                Login
              </a>
              <a
                href="http://app.harmonyappai.com?signup=true"
                className={`${
                  isHomepage ? "border" : ""
                } rounded-full px-6 py-2 font-black text-lg transition transform hover:scale-110 duration-200 ${getSignupButtonStyles()}`}
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} className="text-harmony-blue" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu with animation */}
      <div
        className={`
          fixed inset-0 bg-white z-40 md:hidden
          flex flex-col items-center justify-center
          transform transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex flex-col items-center space-y-12 text-center">
          <Link
            href="/"
            className={`font-bold text-3xl text-harmony-blue transition-colors duration-200 py-3 px-8 hover:bg-gray-50 rounded-lg ${
              pathname === "/" ? "opacity-100" : "opacity-75"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/mission"
            className={`font-bold text-3xl text-harmony-blue transition-colors duration-200 py-3 px-8 hover:bg-gray-50 rounded-lg ${
              pathname === "/mission" ? "opacity-100" : "opacity-75"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Our Mission
          </Link>

          {/* Auth Buttons in Mobile Menu - consistent styling */}
          <div className="flex flex-col space-y-6 mt-8 w-4/5 max-w-xs">
            <a
              href="http://app.harmonyappai.com?login=true"
              className="border-2 border-harmony-blue text-harmony-blue font-black rounded-full py-4 text-2xl transition transform hover:scale-110 duration-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="http://app.harmonyappai.com?signup=true"
              className="bg-harmony-blue text-white font-black rounded-full py-4 text-2xl transition transform hover:scale-110 duration-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
