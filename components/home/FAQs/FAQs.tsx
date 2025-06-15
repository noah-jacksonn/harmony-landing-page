"use client";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { faqItems } from "./faqData";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* FAQS Label */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-1 border border-black rounded-full inline-flex items-center">
            <span className="text-sm text-black font-medium flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.66 5.17L14.83 3.51L10.49 6.34L13.32 10.68L8.83 9.02L7.17 13.51L6.34 8.34L1.17 9.17L5.51 6.34L2.68 2L7.17 3.66L8 0Z"
                  fill="#061261"
                />
              </svg>
              FAQS
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-6xl font-bold text-black text-center mb-12">
          Questions? We've got <br />
          <span className="text-harmony-blue">answers</span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqItems.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-3xl shadow border border-gray-100 p-3 overflow-hidden relative"
            >
              <button
                className="w-full px-3 py-3 text-left flex justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-black text-lg font-normal pr-8">
                  {faq.question}
                </span>
                <span
                  className={`text-black transition-transform duration-300 absolute top-6 right-6`}
                >
                  <ArrowDown
                    size={24}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-3 py-3 text-harmony-dark-gray font-light text-lg">
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
