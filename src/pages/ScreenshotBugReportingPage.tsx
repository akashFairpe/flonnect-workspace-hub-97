
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Camera, Edit, Database, Share2, Link, Zap } from 'lucide-react';

const features = [
  {
    title: 'Instant Screenshot Capture',
    description: 'Grab full-screen, window, or selected area screenshots quickly',
    icon: Camera
  },
  {
    title: 'Powerful Annotation Tools',
    description: 'Draw, highlight, add text, and blur sensitive information on screenshots',
    icon: Edit
  },
  {
    title: 'Automated Context Capture',
    description: 'Includes browser/OS details, console logs, and network requests with the screenshot',
    icon: Database
  },
  {
    title: 'Direct Issue Tracker Integration',
    description: 'Push annotated screenshots directly to your favorite bug tracking tools',
    icon: Link
  },
  {
    title: 'Shareable Reports',
    description: 'Generate shareable links for your bug reports for easy collaboration',
    icon: Share2
  },
  {
    title: 'Instant Bug Reporting',
    description: 'One-click bug reporting with comprehensive context',
    icon: Zap
  }
];

const benefits = [
  'Significantly reduces the time and effort required to report and understand bugs',
  'Provides developers with precise visual and technical context, accelerating fixes',
  'Minimizes back-and-forth communication between QA and development teams',
  'Enhances the clarity and completeness of every bug report',
  'Streamlines the QA process and improves overall software quality',
  'Automated technical data collection',
  'Professional annotation and markup tools',
  'Seamless integration with development workflows'
];

const faqs = [
  {
    question: 'Can I annotate screenshots with arrows and text?',
    answer: 'Yes, Flonnect offers a rich set of annotation tools including arrows, shapes, text, and blurring options to highlight critical areas.'
  },
  {
    question: 'Does Flonnect automatically capture system information with the screenshot?',
    answer: 'Yes, it captures relevant technical details like browser version, OS, screen resolution, and often console logs or network requests to provide comprehensive context.'
  },
  {
    question: 'Can I share these annotated screenshots directly to Slack or other communication tools?',
    answer: 'Yes,, in addition to direct issue tracker integrations, you can generate shareable links for easy sharing in any communication platform.'
  },
  {
    question: 'Is it possible to blur sensitive information on a screenshot?',
    answer: 'Absolutely. Flonnect provides a blur tool specifically for obscuring sensitive data such as personal information or financial details.'
  },
  {
    question: 'How does this differ from a standard screenshot tool?',
    answer: 'Flonnect goes beyond basic screenshots by adding robust annotation capabilities, automated context capture, and direct integration with bug tracking systems, specifically designed for bug reporting workflows.'
  }
];

export default function ScreenshotBugReportingPage() {
  return (
    <FeaturePageTemplate
      title="Screenshot Bug Reporting"
      description="Capture and annotate screenshots for crystal-clear bug reports, accelerating the identification and resolution of issues."
      heroIcon={Camera}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Screenshot Bug Reporting"
      seoKeywords="screenshot bug reporting, bug reporting tool, QA testing, software testing, bug tracking, issue reporting, development workflow"
      metaDescription="Professional screenshot bug reporting with powerful annotation tools and automated context capture. Streamline QA testing and bug tracking workflows."
    />
  );
}
