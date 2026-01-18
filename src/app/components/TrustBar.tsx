import { motion } from 'motion/react';

export function TrustBar() {
  const items = [
    'Grades 8–11',
    'Maths & Physical Science',
    'In-person lessons',
    'Curriculum-based activities',
    'Expert Tutors',
    'Exam Preparation',
    'Small Group Classes',
    'Individual Attention',
    'Proven Results',
  ];

  // Duplicate items to ensure seamless infinite scrolling
  const duplicatedItems = [...items, ...items];

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-full">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: '-50%' }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex-shrink-0">
              <p className="text-[18px] font-['Satoshi'] text-gray-800">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
