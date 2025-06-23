
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Edit, Type, ArrowRight, Undo, Palette, Zap } from 'lucide-react';

const features = [
  {
    title: 'On-Screen Drawing Tools',
    description: 'Utilize pens, highlighters, and shapes to draw directly on your screen during recording',
    icon: Edit
  },
  {
    title: 'Text Overlays',
    description: 'Add real-time text annotations to emphasize important points or provide context',
    icon: Type
  },
  {
    title: 'Arrow & Pointer Tools',
    description: 'Guide your viewers\' attention with arrows and a spotlight effect on your cursor',
    icon: ArrowRight
  },
  {
    title: 'Undo/Redo Functionality',
    description: 'Easily correct any accidental annotations while recording',
    icon: Undo
  },
  {
    title: 'Customizable Colors & Thickness',
    description: 'Adjust annotation colors and line thickness for optimal visibility',
    icon: Palette
  },
  {
    title: 'Real-time Enhancement',
    description: 'Transform static recordings into dynamic and interactive learning experiences',
    icon: Zap
  }
];

const benefits = [
  'Makes your tutorials and demonstrations incredibly clear and easy to follow',
  'Reduces ambiguity by directly highlighting relevant information as you speak',
  'Engages your audience by actively guiding their focus during the video',
  'Eliminates the need for post-production annotation, saving significant time',
  'Transforms static recordings into dynamic and interactive learning experiences',
  'Perfect for educational content and training materials',
  'Improves viewer comprehension and retention',
  'Professional presentation quality without additional software'
];

const faqs = [
  {
    question: 'Can I use annotation tools on any screen content?',
    answer: 'Yes, the annotation tools work directly on whatever content is displayed on your screen during the recording.'
  },
  {
    question: 'Do the annotations stay on the screen permanently in the recording?',
    answer: 'Yes, any annotations you make during the recording are captured as part of the video and appear permanently in the final output.'
  },
  {
    question: 'Can I change the color and thickness of the drawing tools?',
    answer: 'Absolutely. Flonnect allows you to customize the color and thickness of your pens, highlighters, and shapes to suit your needs.'
  },
  {
    question: 'Is it possible to remove an annotation after I\'ve made it during recording?',
    answer: 'Yes, Flonnect provides an undo/redo function for annotations, allowing you to quickly correct mistakes during live recording.'
  },
  {
    question: 'Are annotation tools available for both desktop and browser extension recordings?',
    answer: 'Annotation tools are typically more robust and readily available in the desktop application for comprehensive control, though some basic tools might be present in the extension.'
  }
];

export default function AnnotationRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Annotation While Recording"
      description="Enhance your recordings with real-time annotations, drawing attention to key areas and making your message crystal clear."
      heroIcon={Edit}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Annotated Recording"
      seoKeywords="annotation recording, screen annotation, drawing tools, tutorial recording, interactive recording, real-time annotation"
      metaDescription="Record with real-time annotations and drawing tools. Perfect for tutorials, presentations, and educational content with interactive elements."
    />
  );
}
