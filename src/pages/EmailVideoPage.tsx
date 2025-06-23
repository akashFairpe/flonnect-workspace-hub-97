
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Mail, Image, BarChart, Monitor, Smartphone, Link } from 'lucide-react';

const features = [
  {
    title: 'Direct Email Integration',
    description: 'Generate email-ready video links or embed codes from your Flonnect library',
    icon: Mail
  },
  {
    title: 'Animated GIF Previews',
    description: 'Automatically create short animated GIF previews of your video for email',
    icon: Image
  },
  {
    title: 'Tracked Views',
    description: 'Monitor how many times your video emails are opened and played',
    icon: BarChart
  },
  {
    title: 'Customizable Landing Pages',
    description: 'Videos are hosted on clean, branded landing pages for optimal viewing',
    icon: Monitor
  },
  {
    title: 'Optimized for All Devices',
    description: 'Ensure your video emails look great on desktops, tablets, and mobile phones',
    icon: Smartphone
  },
  {
    title: 'Professional Links',
    description: 'Generate branded, professional video links for email campaigns',
    icon: Link
  }
];

const benefits = [
  'Makes your email communications more engaging and impactful',
  'Increases click-through rates and recipient interaction compared to text-only emails',
  'Ideal for personalized sales outreach, customer support, and internal announcements',
  'Provides valuable analytics on video engagement within your email campaigns',
  'Offers a professional way to share video content without large file attachments',
  'Enhanced email marketing effectiveness',
  'Professional branded video experiences',
  'Detailed engagement analytics and tracking'
];

const faqs = [
  {
    question: 'Does "attaching video" mean the full video file is sent via email?',
    answer: 'No, Flonnect optimizes this by providing a shareable link or an animated GIF preview in the email that links to the hosted video, avoiding large file attachments.'
  },
  {
    question: 'Are the video landing pages customizable with my branding?',
    answer: 'Yes, the landing pages where your videos are hosted can be customized with your logo and branding for a professional look.'
  },
  {
    question: 'Can I see if recipients have watched the video sent via email?',
    answer: 'Yes, Flonnect provides analytics that allow you to track video views and engagement directly from your email campaigns.'
  },
  {
    question: 'What happens if the recipient\'s email client doesn\'t support video embeds?',
    answer: 'Flonnect ensures compatibility. If direct embedding isn\'t supported, a compelling GIF preview or a clear link will still allow the recipient to easily click and watch the video in their browser.'
  },
  {
    question: 'Is this feature compatible with all popular email clients?',
    answer: 'Yes, Flonnect\'s video-in-email functionality is designed to be highly compatible with all major email clients like Outlook, Gmail, Apple Mail, and others.'
  }
];

export default function EmailVideoPage() {
  return (
    <FeaturePageTemplate
      title="Attach Video in Email"
      description="Easily embed or attach your Flonnect videos directly within your email communications for richer messaging."
      heroIcon={Mail}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Email Video Integration"
      seoKeywords="video email, email video attachment, video in email, email marketing, video communication, personalized video email"
      metaDescription="Embed videos in email communications with animated previews and tracking. Professional video email integration for marketing, sales, and support teams."
    />
  );
}
