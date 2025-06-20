
import React from 'react';
import { TutorialTemplate } from '@/components/TutorialTemplate';

const steps = [
  {
    title: 'Install Flonnect Screen Recorder',
    description: 'Download and install the Flonnect screen recorder from our downloads page. Choose the version that matches your operating system (Windows, macOS) or browser (Chrome, Edge).',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop'
  },
  {
    title: 'Launch the Application',
    description: 'Open Flonnect from your applications folder, desktop shortcut, or browser extensions menu. The intuitive interface will guide you through the setup process.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop'
  },
  {
    title: 'Choose Your Recording Source',
    description: 'Select what you want to record: entire screen, specific application window, or browser tab. You can also choose to include your webcam and microphone for comprehensive recordings.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop'
  },
  {
    title: 'Configure Audio Settings',
    description: 'Set up your audio preferences. Choose to record system audio, microphone input, or both. Adjust volume levels and test your audio to ensure clear recordings.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=400&fit=crop'
  },
  {
    title: 'Start Recording',
    description: 'Click the red record button to begin capturing your screen. A countdown timer gives you time to prepare. The recording indicator shows you that capture is active.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=400&fit=crop'
  },
  {
    title: 'Control Your Recording',
    description: 'Use the floating control panel to pause, resume, or stop your recording. You can also use keyboard shortcuts for quick control without interrupting your workflow.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop'
  },
  {
    title: 'Preview and Edit',
    description: 'After stopping the recording, preview your video in the built-in player. Make basic edits like trimming the beginning or end, or use our advanced editing features.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop'
  },
  {
    title: 'Save and Export',
    description: 'Choose your preferred video format (MP4, AVI, MOV) and quality settings. Save the file to your desired location or export directly to cloud storage platforms.',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=400&fit=crop'
  }
];

const relatedTutorials = [
  { title: 'How to Share Your Recordings', url: '/tutorials/how-to-share' },
  { title: 'Advanced Recording Settings', url: '/tutorials/advanced-settings' },
  { title: 'Troubleshooting Common Issues', url: '/tutorials/troubleshooting' }
];

export default function HowToRecordPage() {
  return (
    <TutorialTemplate
      title="How to Record Your Screen"
      description="Learn how to create professional screen recordings with Flonnect. This step-by-step guide will take you from installation to creating your first recording."
      estimatedTime="10-15 min"
      difficulty="Beginner"
      category="Getting Started"
      steps={steps}
      relatedTutorials={relatedTutorials}
      seoKeywords="how to record screen, screen recording tutorial, Flonnect tutorial, record desktop, screen capture guide, video recording software"
      metaDescription="Complete step-by-step guide on how to record your screen using Flonnect screen recorder. Learn installation, setup, recording, and sharing in 15 minutes."
    />
  );
}
