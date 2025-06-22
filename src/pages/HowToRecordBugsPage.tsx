
import React from 'react';
import { ResourceTemplate } from '@/components/ResourceTemplate';

const steps = [
  {
    title: 'Prepare Your Recording Environment',
    description: 'Set up your screen and application before starting to record. Close unnecessary applications and ensure your screen is clean and organized.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop',
    tips: [
      'Close all unnecessary browser tabs and applications',
      'Set your screen resolution to a standard size (1920x1080)',
      'Ensure good lighting if using webcam',
      'Test your microphone audio levels'
    ]
  },
  {
    title: 'Identify and Reproduce the Bug',
    description: 'Before recording, make sure you can consistently reproduce the bug. Document the exact steps that lead to the issue.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop',
    tips: [
      'Write down the exact steps to reproduce the bug',
      'Note the expected vs actual behavior',
      'Check if the bug occurs on different browsers/devices',
      'Document any error messages that appear'
    ]
  },
  {
    title: 'Start Recording with Context',
    description: 'Begin your recording by clearly stating what you\'re about to demonstrate. Include relevant context like browser, operating system, and user account.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=400&fit=crop',
    tips: [
      'State your name and the date',
      'Mention the browser and version you\'re using',
      'Describe what feature you\'re testing',
      'Explain what should happen normally'
    ]
  },
  {
    title: 'Demonstrate the Bug Step-by-Step',
    description: 'Perform each action slowly and clearly. Narrate what you\'re doing as you do it, making it easy for viewers to follow along.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop',
    tips: [
      'Speak clearly and at a moderate pace',
      'Move your mouse slowly and deliberately',
      'Pause briefly between actions',
      'Highlight important elements on screen'
    ]
  },
  {
    title: 'Capture the Bug and Its Impact',
    description: 'When the bug occurs, clearly show the unexpected behavior. Take time to demonstrate how this impacts the user experience.',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=400&fit=crop',
    tips: [
      'Point out exactly what went wrong',
      'Show any error messages in full',
      'Demonstrate what the user can\'t do because of the bug',
      'Try the action multiple times if needed'
    ]
  },
  {
    title: 'Provide Additional Context',
    description: 'End your recording by providing any additional relevant information like console errors, network issues, or browser developer tools.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop',
    tips: [
      'Open browser developer tools to show console errors',
      'Check network tab for failed requests',
      'Show relevant browser settings',
      'Mention if this affects specific user types'
    ]
  }
];

const relatedResources = [
  { title: 'How to Upload Videos', url: '/resources/how-to-upload-videos' },
  { title: 'Best Practices for Screen Recording', url: '/resources/best-practices' },
  { title: 'Video Editing Basics', url: '/resources/video-editing' }
];

export default function HowToRecordBugsPage() {
  return (
    <ResourceTemplate
      title="How to Record Bug Reports"
      description="Learn how to create effective bug report videos that help developers understand and fix issues quickly. This comprehensive guide covers everything from preparation to sharing."
      category="Bug Reporting"
      estimatedReadTime="8-12 min"
      steps={steps}
      relatedResources={relatedResources}
      seoKeywords="bug recording, bug report video, software testing, QA documentation, screen recording for bugs, bug reporting tutorial"
      metaDescription="Complete guide on how to record effective bug report videos. Learn best practices for documenting software issues with clear, actionable video recordings."
    />
  );
}
