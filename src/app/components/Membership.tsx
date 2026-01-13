import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

interface MembershipProps {
  onJoinWaitlist: () => void;
}

export function Membership({ onJoinWaitlist }: MembershipProps) {
  const { ref, isInView } = useInView();

  const tiers = [
    {
      name: 'Standard Membership',
      description: 'Essential support for consistent academic progress',
      features: [
        'Weekly tutoring sessions',
        'Progress reports',
        'Study materials',
        'Homework support',
        'Email support',
      ],
      cta: 'Request Pricing',
    },
    {
      name: 'Premium Membership',
      description: 'Comprehensive support with enhanced benefits',
      features: [
        'All Standard features',
        'Priority scheduling',
        'Curriculum activities access',
        'Monthly excursions included',
        'Personal tutor matching',
        '24/7 support access',
      ],
      cta: 'Request Pricing',
      featured: true,
    },
  ];

  return (
    <section id="membership" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Membership Options</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the support level that works best for your academic goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-xl ${tier.featured
                  ? 'bg-black text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200'
                }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p
                className={`mb-6 ${tier.featured ? 'text-gray-300' : 'text-gray-600'
                  }`}
              >
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check
                      className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${tier.featured ? 'text-white' : 'text-black'
                        }`}
                    />
                    <span className={tier.featured ? 'text-gray-100' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onJoinWaitlist}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${tier.featured
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-900'
                  }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
