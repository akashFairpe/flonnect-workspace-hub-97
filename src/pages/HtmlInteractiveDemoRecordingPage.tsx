
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { MousePointer, Eye, Target, BarChart, Code, Zap } from 'lucide-react';

const features = [
  {
    title: 'Interactive Playback',
    description: 'Viewers can click on elements within the recorded demo, simulating real interaction',
    icon: MousePointer
  },
  {
    title: 'Automatic Element Recognition',
    description: 'Intelligent recognition of interactive elements (buttons, links, forms) on web pages',
    icon: Eye
  },
  {
    title: 'Hotspot Creation',
    description: 'Define custom hotspots for specific actions or navigation paths within the demo',
    icon: Target
  },
  {
    title: 'Analytics on Interaction',
    description: 'Track how users interact with your interactive demos for insights',
    icon: BarChart
  },
  {
    title: 'Embeddable Demos',
    description: 'Easily embed your interactive demos on websites, landing pages, or documentation',
    icon: Code
  },
  {
    title: 'Real-time Enhancement',
    description: 'Transform static recordings into dynamic and interactive experiences',
    icon: Zap
  }
];

const benefits = [
  'Provides an unparalleled way to showcase web applications and software features',
  'Significantly increases engagement compared to passive video demos',
  'Allows prospective users to "try before they buy" in a controlled environment',
  'Reduces the need for live demos, saving sales and support team resources',
  'Offers a powerful tool for product marketing, sales enablement, and user onboarding',
  'Creates immersive product experiences',
  'Increases conversion rates through interactive engagement',
  'Simplifies complex feature demonstrations'
];

const faqs = [
  {
    question: 'How is an interactive demo different from a regular video recording?',
    answer: 'Unlike a static video, an interactive demo allows viewers to click on elements within the recording, simulating actual interaction with the web application, making it highly engaging.'
  },
  {
    question: 'Do I need coding knowledge to create interactive demos?',
    answer: 'No, Flonnect automates the process of identifying interactive elements. You simply record your actions, and Flonnect generates the interactive demo.'
  },
  {
    question: 'Can I track how users interact with my interactive demos?',
    answer: 'Yes, Flonnect provides analytics to show you which parts of your demo users are interacting with, how long they spend, and conversion rates if applicable.'
  },
  {
    question: 'Where can I embed these interactive demos?',
    answer: 'You can easily embed your interactive demos on your website, landing pages, help documentation, sales pitches, and more, using a simple embed code.'
  },
  {
    question: 'What happens if a user clicks outside the defined interactive path?',
    answer: 'When a user clicks outside a defined hotspot, the demo typically guides them back to the intended path or provides a message, ensuring they stay on track and don\'t get lost.'
  }
];

export default function HtmlInteractiveDemoRecordingPage() {
  return (
    <FeaturePageTemplate
      title="HTML Interactive Demo Recording"
      description="Capture and create interactive demos of your web applications, allowing viewers to click and navigate as if using the live product."
      heroIcon={MousePointer}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Interactive Demo Recording"
      seoKeywords="interactive demo, HTML demo recording, web application demo, interactive recording, product demo, clickable demo"
      metaDescription="Create interactive demos of your web applications with clickable elements. Allow viewers to experience your product with realistic interaction and engagement."
    />
  );
}
