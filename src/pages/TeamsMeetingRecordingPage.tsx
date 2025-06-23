
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Users, Video, FileText, Share2, Shield, Clock } from 'lucide-react';

const features = [
  {
    title: 'High-Quality Teams Recording',
    description: 'Record crystal-clear audio and video of your Microsoft Teams calls and meetings',
    icon: Video
  },
  {
    title: 'Secure Cloud Storage',
    description: 'All Teams recordings are safely stored in your Flonnect cloud account, compliant with privacy standards',
    icon: Shield
  },
  {
    title: 'Speaker Identification',
    description: 'Easily identify who said what with intelligent speaker recognition in your Teams recordings',
    icon: Users
  },
  {
    title: 'One-Click Sharing',
    description: 'Generate shareable links for your Teams recordings, making distribution simple and secure',
    icon: Share2
  },
  {
    title: 'Cross-Platform Access',
    description: 'Access your Teams meeting recordings from both Flonnect\'s extension and desktop application',
    icon: Clock
  },
  {
    title: 'Auto Transcription',
    description: 'Automatically generate meeting transcripts with speaker identification',
    icon: FileText
  }
];

const benefits = [
  'Ensures comprehensive record-keeping of all your vital Teams communications',
  'Boosts productivity by allowing asynchronous review of missed or important meetings',
  'Facilitates compliance and governance by securely archiving meeting content',
  'Simplifies knowledge transfer for new team members by providing access to past discussions',
  'Offers flexible recording options via both browser extension and dedicated desktop app',
  'Never miss important meeting details',
  'Comply with corporate recording policies',
  'Share knowledge with absent team members'
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
      description="Securely record your Microsoft Teams meetings to preserve important discussions, decisions, and action items."
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
