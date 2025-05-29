// src/components/FAQ.tsx
import React, { useState } from 'react';
import Navbar from './NavBar';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of events do you manage?",
    answer: "We manage all types of events including weddings, corporate functions, birthdays, and social gatherings.",
  },
  {
    question: "Do you offer catering services?",
    answer: "Yes! We provide complete catering services under 'Shyam Catering', with a variety of delicious menu options.",
  },
  {
    question: "How can I book your services?",
    answer: "You can book our services by filling out the booking form or contacting us through our website or phone number.",
  },
  {
    question: "Can I customize the event package?",
    answer: "Absolutely! We tailor packages to suit your specific requirements and budget.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div> <Navbar></Navbar>
    <div className="max-w-3xl px-8 py-48 mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center text-indigo-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span className="text-indigo-600">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 transition-opacity duration-300 ease-in-out">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default FAQ;
