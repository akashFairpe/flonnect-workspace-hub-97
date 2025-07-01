
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/demo-capture/HeroSection';
import { BenefitsSection } from '@/components/demo-capture/BenefitsSection';
import { FeaturesSection } from '@/components/demo-capture/FeaturesSection';
import { UseCasesSection } from '@/components/demo-capture/UseCasesSection';
import { AnalyticsSection } from '@/components/demo-capture/AnalyticsSection';
import { WorkspaceSection } from '@/components/demo-capture/WorkspaceSection';
import { ModesSection } from '@/components/demo-capture/ModesSection';
import { AdditionalFeaturesSection } from '@/components/demo-capture/AdditionalFeaturesSection';
import { ProductTourCTA, FinalCTA } from '@/components/demo-capture/CTASections';

export default function InteractiveDemoCapturePage() {
  React.useEffect(() => {
    document.title = 'Interactive Demo Capture - Create Seamless Software Onboarding | Flonnect';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create engaging interactive demos and onboarding videos with Flonnect. Increase retention rates by up to 50% with professional voiceovers, analytics, and seamless sharing options.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Create engaging interactive demos and onboarding videos with Flonnect. Increase retention rates by up to 50% with professional voiceovers, analytics, and seamless sharing options.';
      document.head.appendChild(newMetaDesc);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Flonnect Interactive Demo Capture",
      "description": "Create engaging interactive demos and onboarding videos with professional features",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web Browser, Windows, Mac",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive Demo Creation",
        "AI-Powered Voiceover",
        "Google Analytics Integration",
        "Multi-format Export",
        "Team Collaboration",
        "Brand Customization"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <UseCasesSection />
        <AnalyticsSection />
        <WorkspaceSection />
        <ModesSection />
        <AdditionalFeaturesSection />
        <ProductTourCTA />
        <FinalCTA />
      </main>
    </div>
  );
}
