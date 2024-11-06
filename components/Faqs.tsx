'use client';
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What makes your products unique?',
    answer:
      'Our products are crafted with quality materials and elegant designs that ensure durability and aesthetic appeal. Our team focuses on details that make each product reliable and beautiful for any space.'
  },
  {
    question: 'Are your products durable?',
    answer:
      'Yes, we emphasize durability in all our products. Using high-quality materials and rigorous testing, we ensure each product meets our standards for longevity.'
  },
  {
    question: 'Do you offer support for product installation?',
    answer:
      'Absolutely! We offer dedicated customer support to assist with installation questions. Our team is here to help you set up and enjoy your new purchase.'
  },
  {
    question: 'What is your return policy?',
    answer:
      'If you’re not satisfied with your purchase, we offer a hassle-free return policy. Please contact our support team within 30 days of receiving your product for assistance.'
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can reach out to our customer support team via email or phone. We’re dedicated to assisting you with any questions or issues you may have.'
  }
];

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaqs = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-8 lg:px-16">
      <h2 className="mb-8 text-center text-3xl font-semibold">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFaqs(index)}
              className="flex w-full items-center justify-between py-2 text-left text-lg font-medium text-gunMetal-300 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index ? (
              <p className="mt-1 max-h-40 overflow-hidden opacity-100 transition-all duration-300 ease-linear">
                {faq.answer}
              </p>
            ) : (
              <p className="mt-1 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-linear">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
