import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'general' | 'tutor';
}

export function EnquiryModal({ isOpen, onClose, type }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    grade: '',
    subject: '',
    preferredDate: '',
    location: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        fullName: '',
        contact: '',
        grade: '',
        subject: '',
        preferredDate: '',
        location: '',
        message: '',
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-50"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <Dialog.Title className="text-2xl font-semibold">
                      {type === 'tutor' ? 'Book a Tutor' : 'General Enquiry'}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact" className="block text-sm font-medium mb-1.5">
                          Email or Phone *
                        </label>
                        <input
                          type="text"
                          id="contact"
                          name="contact"
                          required
                          value={formData.contact}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>

                      <div>
                        <label htmlFor="grade" className="block text-sm font-medium mb-1.5">
                          Grade *
                        </label>
                        <select
                          id="grade"
                          name="grade"
                          required
                          value={formData.grade}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        >
                          <option value="">Select grade</option>
                          <option value="8">Grade 8</option>
                          <option value="9">Grade 9</option>
                          <option value="10">Grade 10</option>
                          <option value="11">Grade 11</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        >
                          <option value="">Select subject</option>
                          <option value="maths">Mathematics</option>
                          <option value="physical-science">Physical Science</option>
                          <option value="physics">Physics</option>
                          <option value="chemistry">Chemistry</option>
                        </select>
                      </div>

                      {type === 'tutor' && (
                        <>
                          <div>
                            <label htmlFor="preferredDate" className="block text-sm font-medium mb-1.5">
                              Preferred Date/Time
                            </label>
                            <input
                              type="text"
                              id="preferredDate"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              placeholder="e.g., Mon-Fri afternoons"
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>

                          <div>
                            <label htmlFor="location" className="block text-sm font-medium mb-1.5">
                              Preferred Location
                            </label>
                            <input
                              type="text"
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              placeholder="e.g., Sandton"
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>
                        </>
                      )}

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your needs..."
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300 font-medium"
                      >
                        Submit Enquiry
                      </button>
                    </form>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        We've received your enquiry and will get back to you shortly.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
