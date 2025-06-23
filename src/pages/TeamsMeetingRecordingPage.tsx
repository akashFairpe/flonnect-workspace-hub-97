
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Users, Video, FileText, Share2, Shield, Clock } from 'lucide-react';

const features = [
  {
    title: 'Seamless Teams Integration',
    description: 'Record Microsoft Teams meetings directly with one-click activation',
    icon: Users
  },
  {
    title: 'HD Video Quality',
    description: 'Capture meetings in high definition with clear audio quality',
    icon: Video
  },
  {
    title: 'Auto Transcription',
    description: 'Automatically generate meeting transcripts with speaker identification',
    icon: FileText
  },
  {
    title: 'Instant Sharing',
    description: 'Share recordings immediately after meetings with team members',
    icon: Share2
  },
  {
    title: 'Secure Storage',
    description: 'Enterprise-grade security with encrypted storage and access controls',
    icon: Shield
  },
  {
    title: 'Smart Scheduling',
    description: 'Automatically start recording based on calendar integration',
    icon: Clock
  }
];

const benefits = [
  'Never miss important meeting details',
  'Comply with corporate recording policies',
  'Share knowledge with absent team members',
  'Create searchable meeting archives',
  'Generate automatic meeting summaries',
  'Integrate with existing Microsoft 365 workflows',
  'Support for breakout room recordings',
  'Advanced analytics and usage reports'
];

const faqs = [
  {
    question: 'How does Flonnect integrate with Microsoft Teams for recording?',
    answer: 'Flonnect seamlessly integrates via our desktop application, allowing you to initiate recordings of any Teams meeting you are part of.'
  },
  {
    question: 'Is it possible to record a private chat call in Microsoft Teams?',
    answer: 'Flonnect is designed to record scheduled meetings and group calls within Teams. For private chat calls, please refer to our dedicated camera recording feature if you need to capture direct interactions.'
  },
  {
    question: 'What is the maximum duration for a Teams meeting recording?',
    answer: 'Flonnect supports extended recording durations, limited only by your storage plan. Check your subscription details for specifics.'
  },
  {
    question: 'Can I edit my Teams meeting recordings after they are saved?',
    answer: 'Yes, Flonnect provides basic editing tools to trim, cut, and enhance your recordings directly within the platform.'
  },
  {
    question: 'Does Flonnect ensure data privacy for Teams recordings?',
    answer: 'Absolutely. Flonnect adheres to strict data privacy protocols, ensuring your Teams recordings are confidential and compliant with relevant regulations.'
  }
];

export default function TeamsMeetingRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Microsoft Teams Meeting Recording"
      description="Record, transcribe, and share your Microsoft Teams meetings effortlessly. Perfect for compliance, training, and knowledge sharing across your organization."
      heroIcon={Users}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Recording Teams"
      seoKeywords="Teams meeting recording, Microsoft Teams recorder, meeting transcription, video conferencing, remote collaboration, meeting notes, Teams integration"
      metaDescription="Professional Microsoft Teams meeting recording solution with automatic transcription, secure storage, and seamless sharing. Perfect for enterprise compliance and collaboration."
    />
  );
}
