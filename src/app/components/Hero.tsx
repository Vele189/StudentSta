import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { BackgroundOrb } from './BackgroundOrb';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const scrollToPrograms = () => {
    const element = document.querySelector('#programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32">
      <BackgroundOrb />
      <div className="relative z-10 max-w-[1200px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master Maths &<br />
            Physical Science
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            In-person tutoring and curriculum-based activities for grades 8–11.
            Build confidence and achieve excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:shadow-xl min-w-[180px]"
            >
              Get Started
            </button>
            <button
              onClick={scrollToPrograms}
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-50 transition-all duration-300 min-w-[180px]"
            >
              View Programs
            </button>
          </motion.div>

          <motion.p
            className="text-sm text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Personalized support · Expert tutors · In-person learning
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToPrograms}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.button>
      </div>
    </section>
  );
}
