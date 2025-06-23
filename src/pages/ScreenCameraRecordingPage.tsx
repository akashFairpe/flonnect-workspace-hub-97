
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Video, Camera, Monitor, Users, Settings, Edit } from 'lucide-react';

const features = [
  {
    title: 'Picture-in-Picture Mode',
    description: 'Overlay your webcam video onto your screen recording with customizable size and position',
    icon: Camera
  },
  {
    title: 'Simultaneous Capture',
    description: 'Record both your screen and camera feed at the same time, perfectly synchronized',
    icon: Video
  },
  {
    title: 'Flexible Camera Placement',
    description: 'Drag and drop your camera feed to any corner of the screen during recording',
    icon: Monitor
  },
  {
    title: 'Separate Audio Tracks',
    description: 'Option to record screen audio and microphone audio on separate tracks for post-editing',
    icon: Settings
  },
  {
    title: 'High-Quality Output',
    description: 'Produce professional videos with crisp screen visuals and clear webcam footage',
    icon: Edit
  },
  {
    title: 'Dynamic Layouts',
    description: 'Create engaging content with multiple layout options for screen and camera combination',
    icon: Users
  }
];

const benefits = [
  'Adds a personal touch to your screen recordings, building rapport with your audience',
  'Ideal for creating engaging tutorials, product walkthroughs, and educational videos',
  'Enhances clarity by allowing viewers to see your reactions and expressions',
  'Simplifies the production process by capturing all necessary elements in one go',
  'Empowers you to create dynamic content that truly connects with your viewers',
  'Perfect for remote team communication and training',
  'Increases viewer engagement and retention',
  'Professional presentation quality without complex setup'
];

const faqs = [
  {
    question: 'How do I position my webcam feed on the screen?',
    answer: 'You can easily drag and drop your webcam feed to any corner of the screen and resize it to your preference during recording.'
  },
  {
    question: 'Can I record the screen and camera separately and then combine them?',
    answer: 'While Flonnect allows simultaneous capture, you can also record screen and camera separately using their dedicated features and then combine them in external video editing software if needed.'
  },
  {
    question: 'Does recording screen and camera simultaneously affect performance?',
    answer: 'Flonnect is optimized for performance, but recording both simultaneously requires more system resources. Ensure your device meets the recommended specifications for the best experience.'
  },
  {
    question: 'Can I blur or change my webcam background during recording?',
    answer: 'Yes, Flonnect offers virtual background options, including blurring or replacing your background, for your webcam feed.'
  },
  {
    question: 'Are there any specific camera requirements for this feature?',
    answer: 'Flonnect is compatible with most standard built-in and external webcams. A 720p or 1080p webcam is recommended for optimal video quality.'
  }
];

export default function ScreenCameraRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Screen + Camera Recording"
      description="Record your screen along with your webcam feed simultaneously, perfect for personalized demonstrations and engaging presentations."
      heroIcon={Video}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Recording Screen + Camera"
      seoKeywords="screen camera recording, picture in picture recording, webcam screen capture, tutorial recording, presentation recording, video tutorial"
      metaDescription="Record screen and webcam simultaneously with picture-in-picture mode. Perfect for creating engaging tutorials and presentations with personal touch."
    />
  );
}
