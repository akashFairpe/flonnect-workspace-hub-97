
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Youtube, Upload, Settings, Image, List, Zap } from 'lucide-react';

const features = [
  {
    title: 'Direct YouTube Integration',
    description: 'Seamlessly connect your Flonnect account to your YouTube channel',
    icon: Youtube
  },
  {
    title: 'Automated Upload Process',
    description: 'Upload videos with one click directly from your Flonnect dashboard',
    icon: Upload
  },
  {
    title: 'Title & Description Presets',
    description: 'Pre-fill video titles, descriptions, and tags for quicker publishing',
    icon: Settings
  },
  {
    title: 'Privacy Settings Control',
    description: 'Set video privacy (public, unlisted, private) directly during upload',
    icon: Settings
  },
  {
    title: 'Thumbnails & Playlists',
    description: 'Option to select custom thumbnails and add videos to existing playlists',
    icon: Image
  },
  {
    title: 'Streamlined Publishing',
    description: 'One-click publishing from recording to YouTube',
    icon: Zap
  }
];

const benefits = [
  'Streamlines your content publishing workflow, saving time and effort',
  'Extends your reach by easily distributing your videos to the world\'s largest video platform',
  'Ensures consistent branding and messaging across your video content',
  'Simplifies content management by centralizing your recording and publishing tools',
  'Empowers creators and businesses to share their stories with a global audience',
  'Automated metadata and SEO optimization',
  'Direct publishing without external tools',
  'Seamless content distribution pipeline'
];

const faqs = [
  {
    question: 'Do I need a YouTube account to use this feature?',
    answer: 'Yes, you will need to link an active YouTube account to your Flonnect account to use the direct upload feature.'
  },
  {
    question: 'Can I set video privacy (Public, Unlisted, Private) directly from Flonnect?',
    answer: 'Yes, you have full control over YouTube\'s privacy settings directly within the Flonnect upload interface.'
  },
  {
    question: 'Does Flonnect support uploading videos to specific YouTube playlists?',
    answer: 'Yes, you can select existing YouTube playlists to which your video will be added during the upload process.'
  },
  {
    question: 'What happens if my internet connection drops during upload?',
    answer: 'Flonnect\'s robust upload system is designed to handle interruptions. In most cases, it will resume the upload once your connection is restored.'
  },
  {
    question: 'Can I add custom thumbnails to my YouTube videos through Flonnect?',
    answer: 'Yes, Flonnect allows you to select and assign custom thumbnails to your videos before pushing them to YouTube.'
  }
];

export default function YouTubeUploadPage() {
  return (
    <FeaturePageTemplate
      title="Upload Video to YouTube"
      description="Directly upload your recorded videos to YouTube from Flonnect, effortlessly publishing your content to a wider audience."
      heroIcon={Youtube}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start YouTube Upload"
      seoKeywords="YouTube upload, video publishing, content distribution, YouTube integration, video sharing, content creation"
      metaDescription="Upload videos directly to YouTube from Flonnect. Streamlined publishing with custom thumbnails, metadata, and privacy controls for content creators."
    />
  );
}
