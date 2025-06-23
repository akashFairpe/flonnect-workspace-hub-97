
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Mic, Volume, BarChart, Settings, Headphones, Shield } from 'lucide-react';

const features = [
  {
    title: 'High-Quality Microphone Input',
    description: 'Capture your voice with superior clarity using your connected microphone',
    icon: Mic
  },
  {
    title: 'Noise Cancellation',
    description: 'Intelligent noise reduction algorithms to filter out unwanted background noise',
    icon: Shield
  },
  {
    title: 'Audio Level Monitoring',
    description: 'Real-time visual meters to ensure optimal microphone input levels',
    icon: BarChart
  },
  {
    title: 'Gain Control',
    description: 'Adjust microphone sensitivity to achieve the perfect audio balance',
    icon: Settings
  },
  {
    title: 'Standalone Audio Recording',
    description: 'Record just your voice without any screen or camera input',
    icon: Volume
  },
  {
    title: 'Professional Quality',
    description: 'Studio-grade audio recording capabilities for all content types',
    icon: Headphones
  }
];

const benefits = [
  'Delivers professional-grade voice recordings for all your content creation needs',
  'Ensures your message is heard clearly without distracting background sounds',
  'Perfect for adding voiceovers to presentations, tutorials, or marketing videos',
  'Offers flexibility to record audio independently for post-production synchronization',
  'Provides a simple and effective solution for producing podcasts or audio notes',
  'Compatible with all major microphone types',
  'Real-time audio monitoring and adjustment',
  'Crystal clear voice capture for professional content'
];

const faqs = [
  {
    question: 'Can I use any microphone with Flonnect for recording?',
    answer: 'Flonnect is compatible with most standard USB microphones, headset microphones, and built-in laptop microphones.'
  },
  {
    question: 'How does the noise cancellation feature work?',
    answer: 'Our advanced noise cancellation technology actively filters out common background noises like fan hums, keyboard clicks, or room echo, making your voice clearer.'
  },
  {
    question: 'Can I monitor my audio levels while recording?',
    answer: 'Yes, Flonnect provides real-time audio level meters, allowing you to visually monitor your input and adjust gain for optimal sound quality.'
  },
  {
    question: 'Is it possible to record only my voice without any screen activity?',
    answer: 'Yes, Flonnect offers a dedicated microphone-only recording mode, perfect for voiceovers, dictation, or audio notes.'
  },
  {
    question: 'What file format are the microphone recordings saved in?',
    answer: 'Microphone recordings are typically saved in common audio formats like MP3 or WAV, ensuring broad compatibility.'
  }
];

export default function MicRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Mic Recording"
      description="Record crisp and clear audio directly from your microphone, ideal for voiceovers, narrations, and podcasts."
      heroIcon={Mic}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Mic Recording"
      seoKeywords="microphone recording, voice recording, audio recording, voiceover recording, podcast recording, narration recording"
      metaDescription="Professional microphone recording with noise cancellation and real-time monitoring. Perfect for voiceovers, podcasts, and audio content creation."
    />
  );
}
