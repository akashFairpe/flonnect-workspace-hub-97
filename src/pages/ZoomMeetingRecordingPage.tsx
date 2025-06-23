
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Video, Upload, FileText, Share2, Users, Clock } from 'lucide-react';

const features = [
  {
    title: 'HD Zoom Recording',
    description: 'Record your Zoom meetings with high-definition video and crisp audio quality',
    icon: Video
  },
  {
    title: 'Automated Saving',
    description: 'Your Zoom recordings are automatically saved to Flonnect\'s secure cloud storage',
    icon: Upload
  },
  {
    title: 'Searchable Transcripts',
    description: 'Automatically generate searchable transcripts from your Zoom meeting audio',
    icon: FileText
  },
  {
    title: 'Easy Sharing Options',
    description: 'Share your Zoom recordings with colleagues via secure, shareable links',
    icon: Share2
  },
  {
    title: 'Attendee Tracking',
    description: 'Keep track of who attended and participated in your recorded Zoom sessions',
    icon: Users
  },
  {
    title: 'Extended Duration',
    description: 'Record meetings of any length without time restrictions',
    icon: Clock
  }
];

const benefits = [
  'Guarantees that all critical information from your Zoom calls is captured and retained',
  'Improves meeting efficiency by allowing attendees to focus on discussion rather than note-taking',
  'Provides a valuable resource for onboarding and training by archiving past discussions',
  'Ensures accessibility for those who couldn\'t attend live or need to review specific points',
  'Offers a robust solution for compliance and documentation of online interactions',
  'High-quality HD video with professional audio capture',
  'Automatic cloud backup prevents data loss',
  'Cross-platform compatibility and access'
];

const faqs = [
  {
    question: 'Do I need permission to record a Zoom meeting with Flonnect?',
    answer: 'While Flonnect enables recording, it is your responsibility to adhere to your organization\'s policies and local regulations regarding consent for recording meetings. Flonnect provides clear recording indicators.'
  },
  {
    question: 'Where are my Zoom meeting recordings saved?',
    answer: 'All your Zoom recordings are automatically uploaded and stored in your secure Flonnect cloud account, accessible from any device.'
  },
  {
    question: 'Can I integrate my Flonnect Zoom recordings with other platforms?',
    answer: 'Yes, Flonnect offers various sharing options including shareable links and integrations to allow you to use your recordings across different platforms.'
  },
  {
    question: 'Does Flonnect support recording breakout rooms in Zoom?',
    answer: 'Currently, Flonnect focuses on recording the main Zoom meeting session. For detailed capture of breakout rooms, individual participants might need to use Flonnect\'s personal screen recording feature if allowed.'
  },
  {
    question: 'How does Flonnect ensure high-quality Zoom recordings?',
    answer: 'Flonnect optimizes recording settings to capture high-definition video and crisp audio, ensuring your Zoom meetings are preserved with professional quality.'
  }
];

export default function ZoomMeetingRecordingPage() {
  return (
    <FeaturePageTemplate
      title="Zoom Meeting Recording"
      description="Capture your Zoom meetings effortlessly, ensuring every detail is preserved for later review and improved team communication."
      heroIcon={Video}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Recording Zoom Meetings"
      seoKeywords="Zoom meeting recording, Zoom recorder, video conferencing recording, meeting capture, Zoom transcription, online meeting recording"
      metaDescription="Professional Zoom meeting recording solution with automatic transcription, secure cloud storage, and easy sharing. Never miss important meeting details again."
    />
  );
}
