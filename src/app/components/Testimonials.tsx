import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';

export function Testimonials() {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      name: 'Lerato M.',
      grade: 'Grade 11 Student',
      quote:
        'The in-person sessions made such a difference. My physics marks improved by 25% in one term, and I finally understand concepts that confused me for months.',
    },
    {
      name: 'James K.',
      role: 'Parent',
      quote:
        'The tutors are professional and truly care about student success. Our daughter looks forward to every session and her confidence has grown tremendously.',
    },
    {
      name: 'Ntombi P.',
      grade: 'Grade 10 Student',
      quote:
        'The curriculum activities are amazing! We visited a science museum and it brought everything from class to life. I actually enjoy studying now.',
    },
    {
      name: 'Thabo S.',
      grade: 'Grade 9 Student',
      quote:
        'Maths used to be my worst subject, now it’s my favourite! The tutors explains things in a way that actually makes sense.',
    },
    {
      name: 'Michelle R.',
      grade: 'Grade 12 Student',
      quote:
        'The Matric Final Push program saved me. The predictive papers were spot on and I felt so ready for my finals.',
    },
    {
      name: 'Priya D.',
      role: 'Parent',
      quote:
        'As a working parent, knowing my son is in safe hands getting quality academic support gives me such peace of mind.',
    },
    {
      name: 'David W.',
      grade: 'Grade 10 Student',
      quote:
        'I was failing Physical Science at the start of the year. After joining, I ended term 3 with a distinction!',
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={ref} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Student Success</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students and parents about their experience
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        <div className="flex">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[400px] p-8 bg-white rounded-xl border border-gray-200 flex-shrink-0"
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.quote}</p>

                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.grade || testimonial.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
