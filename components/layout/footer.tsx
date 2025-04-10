"use client"
/**
 * Footer component for the Harmony website
 * Displays copyright information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 px-6 md:px-12 border-t border-harmony-gray">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <p className="text-harmony-light-gray text-sm">
          &copy; {currentYear} Harmony. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="/privacy"
            className="text-harmony-light-gray hover:text-harmony-dark-gray text-sm"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-harmony-light-gray hover:text-harmony-dark-gray text-sm"
          >
            Terms
          </a>
          <a
            href="mailto:team@harmonyappai.com?subject=Harmony%20-%20"
            className="text-harmony-light-gray hover:text-harmony-dark-gray text-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
