
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Video, Monitor, Users, Share2, Edit, Zap } from 'lucide-react';

const features = [
  {
    title: 'Multi-Source Recording',
    description: 'Seamlessly combine screen, webcam, and microphone audio into one cohesive video presentation',
    icon: Monitor
  },
  {
    title: 'Background Removal',
    description: 'Utilize virtual backgrounds or remove your background for a polished look',
    icon: Edit
  },
  {
    title: 'Branding Customization',
    description: 'Add your logo, intro, and outro to align with your brand identity',
    icon: Users
  },
  {
    title: 'Interactive Elements',
    description: 'Include calls-to-action or clickable links within your video presentations',
    icon: Zap
  },
  {
    title: 'Optimized for Sharing',
    description: 'Easily share your video presentations across platforms like YouTube, social media, or email',
    icon: Share2
  },
  {
    title: 'Professional Quality',
    description: 'Create high-quality video content with professional-grade recording capabilities',
    icon: Video
  }
];

const benefits = [
  'Creates highly engaging and professional video content for diverse purposes',
  'Boosts audience retention and comprehension compared to text-based communication',
  'Ideal for sales pitches, product demos, training modules, and internal announcements',
  'Provides a versatile tool to communicate complex ideas in an easily digestible format',
  'Empowers anyone to create high-quality video content without extensive technical expertise',
  'Increases conversion rates for marketing and sales content',
  'Enables scalable communication across teams and organizations',
  'Supports multiple distribution channels and platforms'
];

const faqs = [
  {
    question: 'Can I add custom branding to my video presentations?',
    answer: 'Yes, Flonnect allows you to incorporate your company logo, custom intros, and outros to maintain consistent branding.'
  },
  {
    question: 'Are virtual backgrounds supported for video presentations?',
    answer: 'Absolutely! You can choose to blur your background, use a static image, or remove it entirely for a professional presentation look.'
  },
  {
    question: 'Can I embed calls-to-action within my video presentations?',
    answer: 'Yes, Flonnect allows you to add interactive elements like clickable calls-to-action directly into your video presentations to guide viewer engagement.'
  },
  {
    question: 'What\'s the recommended video format for export?',
    answer: 'Flonnect primarily exports in widely compatible formats like MP4, ensuring your video presentations can be easily played across various devices and platforms.'
  },
  {
    question: 'How can I optimize my video presentation for faster loading on web pages?',
    answer: 'Flonnect optimizes video file sizes while maintaining quality, and our hosting ensures fast playback, but for specific web page integration, ensure your site\'s embedding practices are efficient.'
  }
];

export default function VideoPresentationPage() {
  return (
    <FeaturePageTemplate
      title="Video Presentation"
      description="Elevate your communication with professional video presentations, combining screen, camera, and audio for impactful messaging."
      heroIcon={Video}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Create Video Presentation"
      seoKeywords="video presentation, professional video, marketing video, sales video, training video, branded video content"
      metaDescription="Create professional video presentations with multi-source recording, branding customization, and interactive elements. Perfect for sales, marketing, and training."
    />
  );
}
