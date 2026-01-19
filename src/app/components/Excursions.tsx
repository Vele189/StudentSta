import { motion } from 'motion/react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

export function Excursions() {
  const { ref, isInView } = useInView();

  const activities = [
    {
      icon: MapPin,
      title: 'Science Museum Visits',
      description: 'Explore physics and chemistry concepts through interactive exhibits and demonstrations.',
      curriculum: 'Grades 10-11 · Physics & Chemistry',
    },
    {
      icon: Calendar,
      title: 'Lab Workshops',
      description: 'Hands-on experiments that bring textbook concepts to life in real laboratory settings.',
      curriculum: 'Grades 8-11 · Physical Science',
    },
    {
      icon: Users,
      title: 'Group Study Sessions',
      description: 'Collaborative learning experiences with peers, focusing on problem-solving and exam preparation.',
      curriculum: 'Grades 9-11 · Maths & Science',
    },
  ];

  return (
    <section id="excursions" ref={ref} className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Satoshi'] font-semibold mb-4">Curriculum Activities</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Beyond the classroom: hands-on learning experiences that connect theory with practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="p-8 bg-black text-white rounded-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Why Curriculum Activities?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our curriculum-based activities extend learning beyond traditional tutoring. Students gain practical
                  understanding of concepts through real-world applications and collaborative experiences that make
                  abstract theories click.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All activities are carefully designed to align with the South African curriculum (CAPS), reinforcing
                  classroom learning while building critical thinking, problem-solving, and teamwork skills that are
                  essential for exam success.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  By taking science and maths out of the textbook and into the real world, we help students develop
                  a genuine passion for the subjects, leading to better engagement and improved academic results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black border border-gray-800 rounded-lg text-white">
                  <p className="text-2xl font-semibold mb-1">Monthly</p>
                  <p className="text-sm text-gray-400">Activity frequency</p>
                </div>
                <div className="p-4 bg-black border border-gray-800 rounded-lg text-white">
                  <p className="text-2xl font-semibold mb-1">15-20</p>
                  <p className="text-sm text-gray-400">Students per group</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Activities */}
          <div className="flex flex-col h-full justify-between gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-black border border-gray-800 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--accent-yellow)] text-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 text-white">{activity.title}</h4>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{activity.description}</p>
                      <p className="text-xs text-gray-400">{activity.curriculum}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
