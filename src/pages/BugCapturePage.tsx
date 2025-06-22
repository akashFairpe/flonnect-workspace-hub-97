
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Bug, Camera, FileText, Zap, Users, Shield } from 'lucide-react';

const features = [
  {
    title: 'One-Click Bug Reporting',
    description: 'Capture bugs instantly with a single click, including screenshots and video',
    icon: Zap
  },
  {
    title: 'Automatic Screenshots',
    description: 'Automatically capture relevant screenshots when bugs occur',
    icon: Camera
  },
  {
    title: 'Detailed Bug Reports',
    description: 'Generate comprehensive bug reports with technical details',
    icon: FileText
  },
  {
    title: 'Team Collaboration',
    description: 'Share bug reports with your team and track resolution progress',
    icon: Users
  },
  {
    title: 'Privacy Protection',
    description: 'Automatically blur sensitive information in bug reports',
    icon: Shield
  },
  {
    title: 'Integration Ready',
    description: 'Integrate with popular bug tracking tools like Jira, GitHub, and more',
    icon: Bug
  }
];

const benefits = [
  'Reduce bug reporting time by 80%',
  'Capture complete context automatically',
  'Integrate with existing development workflows',
  'Protect sensitive data with smart blurring',
  'Track bug resolution from report to fix',
  'Generate detailed technical logs',
  'Support for all major browsers and platforms',
  'Real-time team notifications'
];

export default function BugCapturePage() {
  return (
    <FeaturePageTemplate
      title="Smart Bug Capture & Reporting"
      description="Streamline your bug reporting process with intelligent capture tools. Automatically collect context, screenshots, and technical details for faster resolution."
      heroIcon={Bug}
      features={features}
      benefits={benefits}
      ctaText="Start Capturing Bugs"
      seoKeywords="bug capture, bug reporting, software testing, QA tools, bug tracking, issue reporting, software debugging, quality assurance"
      metaDescription="Intelligent bug capture tool that automatically collects screenshots, technical details, and context for faster bug resolution. Integrate with popular tracking systems."
    />
  );
}
