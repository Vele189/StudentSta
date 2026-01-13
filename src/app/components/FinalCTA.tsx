import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';

interface FinalCTAProps {
  onEnquire: () => void;
}

export function FinalCTA({ onEnquire }: FinalCTAProps) {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 bg-black text-white" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Transform your academic journey with expert guidance and support
          </p>
          <button
            onClick={onEnquire}
            className="px-10 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl text-lg font-medium"
          >
            Enquire Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
