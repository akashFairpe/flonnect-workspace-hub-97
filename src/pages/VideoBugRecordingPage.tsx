
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Video, Mic, MousePointer, Database, Link, Zap } from 'lucide-react';

const features = [
  {
    title: 'High-Quality Video Capture',
    description: 'Record screen activity to demonstrate the exact steps to reproduce a bug',
    icon: Video
  },
  {
    title: 'Simultaneous Audio Capture',
    description: 'Narrate the bug reproduction steps with clear microphone audio',
    icon: Mic
  },
  {
    title: 'Visual Click Indicators',
    description: 'Highlight mouse clicks and keypresses to guide developers',
    icon: MousePointer
  },
  {
    title: 'Automated System Info',
    description: 'Automatically collects browser, OS, and console logs with the video',
    icon: Database
  },
  {
    title: 'Direct Integration with Trackers',
    description: 'Push video bug reports directly to Jira, GitHub, and other tools',
    icon: Link
  },
  {
    title: 'Comprehensive Bug Context',
    description: 'Complete visual and technical context for faster resolution',
    icon: Zap
  }
];

const benefits = [
  'Eliminates guesswork by showing developers the bug exactly as it occurs',
  'Accelerates bug diagnosis and resolution, leading to faster development cycles',
  'Reduces communication overhead between testers, developers, and product managers',
  'Provides comprehensive context, leading to higher quality bug fixes',
  'Transforms complex bug reporting into a simple, visual, and effective process',
  'Clear visual demonstration of issues',
  'Professional narration and explanation',
  'Automated technical data collection'
];

const faqs = [
  {
    question: 'Why is video better than screenshots for bug reporting?',
    answer: 'Video provides dynamic context, showing the exact steps to reproduce a bug, intermittent issues, and real-time behavior that static screenshots cannot convey, leading to faster diagnoses.'
  },
  {
    question: 'Can I narrate the bug reproduction steps while recording?',
    answer: 'Yes, you can record your microphone audio simultaneously to provide verbal explanations and context for the bug.'
  },
  {
    question: 'Does the video bug report include technical logs?',
    answer: 'Yes, Flonnect automatically collects relevant technical data like browser console logs, network requests, and system information alongside the video recording.'
  },
  {
    question: 'What is the maximum video length for a bug report?',
    answer: 'While you can record for extended periods, it\'s generally recommended to keep bug report videos concise, focusing only on the reproduction steps, typically under 5 minutes. Your plan\'s storage limits apply.'
  },
  {
    question: 'Can I highlight my clicks and keypresses in the video?',
    answer: 'Yes, Flonnect offers visual indicators for mouse clicks and keyboard inputs, making it incredibly clear for developers to follow your actions.'
  }
];

export default function VideoBugRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Video Bug Recording"
      description="Record detailed video demonstrations of bugs, providing developers with clear, actionable insights for faster resolution."
      heroIcon={Video}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Video Bug Recording"
      seoKeywords="video bug recording, bug reporting, software testing, QA testing, bug tracking, issue documentation, development workflow"
      metaDescription="Professional video bug recording with narration, click indicators, and automated technical data collection. Accelerate bug resolution with visual context."
    />
  );
}
