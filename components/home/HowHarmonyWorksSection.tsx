import React from 'react';
import Image from 'next/image';

export default function HowHarmonyWorksSection() {
  const features = [
    {
      id: 'emotionally-aware',
      title: 'Emotionally Aware',
      description: 'Harmony is able to detect emotions in your voice, as well as express emotions in its own. This emotional intelligence can help in numerous ways. For example, helping us unblend and recenter when noticing emotions have become overwhelming. Or providing deeper understanding and validation of our feelings.',
      alignment: 'left'
    },
    {
      id: 'evidence-based',
      title: 'Evidence Based Modalities',
      description: 'Harmony is fine tuned on proven therapeutic approaches, including IFS (Internal Family Systems), Mindfulness-Based CBT, and Focusing.',
      alignment: 'right'
    },
    {
      id: 'memory-insight',
      title: 'Memory and Insight',
      description: 'By remembering information across sessions, Harmony can better keep track of recurring emotional/thought patterns and have novel insights.',
      alignment: 'left'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-white to-blue-100 py-14 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center text-black mb-15">
          How Harmony Works
        </h2>
        <div className="space-y-8 relative">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="relative"
            >
              {/* Desktop layout - hidden on mobile */}
              <div className="hidden md:block">
                {feature.alignment === 'left' ? (
                  /* Left-aligned content (1st and 3rd blocks) */
                  <div className="grid grid-cols-2 gap-0 items-start">
                    <div>
                      <div className="ml-25 pl-13 border-l-4 border-harmony-blue">
                        <h3 className="text-4xl font-extrabold text-black mb-5">
                          {feature.title}
                        </h3>
                        <p className="text-harmony-dark-gray leading-relaxed text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Image for the first feature */}
                    <div>
                      {index === 0 && (
                        <div className="flex justify-start items-center h-full pl-15">
                          <div className="relative w-[425px] h-[300px]">
                            <Image
                              src="/soundwave.png"
                              alt="Sound wave visualization"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Right-aligned content (2nd block) */
                  <div className="grid grid-cols-2 gap-0 items-start">
                    <div className="col-start-2">
                      <div className="mr-25 pl-13 border-l-4 border-harmony-blue">
                        <h3 className="text-4xl font-extrabold text-black mb-5">
                          {feature.title}
                        </h3>
                        <p className="text-harmony-dark-gray leading-relaxed text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile version - hidden on desktop */}
              <div className="md:hidden">
                <div className="ml-8 pl-6 border-l-4 border-harmony-blue">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-harmony-dark-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 