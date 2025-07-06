
import { Header } from '@/components/Header';
import HeroSection from '@/components/landing/HeroSection';
import StatsSection from '@/components/landing/StatsSection';
import CoreAIFeaturesSection from '@/components/landing/CoreAIFeaturesSection';
import WorkflowSection from '@/components/landing/WorkflowSection';
import EnterpriseBenefitsSection from '@/components/landing/EnterpriseBenefitsSection';
import ImprovedUseCasesSection from '@/components/landing/ImprovedUseCasesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
import FinalCTASection from '@/components/landing/FinalCTASection';

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <CoreAIFeaturesSection />
        <WorkflowSection />
        <EnterpriseBenefitsSection />
        <ImprovedUseCasesSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <FinalCTASection />
      </div>
    </>
  );
};

export default LandingPage;
