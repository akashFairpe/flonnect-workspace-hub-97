
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Share2, Link, Shield, Mail, Share, Code } from 'lucide-react';

const features = [
  {
    title: 'Instant Shareable Links',
    description: 'Generate unique, secure links for your videos with a single click',
    icon: Link
  },
  {
    title: 'Customizable Permissions',
    description: 'Set access levels (public, private, password-protected) for your shared videos',
    icon: Shield
  },
  {
    title: 'Email & Messaging Integration',
    description: 'Easily share links directly through email or popular messaging apps',
    icon: Mail
  },
  {
    title: 'Embed Code Generation',
    description: 'Get embed codes to seamlessly integrate videos into your websites or blogs',
    icon: Code
  },
  {
    title: 'Social Media Direct Share',
    description: 'Share videos directly to platforms like LinkedIn, Twitter, and Facebook',
    icon: Share
  },
  {
    title: 'Instant Access',
    description: 'Share recordings immediately after they\'re processed',
    icon: Share2
  }
];

const benefits = [
  'Accelerates the feedback loop and collaboration process within teams',
  'Simplifies video distribution, making it accessible to your audience instantly',
  'Saves time and effort compared to traditional file sharing methods',
  'Ensures your videos reach the right audience with flexible privacy controls',
  'Boosts efficiency by making video sharing an effortless task',
  'Streamlined collaboration workflows',
  'Professional sharing with branded landing pages',
  'Analytics and tracking for shared content'
];

const faqs = [
  {
    question: 'How quickly can I share a video after recording it?',
    answer: 'Once your video is processed and uploaded to the Flonnect cloud, a shareable link is generated almost instantly, allowing for immediate sharing.'
  },
  {
    question: 'Can I control who can view my shared videos?',
    answer: 'Yes, Flonnect offers robust privacy settings including public, unlisted (link-only), private (invite-only), and password-protected options.'
  },
  {
    question: 'What social media platforms can I share my videos to directly?',
    answer: 'You can directly share to popular platforms like LinkedIn, Twitter, Facebook, and more, or simply copy the link for other platforms.'
  },
  {
    question: 'Is there a limit to how many times a shared video can be viewed?',
    answer: 'Generally, there is no limit to views. However, storage and bandwidth limits might apply based on your Flonnect subscription plan.'
  },
  {
    question: 'Can I embed Flonnect videos on my website or blog?',
    answer: 'Yes, Flonnect provides embed codes, making it easy to seamlessly integrate your videos into any website or blog.'
  }
];

export default function OneClickSharePage() {
  return (
    <FeaturePageTemplate
      title="Share Video with One Click"
      description="Instantly share your recorded videos with colleagues, clients, or on social media with just a single click, streamlining collaboration."
      heroIcon={Share2}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start One-Click Sharing"
      seoKeywords="video sharing, one click share, instant video sharing, collaboration tools, video distribution, social media sharing"
      metaDescription="Share videos instantly with one click. Generate secure links, embed codes, and share directly to social media platforms for seamless collaboration."
    />
  );
}
