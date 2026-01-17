import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

export function FAQ() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Where are your tutoring sessions held?',
      answer:
        'Our tutoring sessions are 100% remote and conducted online via platforms like Zoom, Microsoft Teams, or Google Meet. This allows us to support students nationwide from the comfort of their homes.',
    },
    {
      question: 'What are your pricing options?',
      answer:
        'We offer flexible pricing through our Standard and Premium membership tiers. Pricing varies based on the program, frequency of sessions, and whether you choose group or individual tutoring. Contact us for a personalized quote.',
    },
    {
      question: 'What are the benefits of membership?',
      answer:
        'Membership includes weekly tutoring sessions, progress tracking, study materials, and homework support. Premium members also get priority scheduling, access to curriculum activities, monthly excursions, and 24/7 support.',
    },
    {
      question: 'How often are curriculum activities and excursions?',
      answer:
        'Curriculum activities occur monthly and are included with Premium membership. Activities include science museum visits, lab workshops, and group study sessions. Standard members can join activities for an additional fee.',
    },
    {
      question: 'How does tutor booking work?',
      answer:
        'Browse our tutor profiles to find someone who matches your needs, or request our matching service. Once you book, we arrange the first session. There\'s no signup required – just submit an enquiry and we\'ll handle the rest.',
    },
    {
      question: 'Which grades and subjects do you cover?',
      answer:
        'We specialize in mathematics and physical science (physics and chemistry) for grades 8 through 11. Our programs are aligned with the South African curriculum to support classroom learning.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Satoshi'] font-semibold mb-4">Common Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center text-left hover:bg-gray-50 transition-colors gap-4 group"
              >
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 group-hover:text-gray-600 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pl-[3.5rem] text-[#46453A] leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
