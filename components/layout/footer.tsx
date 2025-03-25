/**
 * Footer component for the Harmony website
 * Displays copyright information
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-white py-8 px-6 md:px-12 border-t border-harmony-gray">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-harmony-light-gray text-sm">&copy; {currentYear} Harmony. All rights reserved.</p>
          <a href="mailto:harmonyappai@gmail.com?subject=Harmony%20-%20" className="text-harmony-light-gray hover:text-harmony-dark-gray text-sm mt-2 md:mt-0">
            Contact Us
          </a>
        </div>
      </footer>
    )
  }
  
  