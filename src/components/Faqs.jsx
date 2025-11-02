import React, { useState, useRef, useEffect } from "react";
import { faqs } from "../data/faqs";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Adjust heights dynamically
    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        if (i === activeIndex) {
          ref.style.maxHeight = ref.scrollHeight + "px";
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [activeIndex]);

  return (
    <div className="mx-auto p-4 md:p-8 max-w-xl lg:max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
          >
            {/* Question header */}
            <button
              className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-lg md:text-xl bg-gray-100 hover:bg-gray-200 transition-colors text-black"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                } text-red-600 text-2xl`}
              >
                +
              </span>
            </button>

            {/* Answer section */}
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="px-5 overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: 0 }}
            >
              <p className="text-gray-700 text-base md:text-lg py-3 whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
