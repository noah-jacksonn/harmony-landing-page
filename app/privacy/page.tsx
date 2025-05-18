export default function PrivacyPage() {
  return (
    <div className="flex-grow">
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-harmony-blue mb-4">
            Privacy Policy
          </h1>

          {/* Squiggly line - SVG */}
          <svg
            width="325"
            height="15"
            viewBox="0 0 325 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-8"
          >
            <path
              d="M2 7.5C2 7.5 40 2.5 60 2.5C80 2.5 90 12.5 110 12.5C130 12.5 140 2.5 160 2.5C180 2.5 190 12.5 210 12.5C230 12.5 240 2.5 260 2.5C280 2.5 290 12.5 310 12.5C330 12.5 360 7.5 398 7.5"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            <strong>Last Updated:</strong> April 10, 2025
          </p>

          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            At Harmony, we believe that having a safe space to share our
            thoughts and feelings — a place where we feel comfortable — is
            crucial to emotional healing, personal development, and our
            well-beings. We seek to support those goals by only using the data
            necessary for Harmony's core functionality, being transparent about
            what we collect and why, and taking appropriate measures to protect
            and secure your data.
          </p>

          <p className="text-base text-harmony-light-gray leading-relaxed mb-12">
            Below, we outline what data we collect, how we use it, who we share
            it with, and your rights as a user.
          </p>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="information-we-collect"
          >
            1. Information We Collect
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            <strong>Basic account info</strong> — Your name and email address,
            provided at the time of registration (e.g., via Google login).
          </p>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            <strong>Optional profile information</strong> — We optionally
            collect profile information such as date of birth, gender, country,
            sexual orientation, religious identity, and therapy experience in
            order to personalize therapy sessions.
          </p>

          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            <strong>Conversation history</strong> — We store your sessions so
            you can access your conversation history.
          </p>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            <strong>Technical metadata</strong> — We may receive metadata such
            as your browser type or device info (through services like Clerk) to
            help us debug technical issues and ensure the app functions
            properly.
          </p>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="how-we-use-your-data"
          >
            2. How We Use Your Data
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            We use your data to:
          </p>
          <ul className="list-disc pl-8 text-base text-harmony-light-gray leading-relaxed mb-8">
            <li className="mb-2">
              Store, retrieve, and give you access to your conversation history
            </li>
            <li className="mb-2">
              Remember your setting preferences (like manual mode, mic settings,
              etc.)
            </li>
            <li>
              Keep you signed in across different sessions and allow access from
              multiple devices
            </li>
          </ul>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="sharing-your-data"
          >
            3. Sharing Your Data
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            We do <strong>not</strong> — and will <strong>never</strong> — sell
            your personal data.
          </p>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            We only share your data when necessary to provide app functionality,
            and only with trusted third-party services:
          </p>
          <ul className="list-disc pl-8 text-base text-harmony-light-gray leading-relaxed mb-8">
            <li className="mb-2">
              <strong>Clerk</strong> – for user authentication and account
              management
            </li>
            <li className="mb-2">
              <strong>Hume.ai</strong> – for emotion detection and transcription
            </li>
            <li>
              <strong>AI by OpenAI and Anthropic</strong> – for underlying
              intelligence and conversation generation
            </li>
          </ul>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="your-rights"
          >
            4. Your Rights
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-8 text-base text-harmony-light-gray leading-relaxed mb-4">
            <li className="mb-2">Delete your account and associated data</li>
            <li>Contact us with questions about your data or privacy</li>
          </ul>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            To exercise your rights, you can delete your account in-app at any
            time, or email us at{" "}
            <a
              href="mailto:team@harmonyappai.com"
              className="text-harmony-blue hover:underline"
            >
              team@harmonyappai.com
            </a>
            .
          </p>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="data-storage-and-security"
          >
            5. Data Storage and Security
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed mb-8">
            We use Supabase, a secure and widely trusted cloud infrastructure
            provider, to store and protect your data. Supabase uses encryption
            to protect data at rest and in transit, and access is restricted to
            authorized personnel only. All data transmitted between you and our
            services is secured using strong encryption protocols. This includes
            the use of HTTPS and WebSocket Secure (WSS), which ensure that your
            data remains private and integral throughout the transmission
            process. We follow industry best practices to ensure that your data
            remains safe and confidential.
          </p>

          <hr className="border-gray-100 my-4" />

          <h2
            className="text-2xl font-bold text-harmony-blue mb-4"
            id="changes-to-this-policy"
          >
            6. Changes to This Policy
          </h2>
          <p className="text-base text-harmony-light-gray leading-relaxed">
            We may occasionally update this Privacy Policy. If we make major
            changes, we will notify you through the app or via email.
          </p>
        </div>
      </section>
    </div>
  );
}
