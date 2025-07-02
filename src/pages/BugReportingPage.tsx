
import React from 'react';
import { Header } from '@/components/Header';
import { BugReportingHero } from '@/components/bug-reporting/BugReportingHero';
import { BugReportingFeatures } from '@/components/bug-reporting/BugReportingFeatures';
import { BugReportingModes } from '@/components/bug-reporting/BugReportingModes';
import { BugReportingWorkflow } from '@/components/bug-reporting/BugReportingWorkflow';
import { BugReportingIntegrations } from '@/components/bug-reporting/BugReportingIntegrations';
import { BugReportingTestimonials } from '@/components/bug-reporting/BugReportingTestimonials';
import { BugReportingCTA } from '@/components/bug-reporting/BugReportingCTA';

export default function BugReportingPage() {
  React.useEffect(() => {
    document.title = 'Bug Reporting Tool - Flonnect | Screenshot & Video Bug Tracking';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Professional bug reporting tool with screenshot and video capture. Streamline QA testing with automatic network logging and seamless integrations with Jira, ClickUp and more.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Professional bug reporting tool with screenshot and video capture. Streamline QA testing with automatic network logging and seamless integrations with Jira, ClickUp and more.';
      document.head.appendChild(newMetaDesc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'bug reporting, QA testing, screenshot tool, video bug recording, software testing, bug tracking, Jira integration, ClickUp integration, network logging, API debugging');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'bug reporting, QA testing, screenshot tool, video bug recording, software testing, bug tracking, Jira integration, ClickUp integration, network logging, API debugging';
      document.head.appendChild(newMetaKeywords);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <BugReportingHero />
        <BugReportingTestimonials />
        <BugReportingFeatures />
        <BugReportingModes />
        <BugReportingWorkflow />
        <BugReportingIntegrations />
        <BugReportingCTA />
      </main>
    </div>
  );
}
