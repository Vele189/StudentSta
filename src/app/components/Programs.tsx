import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, Beaker, Calendar, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

interface ProgramsProps {
  onEnquire: () => void;
}

export function Programs({ onEnquire }: ProgramsProps) {
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  useState(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  });

  const programs = [
    {
      icon: BookOpen,
      title: 'Grade 8–9 Support',
      description:
        'Build a strong foundation in mathematics and physical science with structured weekly sessions.',
      features: ['Weekly in-person sessions', 'Foundation building', 'Homework support'],
    },
    {
      icon: GraduationCap,
      title: 'Grade 10–11 Exam Prep',
      description:
        'Intensive exam preparation focused on mastering key concepts, exam techniques, and achieving top results.',
      features: ['Exam-focused curriculum', 'Past paper practice', 'Time management skills'],
    },
    {
      icon: Beaker,
      title: 'Physical Science Mastery',
      description:
        'Specialized support for both physics and chemistry components with practical demonstrations.',
      features: ['Physics & chemistry focus', 'Practical demonstrations', 'Concept visualization'],
    },
    {
      icon: Trophy,
      title: 'Matric Final Push',
      description:
        'The ultimate preparation package for Grade 12s, ensuring you walk into your finals with absolute confidence.',
      features: ['Advanced problem solving', 'Predictive papers', 'Stress management'],
    },
    {
      icon: Calendar,
      title: 'Holiday Bootcamps',
      description:
        'High-intensity revision weeks during school holidays to catch up or get ahead on critical topics.',
      features: ['Intensive revision', 'Topic-specific workshops', 'Group learning'],
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const getCardStyle = (index: number) => {
    // Calculate distance from active index, handling wrapping
    const total = programs.length;
    let distance = (index - activeIndex + total) % total;
    if (distance > 2) distance -= total;

    // --- MOBILE LAYOUT (Simple Slide) ---
    if (isMobile) {
      if (distance === 0) {
        return {
          zIndex: 10,
          opacity: 1,
          scale: 1,
          x: 0,
          rotateY: 0,
          display: 'flex', // flex to maintain internal layout
        };
      }
      return {
        zIndex: 0,
        opacity: 0,
        scale: 0.9,
        x: distance > 0 ? 100 : -100, // Just a small offset for exit animation
        rotateY: 0,
        display: 'none',
      };
    }

    // --- DESKTOP LAYOUT (3D Carousel) ---
    if (distance === 0) {
      return {
        zIndex: 30,
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
        display: 'block',
      };
    } else if (distance === 1) {
      return {
        zIndex: 20,
        opacity: 1,
        scale: 0.85,
        x: 260,
        rotateY: -20,
        display: 'block',
      };
    } else if (distance === -1) {
      return {
        zIndex: 20,
        opacity: 1,
        scale: 0.85,
        x: -260,
        rotateY: 20,
        display: 'block',
      };
    } else if (distance === 2) {
      return {
        zIndex: 10,
        opacity: 1,
        scale: 0.7,
        x: 380,
        rotateY: -35,
        display: 'block',
      };
    } else if (distance === -2) {
      return {
        zIndex: 10,
        opacity: 1,
        scale: 0.7,
        x: -380, // Corrected from -380
        rotateY: 35,
        display: 'block',
      };
    }
    return { display: 'none' };
  };

  return (
    <section id="programs" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-['Satoshi'] font-semibold mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Structured learning pathways designed for grades 8 through 12
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[550px] flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-[400px] h-[500px]"> {/* Card container size */}
            <AnimatePresence>
              {programs.map((program, index) => {
                const style = getCardStyle(index);
                const Icon = program.icon;

                return (
                  <motion.div
                    key={program.title}
                    className="absolute top-0 left-0 w-full h-full bg-white border border-gray-200 rounded-2xl shadow-xl p-8 flex flex-col justify-between"
                    initial={false}
                    animate={style as any}
                    transition={isMobile ? { duration: 0.3 } : { type: "spring", stiffness: 300, damping: 30 }}
                    drag={isMobile ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = offset.x; // >0 is right (prev), <0 is left (next)
                      if (swipe < -50) {
                        nextSlide();
                      } else if (swipe > 50) {
                        prevSlide();
                      }
                    }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 ${['Holiday Bootcamps', 'Matric Final Push'].includes(program.title)
                          ? 'bg-[var(--accent-yellow)] text-black'
                          : 'bg-black text-white'
                          }`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold">{program.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">{program.description}</p>

                      <ul className="space-y-4 mb-8">
                        {program.features.map((feature) => (
                          <li key={feature} className="text-sm text-gray-700 flex items-center font-medium">
                            <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEnquire();
                      }}
                      className="w-full py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all duration-300 mt-auto"
                    >
                      Learn More
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <button
            onClick={prevSlide}
            className="hidden md:block p-4 rounded-full bg-gray-100 hover:bg-[#46443A] hover:text-white text-black transition-colors"
            aria-label="Previous Program"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {programs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[var(--accent-yellow)] w-8' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="hidden md:block p-4 rounded-full bg-gray-100 hover:bg-[#46443A] hover:text-white text-black transition-colors"
            aria-label="Next Program"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
