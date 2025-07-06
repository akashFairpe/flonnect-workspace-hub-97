
import { Header } from '@/components/Header';
import EnterpriseHeroSection from '@/components/enterprise/EnterpriseHeroSection';
import EnterpriseModulesSection from '@/components/enterprise/EnterpriseModulesSection';
import EnterpriseWorkflowSection from '@/components/enterprise/EnterpriseWorkflowSection';
import EnterpriseTestimonialsSection from '@/components/enterprise/EnterpriseTestimonialsSection';
import EnterprisePricingSection from '@/components/enterprise/EnterprisePricingSection';
import EnterpriseCTASection from '@/components/enterprise/EnterpriseCTASection';
import EnterpriseSecuritySection from '@/components/enterprise/EnterpriseSecuritySection';
import EnterpriseIntegrationsSection from '@/components/enterprise/EnterpriseIntegrationsSection';

const ForEnterprisePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <EnterpriseHeroSection />
        <EnterpriseModulesSection />
        <EnterpriseWorkflowSection />
        <EnterpriseTestimonialsSection />
        <EnterpriseSecuritySection />
        <EnterpriseIntegrationsSection />
        <EnterprisePricingSection />
        <EnterpriseCTASection />
      </div>
    </>
  );
};

export default ForEnterprisePage;
