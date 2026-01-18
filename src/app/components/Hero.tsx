import { motion } from 'motion/react';

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
            className="font-['Satoshi'] font-medium text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 leading-[1.1] text-[#46443A]"
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
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-[var(--accent-yellow)] hover:text-black transition-all duration-300 hover:shadow-xl min-w-[180px]"
            >
              Get Started
            </button>
            <button
              onClick={scrollToPrograms}
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-lg hover:bg-[var(--accent-yellow)] hover:border-[var(--accent-yellow)] transition-all duration-300 min-w-[180px]"
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

          <motion.button
            onClick={scrollToPrograms}
            className="mx-auto mt-12 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.5 },
              y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
            }}
          >
            <div className="w-[30px] h-[50px] border-2 border-current rounded-full flex justify-center p-2">
              <motion.div
                className="w-1 h-3 bg-current rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
