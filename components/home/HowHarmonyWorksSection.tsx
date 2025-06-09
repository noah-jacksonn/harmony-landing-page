'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HowHarmonyWorksSection() {
  // State to track which features are visible
  const [visibleFeatures, setVisibleFeatures] = useState<{[key: string]: boolean}>({});
  
  // Refs for the features
  const featureRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Array of features with their corresponding images
  const features = [
    {
      id: 'emotionally-aware',
      title: 'Emotionally Aware',
      description: 'Harmony is able to detect emotions in your voice, as well as express emotions in its own. This emotional intelligence can help in numerous ways. For example, helping us unblend and recenter when noticing emotions have become overwhelming. Or providing deeper understanding and validation of our feelings.',
      image: '/AudioWave.png',
      imageAlt: 'Sound wave visualization'
    },
    {
      id: 'evidence-based',
      title: 'Evidence Based Modalities',
      description: 'Harmony is fine tuned on proven therapeutic approaches, including IFS (Internal Family Systems), Mindfulness-Based CBT, and Focusing.',
      image: '/TherapistWithClient.png',
      imageAlt: 'Therapy session illustration'
    },
    {
      id: 'memory-insight',
      title: 'Memory and Insight',
      description: 'By remembering information across sessions, Harmony can better keep track of recurring emotional/thought patterns and have novel insights.',
      image: '/Map.png',
      imageAlt: 'Map visualization representing memory and insights'
    }
  ];
  
  // Set up Intersection Observer
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
                [feature.id]: true
              }));
              // Once animated, disconnect the observer
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
      );
      
      observer.observe(element);
      observers.push(observer);
    });
    
    // Cleanup
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="bg-white py-14 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center text-black mb-15">
          How Harmony Works
        </h2>
        
        {/* Desktop layout - hidden on mobile */}
        <div className="hidden md:block">
          <div className="space-y-5">
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
                      className={`ml-25 pt-8 ${
                        // First and third block (index 0, 2): left and top border
                        'border-l-4 border-t-4 border-harmony-blue pl-15'
                      } transform transition-all duration-700 ${
                        visibleFeatures[feature.id] 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-24'
                      }`}
                    >
                      <h3 className="text-4xl font-semibold text-black mb-5">
                        {feature.title}
                      </h3>
                      <p className="text-harmony-dark-gray leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                    
                    <div className="flex justify-center items-center">
                      <div className="relative w-[500px] h-[350px] flex items-center justify-center">
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
                      <div className="relative w-[500px] h-[350px] flex items-center justify-center">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    <div 
                      className={`mr-25 pt-8 ${
                        // Second block (index 1): top and right border
                        'border-r-4 border-t-4 border-harmony-blue pr-15'
                      } transform transition-all duration-700 ${
                        visibleFeatures[feature.id] 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-24'
                      }`}
                    >
                      <h3 className="text-4xl font-semibold text-black mb-5">
                        {feature.title}
                      </h3>
                      <p className="text-harmony-dark-gray leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile version - hidden on desktop */}
        <div className="md:hidden space-y-20">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`${
                index === 1 
                  ? 'mr-8 ml-4 pr-10 pl-6 pt-8 border-r-2 border-t-2 border-harmony-blue' // Second block: right and top border
                  : 'ml-8 mr-4 pl-6 pr-10 pt-8 border-l-2 border-t-2 border-harmony-blue ' // First and third blocks: left and top border
              }`}
              ref={(el) => {
                // Only set the ref if it doesn't already exist from the desktop view
                if (!featureRefs.current[feature.id]) {
                  featureRefs.current[feature.id] = el;
                }
              }}
            >
              <h3 className="text-2xl font-bold text-black mb-5">
                {feature.title}
              </h3>
              <p className="text-harmony-dark-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 