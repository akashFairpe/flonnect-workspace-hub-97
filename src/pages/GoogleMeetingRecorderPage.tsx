
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Video, Upload, FileText, Share2, Users, Shield } from 'lucide-react';

const features = [
  {
    title: 'HD Google Meet Recording',
    description: 'Capture clear audio and video of your entire Google Meet session in high definition',
    icon: Video
  },
  {
    title: 'Automatic Cloud Save',
    description: 'Recordings are automatically saved to your secure cloud storage for easy access from anywhere',
    icon: Upload
  },
  {
    title: 'Integrated Transcription',
    description: 'Get accurate, searchable transcripts of your Google Meet discussions, saving time on note-taking',
    icon: FileText
  },
  {
    title: 'Share with Ease',
    description: 'Instantly share your recorded Google Meet with team members or stakeholders via a shareable link',
    icon: Share2
  },
  {
    title: 'Participant Highlighting',
    description: 'Focus on key speakers and important moments within your Google Meet recordings',
    icon: Users
  },
  {
    title: 'Secure Storage',
    description: 'Robust encryption and privacy controls ensure your recordings are safe',
    icon: Shield
  }
];

const benefits = [
  'Seamless integration with Google Meet for hassle-free recording',
  'Ensures no crucial information is missed from your virtual meetings',
  'Enhances team collaboration through easy sharing and review of discussions',
  'Saves significant time on manual note-taking with integrated transcription',
  'Reliable cloud storage guarantees your recordings are always safe and accessible',
  'Compliance features with clear recording indicators',
  'High-quality HD video and crystal-clear audio',
  'Searchable transcripts for quick information retrieval'
];

const faqs = [
  {
    question: 'How do I record a Google Meet using Flonnect?',
    answer: 'Simply join your Google Meet, and activate the Flonnect extension or desktop app. You\'ll see a record button to start capturing your meeting with one click.'
  },
  {
    question: 'Are Google Meet recordings stored securely?',
    answer: 'Yes, all recordings are securely stored in your Flonnect cloud account with robust encryption and privacy controls.'
  },
  {
    question: 'Can I share my Google Meet recordings with external users?',
    answer: 'Absolutely! You can generate shareable links with customizable access permissions, allowing you to share with anyone you choose.'
  },
  {
    question: 'Does Flonnect notify participants that the Google Meet is being recorded?',
    answer: 'Yes, Flonnect ensures compliance by providing clear visual indicators and notifications to all participants when recording is active.'
  },
  {
    question: 'Can I get a transcript of my Google Meet recording?',
    answer: 'Yes, Flonnect automatically generates accurate, searchable transcripts for your Google Meet recordings, making it easy to review discussions.'
  }
];

export default function GoogleMeetingRecorderPage() {
  return (
    <FeaturePageTemplate
      title="Google Meeting Recorder"
      description="Effortlessly capture your Google Meet sessions with high-quality recordings for review and collaboration. Never miss important discussions again."
      heroIcon={Video}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Recording Google Meets"
      seoKeywords="Google Meet recording, Google Meet recorder, meeting recording, video conferencing, online meeting capture, Google Meet transcription"
      metaDescription="Professional Google Meet recording tool with automatic transcription, secure cloud storage, and instant sharing. Capture every important moment from your virtual meetings."
    />
  );
}
