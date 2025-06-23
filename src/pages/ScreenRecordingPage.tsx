
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Video, Monitor, Mic, Edit, Share2, Download } from 'lucide-react';

const features = [
  {
    title: 'Full HD Screen Capture',
    description: 'Record your entire screen or selected areas in stunning 1080p resolution',
    icon: Video
  },
  {
    title: 'Customizable Recording Area',
    description: 'Choose to record full screen, a specific window, or a custom region',
    icon: Monitor
  },
  {
    title: 'System Audio Capture',
    description: 'Record internal system sounds directly from your computer during screen capture',
    icon: Mic
  },
  {
    title: 'Cursor Highlighting',
    description: 'Make your tutorials clearer by highlighting mouse clicks and cursor movements',
    icon: Edit
  },
  {
    title: 'Pause and Resume',
    description: 'Conveniently pause and resume your screen recording sessions as needed',
    icon: Share2
  },
  {
    title: 'Cloud Storage',
    description: 'Automatically save recordings to cloud storage platforms',
    icon: Download
  }
];

const benefits = [
  'Produces professional-grade screen recordings ideal for various applications',
  'Simplifies the creation of training materials, software demos, and how-to guides',
  'Ensures clear communication of complex processes with visual and audio cues',
  'Offers flexibility to capture exactly what you need without unnecessary clutter',
  'Provides a reliable solution for documenting software bugs or technical issues',
  'Record unlimited videos with no time restrictions',
  'No watermarks on recordings',
  'Browser-based recording - no software installation required'
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
      title="Screen Recording"
      description="Capture your screen activity with professional quality, perfect for tutorials, demonstrations, and educational content."
      heroIcon={Video}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Recording Screen"
      seoKeywords="screen recording, screen recorder, video capture, desktop recording, online screen recorder, tutorial recording, presentation recording"
      metaDescription="Professional screen recording tool for creating tutorials, presentations, and demos. High-quality video capture with audio, editing tools, and instant sharing."
    />
  );
}
