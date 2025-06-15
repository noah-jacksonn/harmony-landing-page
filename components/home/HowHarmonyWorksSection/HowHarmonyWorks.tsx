"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { features } from "./howHarmonyWorksData";
import HumeAudioAnalysisModal from "./HumeAudioAnalysisModal";

export default function HowHarmonyWorks() {
  const [visibleFeatures, setVisibleFeatures] = useState<{
    [key: string]: boolean;
  }>({});
  const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    features.forEach((feature) => {
      const element = featureRefs.current[feature.id];
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleFeatures((prev) => ({
                ...prev,
                [feature.id]: true,
              }));
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const renderDescription = (
    description: string,
    links?: { text: string; url: string }[]
  ) => {
    const paragraphs = description.split("\n\n");

    return paragraphs.map((paragraph, paragraphIndex) => {
      let content: React.ReactNode[] | string = paragraph;

      if (links && links.length > 0) {
        const elements: React.ReactNode[] = [];
        let lastIndex = 0;

        links.forEach((link) => {
          const linkIndex = paragraph.indexOf(link.text);
          if (linkIndex !== -1) {
            elements.push(paragraph.substring(lastIndex, linkIndex));

            // Check if this is the audio analysis link
            if (link.text === "real-time audio analysis") {
              elements.push(
                <button
                  key={link.url}
                  onClick={() => {
                    setModalUrl(link.url);
                    setModalOpen(true);
                  }}
                  className="text-harmony-blue underline hover:text-blue-700 transition-colors"
                >
                  {link.text}
                </button>
              );
            } else {
              // Regular link (for the course)
              elements.push(
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-harmony-blue underline hover:text-blue-700 transition-colors"
                >
                  {link.text}
                </a>
              );
            }
            lastIndex = linkIndex + link.text.length;
          }
        });

        if (elements.length > 0) {
          elements.push(paragraph.substring(lastIndex));
          content = elements;
        }
      }

      return (
        <p key={paragraphIndex} className={paragraphIndex > 0 ? "mt-4" : ""}>
          {content}
        </p>
      );
    });
  };

  return (
    <section className="bg-white py-14 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center text-black mb-25">
          How Harmony Works
        </h2>

        {/* Desktop layout - hidden on mobile */}
        <div className="hidden md:block">
          <div className="space-y-40">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="grid grid-cols-2 gap-8 items-center"
                ref={(el) => {
                  featureRefs.current[feature.id] = el;
                }}
              >
                {/* For even indices (0, 2): Text on left, image on right */}
                {index % 2 === 0 ? (
                  <>
                    <div
                      className={`ml-25 pt-8 ${"border-l-4 border-t-4 border-harmony-blue pl-15"} transform transition-all duration-700 ${
                        visibleFeatures[feature.id]
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-24"
                      }`}
                    >
                      <h3 className="text-4xl font-semibold text-black mb-5">
                        {feature.title}
                      </h3>
                      <div className="text-harmony-dark-gray leading-relaxed text-lg">
                        {renderDescription(feature.description, feature.links)}
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="relative w-[375px] h-[375px] flex items-center justify-center">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  /* For odd indices (1): Image on left, text on right */
                  <>
                    <div className="flex justify-center items-center">
                      <div className="relative w-[375px] h-[375px] flex items-center justify-center">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div
                      className={`mr-25 pt-8 ${"border-r-4 border-t-4 border-harmony-blue pr-15"} transform transition-all duration-700 ${
                        visibleFeatures[feature.id]
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-24"
                      }`}
                    >
                      <h3 className="text-4xl font-semibold text-black mb-5">
                        {feature.title}
                      </h3>
                      <div className="text-harmony-dark-gray leading-relaxed text-lg">
                        {renderDescription(feature.description, feature.links)}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile version - hidden on desktop */}
        <div className="md:hidden space-y-25">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`${
                index === 1
                  ? "mr-8 ml-4 pr-10 pl-6 pt-8 border-r-2 border-t-2 border-harmony-blue"
                  : "ml-8 mr-4 pl-6 pr-10 pt-8 border-l-2 border-t-2 border-harmony-blue "
              }`}
              ref={(el) => {
                if (!featureRefs.current[feature.id]) {
                  featureRefs.current[feature.id] = el;
                }
              }}
            >
              <h3 className="text-2xl font-bold text-black mb-5">
                {feature.title}
              </h3>
              <div className="text-harmony-dark-gray leading-relaxed">
                {renderDescription(feature.description, feature.links)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <HumeAudioAnalysisModal
        isOpen={modalOpen}
        onClose={setModalOpen}
        url={modalUrl}
      />
    </section>
  );
}
