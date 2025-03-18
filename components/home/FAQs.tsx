"use client"
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'What is IFS (Internal Family Systems)?',
      answer: (
        <p>
          IFS is a modern therapy that views the mind as containing many different "parts". For example, in an argument with your partner, 
          one part of you might want to make a hurtful remark, while another part might want to regain connection. A core principle of IFS is that all parts,
          even ones that are problematic in our lives, have positive intentions (maybe underneath the urge to make a hurtful remark was wanting to be seen in the above example). 
          The aim is to understand and integrate these parts so you can act from your highest Self rather than being driven by reactive parts. <a href="https://ifs-institute.com/" className="text-harmony-blue hover:underline" >
            <strong>[Learn more about IFS here]</strong></a>
        </p>
      ),
    },
    {
      question: 'Do I need to have meditated, gone to therapy, or have familiarity with IFS to use Harmony?',
      answer: (
        <p>
          Nope! Harmony was developed to meet you where you're at, supporting complete beginners and advanced practitioners alike.
        </p>
      ),
    },
    {
      question: 'What do you do with my data?',
      answer: (
        <p>
          Absolutely nothing. We never sell, share, or train our models on your data.
        </p>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-white to-blue-100 py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* FAQS Label */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-1 border border-black rounded-full inline-flex items-center">
            <span className="text-sm text-black font-medium flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L9.66 5.17L14.83 3.51L10.49 6.34L13.32 10.68L8.83 9.02L7.17 13.51L6.34 8.34L1.17 9.17L5.51 6.34L2.68 2L7.17 3.66L8 0Z" fill="#061261"/>
              </svg>
              FAQS
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-6xl font-bold text-black text-center mb-12">
          Questions? We've got <br /><span className="text-harmony-blue">answers</span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqItems.map((faq, index) => (
            <div key={index} className="bg-white opacity-80 rounded-3xl shadow-lg p-3 overflow-hidden">
              <button
                className="w-full px-3 py-3 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-black text-lg font-medium">{faq.question}</span>
                <span className={`text-harmony-blue opacity-90 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-3 py-3 text-harmony-dark-gray text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}