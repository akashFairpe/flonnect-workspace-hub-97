
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { MessageCircle, Clock, Heart, Users, Bell, CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Timestamped Comments',
    description: 'Leave comments directly at specific points in the video timeline',
    icon: Clock
  },
  {
    title: 'Emoji Reactions',
    description: 'Express quick feedback and emotions with a range of emoji reactions',
    icon: Heart
  },
  {
    title: 'Collaborative Discussions',
    description: 'Engage in threaded conversations directly within the video player',
    icon: Users
  },
  {
    title: 'Notification System',
    description: 'Get notified of new comments and reactions on your videos',
    icon: Bell
  },
  {
    title: 'Review & Approval Workflows',
    description: 'Streamline video review processes with clear feedback mechanisms',
    icon: CheckCircle
  },
  {
    title: 'Interactive Feedback',
    description: 'Foster engaging discussions directly on video content',
    icon: MessageCircle
  }
];

const benefits = [
  'Enhances collaboration by centralizing feedback directly on the video content',
  'Reduces ambiguity by linking comments to exact moments in the video',
  'Speeds up the video review and iteration process, improving productivity',
  'Fosters a more interactive and engaging experience for viewers',
  'Provides a structured way to gather actionable insights from your audience',
  'Streamlined feedback collection and management',
  'Real-time collaboration on video content',
  'Professional review and approval workflows'
];

const faqs = [
  {
    question: 'How do I add a timestamped comment to a video?',
    answer: 'Simply pause the video at the desired point and type your comment. Flonnect will automatically associate it with that specific timestamp.'
  },
  {
    question: 'Can I reply to other people\'s comments on a video?',
    answer: 'Yes, Flonnect supports threaded comments, allowing for direct replies and organized discussions within the video playback interface.'
  },
  {
    question: 'Will I be notified when someone comments on my video?',
    answer: 'Yes, Flonnect includes a notification system that alerts you to new comments and reactions on your videos, ensuring you stay updated.'
  },
  {
    question: 'Can I disable comments for certain videos?',
    answer: 'Yes, you have control over comment settings and can disable them for individual videos if desired.'
  },
  {
    question: 'Is there an option to mark comments as resolved or actions taken?',
    answer: 'Yes, Flonnect\'s collaboration tools often include features to mark comments as resolved or addressed, streamlining review workflows.'
  }
];

export default function VideoCommentsPage() {
  return (
    <FeaturePageTemplate
      title="React/Comments on Videos"
      description="Foster engaging discussions and gather feedback directly on your videos with in-line reactions and comments."
      heroIcon={MessageCircle}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Video Collaboration"
      seoKeywords="video comments, video feedback, collaborative video review, timestamped comments, video reactions, team collaboration"
      metaDescription="Interactive video commenting and reaction system. Foster collaboration with timestamped comments, threaded discussions, and emoji reactions on your videos."
    />
  );
}
