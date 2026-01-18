import { motion } from 'motion/react';
import { Search, Calendar, TrendingUp } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

export function HowItWorks() {
  const { ref, isInView } = useInView();

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Choose Your Support',
      description:
        'Select from our programs, membership tiers, or browse our tutor marketplace to find the perfect fit for your needs.',
    },
    {
      icon: Calendar,
      number: '02',
      title: 'Schedule Sessions',
      description:
        'Book in-person sessions at convenient times and locations. Request a tutor match or join our curriculum activities.',
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Track Progress',
      description:
        'Receive regular progress reports, access study materials, and participate in monthly activities to reinforce learning.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Satoshi'] font-semibold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. Three steps to academic success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="text-6xl font-semibold text-black mb-4">{step.number}</div>

                {/* Icon */}
                <div className="w-14 h-14 bg-[var(--accent-yellow)] text-black rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Connector Line (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-px bg-gray-200 -z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
