
import React, { useState } from 'react';

const faqs = [
  {
    question: "Can I use these templates for client websites?",
    answer: "Yes! Once you purchase a template or the bundle, you can use the templates for your own projects or client websites without limitations. Each template can be used for multiple projects."
  },
  {
    question: "Do I need to credit Davedigitals on my website?",
    answer: "No, you don't need to provide attribution or credit Davedigitals on your website. Once purchased, you can use the templates as if they were your own creation."
  },
  {
    question: "What skills do I need to edit these templates?",
    answer: "Basic knowledge of HTML, CSS, and JavaScript is recommended. If you're familiar with VS Code and understand how to edit text and replace images in code, you should be able to customize our templates easily."
  },
  {
    question: "How do I get support if I have questions?",
    answer: "We provide detailed documentation with each template. For additional support, you can contact our team via email, and we typically respond within 24 hours on business days."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with your purchase, contact us within 14 days for a full refund."
  },
  {
    question: "How are the templates delivered?",
    answer: "After completing your purchase, you'll receive an email with download links for the templates you bought. The bundle comes as a zip file containing all 52 templates with their respective documentation."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
