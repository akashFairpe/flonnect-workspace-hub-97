
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Move, Maximize, Eye, Layout, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    title: 'Drag-and-Drop Placement',
    description: 'Easily move your webcam overlay to any part of the screen in real-time',
    icon: Move
  },
  {
    title: 'Resizable Window',
    description: 'Adjust the size of your camera feed on the fly to suit your content',
    icon: Maximize
  },
  {
    title: 'Preserves Focus',
    description: 'Maintain focus on critical screen areas without your camera obscuring them',
    icon: Eye
  },
  {
    title: 'Dynamic Layouts',
    description: 'Create dynamic video layouts by repositioning your camera for different segments',
    icon: Layout
  },
  {
    title: 'Non-Intrusive Recording',
    description: 'Ensure your face is visible without blocking important on-screen information',
    icon: Smartphone
  },
  {
    title: 'Real-time Adjustment',
    description: 'Make layout changes instantly without stopping your recording',
    icon: Zap
  }
];

const benefits = [
  'Offers unparalleled flexibility in creating engaging screen and camera recordings',
  'Allows you to optimize your video layout for maximum clarity and impact',
  'Prevents your camera feed from obstructing crucial content on your screen',
  'Enhances the professional appearance of your presentations and tutorials',
  'Provides a seamless recording experience, allowing real-time adjustments',
  'Perfect for dynamic presentations and tutorials',
  'Maintains viewer engagement with optimal positioning',
  'Professional video layout control'
];

const faqs = [
  {
    question: 'Can I change the position of my camera feed while I\'m actively recording?',
    answer: 'Yes, the movable camera feature allows you to drag and drop your webcam overlay to different parts of the screen during the recording.'
  },
  {
    question: 'Does moving the camera affect the recording quality?',
    answer: 'No, moving the camera overlay does not affect the video quality of your screen or webcam feed. It\'s a real-time layout adjustment.'
  },
  {
    question: 'Can I make the camera feed bigger or smaller on the fly?',
    answer: 'Yes, you can easily resize your webcam window during recording to emphasize your presence or make more room for screen content.'
  },
  {
    question: 'Is the movable camera feature available for both the browser extension and desktop app?',
    answer: 'This feature is primarily available and more robust in the Flonnect desktop application, offering full control over your recording layout.'
  },
  {
    question: 'Will the camera automatically snap to certain positions?',
    answer: 'While it offers free-form dragging, it may also have snap-to-corner or alignment guides to help you position it precisely.'
  }
];

export default function MovableCameraPage() {
  return (
    <FeaturePageTemplate
      title="Movable Camera"
      description="Flexibly position and reposition your webcam feed anywhere on the screen during recording, maintaining optimal visual balance."
      heroIcon={Move}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Movable Camera Recording"
      seoKeywords="movable camera, webcam positioning, camera overlay, flexible recording, dynamic camera placement, screen recording with camera"
      metaDescription="Flexible camera positioning for screen recordings. Move and resize your webcam feed in real-time for optimal video layout and professional presentations."
    />
  );
}
