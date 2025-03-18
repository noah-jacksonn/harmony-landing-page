/**
 * Footer component for the Harmony website
 * Displays copyright information
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-white py-8 px-6 md:px-12 border-t border-harmony-gray">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Harmony.</p>
        </div>
      </footer>
    )
  }
  
  