
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Video, Monitor, Mic, Edit, Share2, Download } from 'lucide-react';

const features = [
  {
    title: 'High Quality Recording',
    description: 'Record your screen in up to 4K resolution with crystal clear audio',
    icon: Video
  },
  {
    title: 'Multiple Screen Support',
    description: 'Record single or multiple monitors simultaneously',
    icon: Monitor
  },
  {
    title: 'Audio Recording',
    description: 'Capture system audio, microphone, or both at the same time',
    icon: Mic
  },
  {
    title: 'Real-time Editing',
    description: 'Edit your recordings on the fly with built-in editing tools',
    icon: Edit
  },
  {
    title: 'Instant Sharing',
    description: 'Share your recordings instantly via link or export to various formats',
    icon: Share2
  },
  {
    title: 'Cloud Storage',
    description: 'Automatically save recordings to cloud storage platforms',
    icon: Download
  }
];

const benefits = [
  'Record unlimited videos with no time restrictions',
  'No watermarks on recordings',
  'Secure cloud storage with encryption',
  'Browser-based recording - no software installation required',
  'Compatible with all major operating systems',
  'Real-time collaboration features',
  'Advanced privacy controls',
  'Export to multiple formats (MP4, AVI, MOV, etc.)'
];

const faqs = [
  {
    question: 'What is the maximum resolution for screen recordings?',
    answer: 'Flonnect supports full HD (1080p) screen recording, ensuring crisp and clear video quality.'
  },
  {
    question: 'Can I record only a specific part of my screen?',
    answer: 'Yes, Flonnect allows you to select a specific window, application, or a custom region of your screen to record.'
  },
  {
    question: 'Does screen recording capture system audio and microphone audio simultaneously?',
    answer: 'Yes, you have the option to record both internal system audio and your microphone audio at the same time, or individually.'
  },
  {
    question: 'Is there a time limit for screen recordings?',
    answer: 'The duration of your screen recordings is limited by your Flonnect plan\'s storage capacity. Check your plan details for specific limits.'
  },
  {
    question: 'Can I edit screen recordings after capturing them?',
    answer: 'Flonnect provides basic in-app editing tools to trim, cut, and make simple enhancements to your screen recordings.'
  }
];

export default function ScreenRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Professional Screen Recording"
      description="Capture your screen with professional quality. Perfect for tutorials, presentations, demos, and more. Record, edit, and share in minutes."
      heroIcon={Video}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Recording Now"
      seoKeywords="screen recording, screen recorder, video capture, desktop recording, online screen recorder, tutorial recording, presentation recording"
      metaDescription="Professional screen recording tool for creating tutorials, presentations, and demos. High-quality video capture with audio, editing tools, and instant sharing."
    />
  );
}
