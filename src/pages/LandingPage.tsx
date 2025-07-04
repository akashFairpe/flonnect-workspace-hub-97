
import { Header } from '@/components/Header';
import HeroSection from '@/components/landing/HeroSection';
import StatsSection from '@/components/landing/StatsSection';
import SolutionsSection from '@/components/landing/SolutionsSection';
import EnterpriseSection from '@/components/landing/EnterpriseSection';
import WorkflowSection from '@/components/landing/WorkflowSection';
import UseCasesSection from '@/components/landing/UseCasesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
import FinalCTASection from '@/components/landing/FinalCTASection';

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <HeroSection />
        <StatsSection />
        <SolutionsSection />
        <EnterpriseSection />
        <WorkflowSection />
        <UseCasesSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <FinalCTASection />
      </div>
    </>
  );
};

export default LandingPage;
