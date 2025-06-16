
import HeroSection from '@/components/HeroSection';
import UseCasesSection from '@/components/UseCasesSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-16">
        <HeroSection />
        <UseCasesSection />
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Index;
