import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'Are your products suitable for sensitive skin?',
      answer:
        'From ingredients to packaging, every detail reflects our promise to protect both your skin and the planet.',
    },
    {
      id: 2,
      question: 'Are your products cruelty-free and vegan?',
      answer:
        'Yes, all our products are certified cruelty-free and made with plant-based ingredients whenever possible.',
    },
    {
      id: 3,
      question: 'Where are your products made?',
      answer:
        'Our products are manufactured in certified facilities that meet the highest standards of quality and safety.',
    },
    {
      id: 4,
      question: 'Do your products contain any artificial fragrances or dyes?',
      answer:
        'No, we only use natural essential oils and botanical extracts for fragrance. Our products contain zero artificial dyes.',
    },
    {
      id: 5,
      question: 'How long before I start seeing results?',
      answer:
        'Most customers see visible improvements in skin texture and tone within 2-4 weeks of consistent use.',
    },
    {
      id: 6,
      question: 'Can I use your products if I\'m already using a prescription treatment?',
      answer:
        'We recommend consulting with your dermatologist before combining our products with prescription treatments.',
    },
    {
      id: 7,
      question: 'Are your products safe to use during pregnancy or breastfeeding?',
      answer:
        'Most of our products are safe during pregnancy and breastfeeding. Please check the individual product labels or consult your healthcare provider.',
    },
    {
      id: 8,
      question: 'Is the packaging recyclable?',
      answer:
        'Yes, 100% of our packaging is recyclable and we encourage our customers to recycle responsibly.',
    },
  ];

  return (
    <section id="faqs" className="w-full bg-white px-4 md:py-12 py-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-light text-[#926A63] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#292929] text-[18px] sm:text-base md:text-sm mx-auto md:px-88 pt-4 pb-10 mb:pb-6">
            From ingredients to packaging, every detail reflects our promise to protect both
            your skin and the planet.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="md:px-14">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden transition-colors duration-300 
              ${
                openId === faq.id
                  ? 'bg-[#FFEBF6]'
                  : 'bg-[#F5F5F5]'
              }
              mb-3 sm:mb-4 md:mb-5 shadow-sm`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex items-center justify-between text-left"
              >
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-[#242424] pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`text-xl sm:text-2xl md:text-3xl text-[#926A63] transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  {openId === faq.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-4 sm:px-6 md:px-8 pb-3 sm:pb-4 md:pb-6 border-[#E8B4D8]">
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#292929] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
