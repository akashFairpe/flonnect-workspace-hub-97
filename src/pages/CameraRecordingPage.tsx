
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Camera, Mic, Users, Settings, Video, Zap } from 'lucide-react';

const features = [
  {
    title: 'Full HD Webcam Capture',
    description: 'Record crisp and clear video using your built-in or external webcam',
    icon: Camera
  },
  {
    title: 'Microphone Audio Integration',
    description: 'Capture high-fidelity audio directly from your microphone during camera recording',
    icon: Mic
  },
  {
    title: 'Virtual Backgrounds',
    description: 'Replace your background with a custom image or blur it for privacy and professionalism',
    icon: Users
  },
  {
    title: 'Lighting Adjustments',
    description: 'Optimize your video quality with built-in brightness and contrast controls',
    icon: Settings
  },
  {
    title: 'Quick Start & Stop',
    description: 'Easily initiate and conclude your camera recording sessions with a single click',
    icon: Zap
  },
  {
    title: 'Professional Quality',
    description: 'Ensure professional video quality even with standard webcam setups',
    icon: Video
  }
];

const benefits = [
  'Provides a simple yet powerful way to create personal and direct video messages',
  'Ideal for internal communications, team updates, or quick video explanations',
  'Ensures professional video quality even with standard webcam setups',
  'Saves time by eliminating the need for complex recording equipment',
  'Offers a convenient solution for remote teams to stay connected face-to-face',
  'Perfect for creating vlogs, testimonials, and personal content',
  'Enables quick video responses and communications',
  'Supports virtual backgrounds for professional appearance'
];

const faqs = [
  {
    question: 'What kind of webcam do I need for high-quality camera recording?',
    answer: 'Flonnect works with most standard webcams. For optimal quality, we recommend a 1080p (Full HD) webcam.'
  },
  {
    question: 'Can I record only my camera without screen or system audio?',
    answer: 'Yes, Flonnect allows you to exclusively record your webcam and microphone audio for dedicated camera recordings.'
  },
  {
    question: 'Are there any effects or filters available for camera recordings?',
    answer: 'Flonnect offers basic video enhancements like brightness/contrast adjustments and virtual backgrounds. More advanced filters might be available in future updates.'
  },
  {
    question: 'How does Flonnect handle background noise during camera recording?',
    answer: 'Flonnect incorporates noise reduction technology to minimize ambient background noise, ensuring clearer audio from your microphone.'
  },
  {
    question: 'Is it possible to pause a camera recording and resume it later?',
    answer: 'Yes, you can pause and resume your camera recording sessions, which is useful for longer takes or if you need to take a break.'
  }
];

export default function CameraRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Camera Recording"
      description="Record high-quality video directly from your webcam, perfect for vlogging, personal messages, and quick video updates."
      heroIcon={Camera}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Camera Recording"
      seoKeywords="camera recording, webcam recording, video messages, vlogging, personal video, team communication"
      metaDescription="High-quality webcam recording with virtual backgrounds, noise reduction, and professional video enhancement tools. Perfect for personal and business communication."
    />
  );
}
