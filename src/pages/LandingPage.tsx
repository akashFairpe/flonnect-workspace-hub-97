
import React from 'react';
import { Header } from '@/components/Header';
import HeroSection from '@/components/landing/HeroSection';
import StatsSection from '@/components/landing/StatsSection';
import FlonnectAISection from '@/components/landing/FlonnectAISection';
import SolutionsSection from '@/components/landing/SolutionsSection';
import EnterpriseSection from '@/components/landing/EnterpriseSection';
import WorkflowSection from '@/components/landing/WorkflowSection';
import UseCasesSection from '@/components/landing/UseCasesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
import EnterpriseExtensionSection from '@/components/landing/EnterpriseExtensionSection';
import FinalCTASection from '@/components/landing/FinalCTASection';

const LandingPage = () => {
  React.useEffect(() => {
    document.title = 'Flonnect AI | Professional Video Recording & Collaboration Platform';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Flonnect AI is the leading video recording and collaboration platform for teams. Record meetings, create presentations, capture bugs, and share videos with ease. Start your free trial today.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Flonnect AI is the leading video recording and collaboration platform for teams. Record meetings, create presentations, capture bugs, and share videos with ease. Start your free trial today.';
      document.head.appendChild(newMetaDesc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'video recording, screen recording, meeting recording, video collaboration, presentation recording, bug reporting, video sharing, AI video tools');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'video recording, screen recording, meeting recording, video collaboration, presentation recording, bug reporting, video sharing, AI video tools';
      document.head.appendChild(newMetaKeywords);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <HeroSection />
        <StatsSection />
        <FlonnectAISection />
        <SolutionsSection />
        <EnterpriseSection />
        <WorkflowSection />
        <UseCasesSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <EnterpriseExtensionSection />
        <FinalCTASection />
      </div>
    </>
  );
};

export default LandingPage;
