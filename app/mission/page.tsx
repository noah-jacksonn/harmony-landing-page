import ContactButton from "@/components/contact-button"

/**
 * Mission page for Harmony website
 * Displays the company's mission with left-aligned content
 */
export default function MissionPage() {
  return (
    <div className="flex-grow">
      {/* Hero Section - now left-aligned */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-harmony-blue mb-4">Our Mission</h1>

          {/* Squiggly line - SVG */}
          <svg
            width="350"
            height="15"
            viewBox="0 0 350 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-8"
          >
            <path
              d="M2 7.5C2 7.5 35 2.5 52.5 2.5C70 2.5 78.75 12.5 96.25 12.5C113.75 12.5 122.5 2.5 140 2.5C157.5 2.5 166.25 12.5 183.75 12.5C201.25 12.5 210 2.5 227.5 2.5C245 2.5 253.75 12.5 271.25 12.5C288.75 12.5 315 7.5 348 7.5"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-2xl md:text-3xl font-light text-harmony-dark-gray mb-12">
            Leverage technology to improve the consciousness of humanity.
          </p>

          <p className="text-lg text-harmony-light-gray leading-relaxed mb-12">
            We believe we are at a unique point in history where technology and AI can significantly
             enhance well-being and facilitate personal growth. We aim to develop and align these technologies
             to serve those aims. 
          </p>

          {/* Contact Button - reduced spacing */}
          <div className="mt-4">
            <ContactButton />
          </div>
        </div>
      </section>
    </div>
  )
}