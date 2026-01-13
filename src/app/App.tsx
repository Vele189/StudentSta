import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { TrustBar } from '@/app/components/TrustBar';
import { Programs } from '@/app/components/Programs';
import { Membership } from '@/app/components/Membership';
import { Excursions } from '@/app/components/Excursions';
import { TutorMarketplace } from '@/app/components/TutorMarketplace';
import { HowItWorks } from '@/app/components/HowItWorks';
import { Testimonials } from '@/app/components/Testimonials';
import { FAQ } from '@/app/components/FAQ';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';
import { EnquiryModal } from '@/app/components/EnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<'general' | 'tutor'>('general');

  const openEnquiryModal = (type: 'general' | 'tutor' = 'general') => {
    setEnquiryType(type);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-black">
      <Header onEnquireClick={() => openEnquiryModal('general')} />
      <main>
        <Hero onGetStarted={() => openEnquiryModal('general')} />
        <TrustBar />
        <Programs onEnquire={() => openEnquiryModal('general')} />
        <Membership onJoinWaitlist={() => openEnquiryModal('general')} />
        <Excursions />
        <TutorMarketplace onBookTutor={() => openEnquiryModal('tutor')} />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA onEnquire={() => openEnquiryModal('general')} />
      </main>
      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        type={enquiryType}
      />
    </div>
  );
}