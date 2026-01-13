import { motion } from 'motion/react';

export function BackgroundOrb() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-black pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      style={{
        filter: 'blur(100px)',
      }}
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.25, 0.35, 0.25],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
