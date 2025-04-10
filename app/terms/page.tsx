export default function TermsPage() {
  return (
    <div className="flex-grow">
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-harmony-blue mb-4">
            Terms of Service
          </h1>

          {/* Squiggly line - SVG */}
          <svg
            width="390"
            height="15"
            viewBox="0 0 390 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-8"
          >
            <path
              d="M2 7.5C2 7.5 35 2.5 52.5 2.5C70 2.5 78.75 12.5 96.25 12.5C113.75 12.5 122.5 2.5 140 2.5C157.5 2.5 166.25 12.5 183.75 12.5C201.25 12.5 210 2.5 227.5 2.5C245 2.5 253.75 12.5 271.25 12.5C288.75 12.5 297.5 2.5 315 2.5C332.5 2.5 341.25 12.5 358.75 12.5C376.25 12.5 390 7.5 423 7.5"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            <strong>Effective Date:</strong> April 10, 2025
          </p>

          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            These Terms of Service ("Terms") govern your access to and use of
            Harmony ("the Service"). By using Harmony, you agree to be bound by
            these Terms.
          </p>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="use-of-service"
          >
            1. Use of the Service
          </h2>
          <ul className="list-disc pl-8 text-base text-harmony-light-gray leading-relaxed mb-8">
            <li className="mb-2">
              You must be at least 13 years old to use Harmony.
            </li>
            <li className="mb-2">
              You agree to use Harmony only for lawful purposes and in
              accordance with these Terms.
            </li>
            <li>
              You are responsible for keeping your account credentials private
              and secure.
            </li>
          </ul>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="your-content"
          >
            2. Your Content
          </h2>
          <ul className="list-disc pl-8 text-base text-harmony-light-gray leading-relaxed mb-8">
            <li className="mb-2">
              You retain ownership of any voice data, text, or other content you
              share with Harmony.
            </li>
            <li className="mb-2">
              By using the Service, you allow us to process your content to
              provide you with conversational experiences.
            </li>
            <li>
              We don't claim ownership over your content, and we do not share it
              unless described in our{" "}
              <a href="/privacy" className="text-harmony-blue hover:underline">
                Privacy Policy
              </a>
              .
            </li>
          </ul>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="data-and-privacy"
          >
            3. Data and Privacy
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            Your use of Harmony is subject to our{" "}
            <a href="/privacy" className="text-harmony-blue hover:underline">
              Privacy Policy
            </a>
            , which explains:
          </p>
          <ul className="list-disc pl-8 text-base text-harmony-light-gray leading-relaxed mb-8">
            <li className="mb-2">What data we collect</li>
            <li className="mb-2">How we use and store it</li>
            <li className="mb-2">The third-party services we integrate with</li>
            <li>Your rights and how to exercise them</li>
          </ul>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="third-party-services"
          >
            4. Third-Party Services
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            Harmony integrates with services like OpenAI, Hume.ai, Supabase and
            others outlined in our privacy policy to deliver core functionality.
            We are not responsible for the terms, privacy practices, or behavior
            of these third-party services.
          </p>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="termination"
          >
            5. Termination
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            You may stop using Harmony at any time.
          </p>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            We may suspend or terminate your access if you violate these Terms
            or use the Service in a way that harms others or the platform.
          </p>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="changes-to-terms"
          >
            6. Changes to These Terms
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            We may occasionally update these Terms. If we make significant
            changes, we'll notify you in the app or by email.
          </p>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            Your continued use of Harmony after any updates means you agree to
            the revised Terms.
          </p>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="contact"
          >
            7. Contact
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed">
            Questions? Reach out to us at{" "}
            <a
              href="mailto:team@harmonyappai.com"
              className="text-harmony-blue hover:underline"
            >
              team@harmonyappai.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
