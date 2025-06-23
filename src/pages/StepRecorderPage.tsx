
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { MousePointer, Camera, FileText, Download, Settings, Users } from 'lucide-react';

const features = [
  {
    title: 'Automated Action Logging',
    description: 'Records every mouse click, keyboard input, and window change',
    icon: MousePointer
  },
  {
    title: 'Screenshot Capture',
    description: 'Automatically takes screenshots at each step, providing visual context',
    icon: Camera
  },
  {
    title: 'Detailed Text Description',
    description: 'Generates accompanying text descriptions for each action performed',
    icon: FileText
  },
  {
    title: 'Easy Export Options',
    description: 'Export the step-by-step guide as a document (e.g., PDF) or a video',
    icon: Download
  },
  {
    title: 'Customizable Output',
    description: 'Option to include or exclude specific details from the generated report',
    icon: Settings
  },
  {
    title: 'Training Documentation',
    description: 'Perfect for creating user manuals and training guides',
    icon: Users
  }
];

const benefits = [
  'Streamlines the process of documenting software bugs and technical issues for developers',
  'Simplifies the creation of training manuals and how-to guides for complex processes',
  'Ensures consistency and accuracy in troubleshooting steps and technical instructions',
  'Reduces the time spent on manual documentation and screenshotting',
  'Provides an invaluable tool for IT support and quality assurance teams',
  'Creates comprehensive documentation automatically',
  'Improves communication between teams',
  'Maintains detailed audit trails of user actions'
];

const faqs = [
  {
    question: 'What kind of details does the Step Recorder capture?',
    answer: 'It captures every mouse click, keypress, window interaction, and automatically takes screenshots, providing detailed textual descriptions for each action.'
  },
  {
    question: 'Can I edit the captured steps or descriptions after recording?',
    answer: 'Yes, you can review and edit the generated step-by-step guide, including descriptions, before finalizing and exporting.'
  },
  {
    question: 'In what formats can I export the step-by-step guide?',
    answer: 'You can typically export the guide as a PDF document, a video, or sometimes other formats like MHTML for easy sharing and viewing.'
  },
  {
    question: 'Is the Step Recorder useful for creating user manuals?',
    answer: 'Absolutely! It\'s an ideal tool for creating clear, concise, and visual user manuals or training guides for software applications.'
  },
  {
    question: 'Does the Step Recorder capture sensitive information like passwords?',
    answer: 'Flonnect is designed to be mindful of sensitive data. While it captures keypresses, you can often configure it to exclude certain inputs or blur sensitive areas in the generated screenshots. Always review before sharing.'
  }
];

export default function StepRecorderPage() {
  return (
    <FeaturePageTemplate
      title="Step Recorder"
      description="Automatically document every click, keypress, and action on your screen, creating detailed step-by-step guides for troubleshooting and training."
      heroIcon={MousePointer}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Step Recording"
      seoKeywords="step recorder, action logging, documentation tool, training guides, troubleshooting, user manual creation"
      metaDescription="Automatic step-by-step documentation tool that captures every action, click, and keypress. Perfect for creating training guides and troubleshooting documentation."
    />
  );
}
