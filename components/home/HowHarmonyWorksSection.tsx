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
      image: '/soundwave.png',
      imageAlt: 'Sound wave visualization'
    },
    {
      id: 'evidence-based',
      title: 'Evidence Based Modalities',
      description: 'Harmony is fine tuned on proven therapeutic approaches, including IFS (Internal Family Systems), Mindfulness-Based CBT, and Focusing.',
      image: '/TherapySession.png',
      imageAlt: 'Therapy session illustration'
    },
    {
      id: 'memory-insight',
      title: 'Memory and Insight',
      description: 'By remembering information across sessions, Harmony can better keep track of recurring emotional/thought patterns and have novel insights.',
      image: '/constellation.png',
      imageAlt: 'Constellation visualization representing memory and insights'
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
                      className={`pl-15 ml-25 border-l-4 border-harmony-blue transform transition-all duration-700 ${
                        visibleFeatures[feature.id] 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-24'
                      }`}
                    >
                      <h3 className="text-4xl font-extrabold text-black mb-5">
                        {feature.title}
                      </h3>
                      <p className="text-harmony-dark-gray leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                    
                    <div className="flex justify-center items-center">
                      <div className="relative w-[425px] h-[300px]">
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
                      <div className="relative w-[425px] h-[300px]">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    <div 
                      className={`pl-15 mr-25 border-l-4 border-harmony-blue transform transition-all duration-700 ${
                        visibleFeatures[feature.id] 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-24'
                      }`}
                    >
                      <h3 className="text-4xl font-extrabold text-black mb-5">
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
        <div className="md:hidden space-y-12">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="ml-8 mr-4 pl-6 pr-10 border-l-2 border-t-2 border-harmony-blue"
              ref={(el) => {
                // Only set the ref if it doesn't already exist from the desktop view
                if (!featureRefs.current[feature.id]) {
                  featureRefs.current[feature.id] = el;
                }
              }}
            >
              <h3 className="text-2xl font-bold text-black mb-3">
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