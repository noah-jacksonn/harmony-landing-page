'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function BenefitsSection() {
  // Array of benefit data with image paths
  const benefits = [
    {
      id: 'reduce-anxiety',
      title: 'Reduce Anxiety',
      description: 'Work compassionately with anxiousness to resolve it at its root',
      image: '/BenefitsSection/mountain.png'
    },
    {
      id: 'increase-agency',
      title: 'Increase Agency',
      description: 'Become aware of limiting beliefs or areas we\'ve avoided that restrict our freedom',
      image: '/BenefitsSection/bird.png'
    },
    {
      id: 'heal-wounds',
      title: 'Heal Old Wounds',
      description: 'Guide us in processing traumas and deep emotional wounds',
      image: '/BenefitsSection/heart.png'
    },
    {
      id: 'deepen-understanding',
      title: 'Deepen Self-Understanding',
      description: 'Recognize recurring patterns in our thoughts and emotions, and understand their triggers',
      image: '/BenefitsSection/eye.png'
    },
    {
      id: 'foster-positive',
      title: 'Foster Positive Emotions',
      description: {
        before: 'Cultivate gratitude, compassion, and acceptance toward ',
        emphasis: 'all',
        after: ' parts of ourselves'
      },
      image: '/BenefitsSection/tree.png'
    },
    {
      id: 'navigate-challenges',
      title: 'Navigate Life\'s Challenges',
      description: 'Support us in navigating school, work, and relationships',
      image: '/BenefitsSection/trail.png'
    }
  ];

  // State for tracking which cards are visible
  const [visibleCards, setVisibleCards] = useState(benefits.map(() => false));
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Function to render description (handles both string and object with emphasis)
  const renderDescription = (description: string | { before: string, emphasis: string, after: string }) => {
    if (typeof description === 'string') {
      return description;
    }
    
    return (
      <>
        {description.before}
        <em>{description.emphasis}</em>
        {description.after}
      </>
    );
  };

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start staggered animation when section comes into view
          benefits.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200); // 200ms stagger between each card
          });
          // Unobserve after triggering
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="bg-white py-8 px-4 w-full mx-auto -mt-16" ref={sectionRef}>
      <h2 className="text-6xl font-bold font-quicksand text-center text-black mb-16">
        Ways Harmony Can Help
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => {
          const isHovered = hoveredCardId === benefit.id;
          
          return (
            <div
              key={benefit.id}
              className={`
                benefit-card p-4 rounded-lg border border-gray-100 bg-white
                flex flex-col items-center text-center
                transform transition-all duration-300 ease-out
                ${visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'}
                ${isHovered 
                  ? 'scale-105 shadow-md z-10' 
                  : hoveredCardId !== null 
                    ? 'scale-98 opacity-85' 
                    : 'shadow-sm hover:shadow-md'}
              `}
              onMouseEnter={() => setHoveredCardId(benefit.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <div className="relative h-40 w-52">
                <Image 
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  sizes="(max-width: 768px) 96px, 240px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1 mt-1">
                {benefit.title}
              </h3>
              <p className="text-harmony-dark-gray">
                {renderDescription(benefit.description)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
} 