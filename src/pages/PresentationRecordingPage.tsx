
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Presentation, Video, FileText, Share2, Edit, Clock } from 'lucide-react';

const features = [
  {
    title: 'Integrated Slide Recording',
    description: 'Capture your presentation slides alongside your narration and webcam',
    icon: Presentation
  },
  {
    title: 'Laser Pointer & Drawing Tools',
    description: 'Use built-in annotation tools to highlight key points on your slides during recording',
    icon: Edit
  },
  {
    title: 'Teleprompter Functionality',
    description: 'Read your script while maintaining eye contact with the camera',
    icon: FileText
  },
  {
    title: 'High-Quality Audio & Video',
    description: 'Ensure your voice and visuals are crisp and clear for a professional output',
    icon: Video
  },
  {
    title: 'Easy Editing Capabilities',
    description: 'Trim, cut, and enhance your recorded presentations within the Flonnect editor',
    icon: Edit
  },
  {
    title: 'Smart Scheduling',
    description: 'Schedule recordings and set up automated presentation captures',
    icon: Clock
  }
];

const benefits = [
  'Creates dynamic and memorable presentations that go beyond static slides',
  'Allows you to deliver your message with impact, even when you can\'t be there in person',
  'Provides a reusable asset for training, marketing, and internal communication',
  'Enhances audience engagement by combining visual aids with personal delivery',
  'Saves time and resources compared to traditional video production',
  'Perfect for webinars, online courses, and sales presentations',
  'Enables asynchronous presentation delivery',
  'Maintains professional quality without complex equipment'
];

const faqs = [
  {
    question: 'Can I record a PowerPoint presentation with Flonnect?',
    answer: 'Yes, you can easily record your PowerPoint or Google Slides presentations, capturing both your slides and your narration/webcam feed.'
  },
  {
    question: 'How do the annotation tools work during a presentation recording?',
    answer: 'Our intuitive annotation tools allow you to draw, highlight, and point directly on your slides in real-time, making your explanations clearer.'
  },
  {
    question: 'Is there a way to ensure I maintain eye contact while reading a script?',
    answer: 'Yes, Flonnect includes a teleprompter feature that displays your script on-screen, allowing you to read naturally while looking at your camera.'
  },
  {
    question: 'Can I pause and resume a presentation recording if I need a break?',
    answer: 'Yes, you can pause your presentation recording at any time and resume when ready, ensuring a seamless final video.'
  },
  {
    question: 'What\'s the best way to share a recorded presentation?',
    answer: 'You can share your recorded presentations via a direct shareable link, embed them on websites, or even upload them directly to video platforms like YouTube.'
  }
];

export default function PresentationRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Presentation Recording"
      description="Transform your presentations into engaging video content with Flonnect, capturing slides, voice, and webcam seamlessly."
      heroIcon={Presentation}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Record Your Presentation"
      seoKeywords="presentation recording, slide recording, PowerPoint recording, webinar recording, online presentation, video presentation"
      metaDescription="Record engaging presentations with slides, narration, and webcam. Perfect for webinars, training, and sales presentations with professional quality."
    />
  );
}
