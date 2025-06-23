
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Volume2, Monitor, Settings, Headphones, Music, Shield } from 'lucide-react';

const features = [
  {
    title: 'Internal Audio Capture',
    description: 'Records all sounds originating from your computer\'s speakers or headphones',
    icon: Volume2
  },
  {
    title: 'High-Fidelity Audio',
    description: 'Captures system audio in clear, high-quality stereo sound',
    icon: Music
  },
  {
    title: 'Independent Volume Control',
    description: 'Adjust the system audio volume independently of your mic or master volume',
    icon: Settings
  },
  {
    title: 'Noise Reduction',
    description: 'Minimize background noise from your system audio for clearer recordings',
    icon: Shield
  },
  {
    title: 'Seamless Integration',
    description: 'Works perfectly with screen recording to capture both visuals and system sounds',
    icon: Monitor
  },
  {
    title: 'Headphone Compatibility',
    description: 'Capture audio from both speakers and headphone outputs',
    icon: Headphones
  }
];

const benefits = [
  'Ensures that every sound from your computer is faithfully captured',
  'Ideal for recording online lectures, live streams, or software audio output',
  'Provides a clean audio track without external interference or room noise',
  'Simplifies the process of creating content that relies on internal computer sounds',
  'Guarantees all audio elements of your digital experience are preserved',
  'Perfect for webinar and podcast recording',
  'Captures game audio and system notifications',
  'Professional audio quality for content creation'
];

const faqs = [
  {
    question: 'Can I record system audio without recording my screen?',
    answer: 'Yes, Flonnect allows you to record only system audio, which is useful for capturing audio from online content or applications without visual elements.'
  },
  {
    question: 'Will background notifications or alerts be captured in system audio?',
    answer: 'Yes, any sounds played by your computer, including notifications, will be captured. We recommend disabling notifications for cleaner recordings.'
  },
  {
    question: 'Can I adjust the volume of the system audio during recording?',
    answer: 'Yes, Flonnect provides independent volume controls for system audio, allowing you to fine-tune the levels before and during recording.'
  },
  {
    question: 'Is there any quality loss when recording system audio?',
    answer: 'Flonnect captures system audio in high fidelity, ensuring minimal to no quality loss. The output quality will depend on the source audio itself.'
  },
  {
    question: 'Does this feature work on both Mac and Windows?',
    answer: 'Yes, Flonnect\'s system audio recording feature is designed to work seamlessly across both Windows and macOS platforms with our desktop application.'
  }
];

export default function SystemAudioRecordingPage() {
  return (
    <FeaturePageTemplate
      title="System Audio Recording"
      description="Capture all audio playing from your computer, perfect for recording webinars, podcasts, or background music."
      heroIcon={Volume2}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start System Audio Recording"
      seoKeywords="system audio recording, computer audio capture, internal audio recording, webinar recording, podcast recording, audio capture"
      metaDescription="Professional system audio recording tool that captures all sounds from your computer. Perfect for webinars, podcasts, and online content creation."
    />
  );
}
