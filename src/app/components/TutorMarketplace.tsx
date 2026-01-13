import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

interface TutorMarketplaceProps {
  onBookTutor: () => void;
}

export function TutorMarketplace({ onBookTutor }: TutorMarketplaceProps) {
  const { ref, isInView } = useInView();

  const tutors = [
    {
      name: 'Sarah Nkosi',
      subjects: ['Mathematics', 'Physical Science'],
      grades: '8-11',
      location: 'Johannesburg North',
      availability: 'Mon-Fri afternoons',
    },
    {
      name: 'David Chen',
      subjects: ['Physics', 'Chemistry'],
      grades: '10-11',
      location: 'Sandton',
      availability: 'Weekdays & Saturdays',
    },
    {
      name: 'Thando Mthembu',
      subjects: ['Mathematics'],
      grades: '8-10',
      location: 'Randburg',
      availability: 'Flexible schedule',
    },
  ];

  return (
    <section id="tutors" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Find Your Tutor</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Connect with experienced tutors who match your learning style and schedule. All sessions are in-person for
            the best learning outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{tutor.name}</h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Subjects</p>
                  <p className="text-sm font-medium">{tutor.subjects.join(', ')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Grades</p>
                  <p className="text-sm font-medium">{tutor.grades}</p>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-medium">{tutor.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Availability</p>
                  <p className="text-sm font-medium">{tutor.availability}</p>
                </div>
              </div>

              <button
                onClick={onBookTutor}
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300"
              >
                Book Session
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center p-6 bg-white rounded-xl border border-gray-200"
        >
          <p className="text-gray-600 mb-4">
            Can't find the right match? We'll help you find a tutor that fits your specific needs.
          </p>
          <button
            onClick={onBookTutor}
            className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Request Tutor Matching
          </button>
        </motion.div>
      </div>
    </section>
  );
}
