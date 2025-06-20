
import React from 'react';
import { TutorialTemplate } from '@/components/TutorialTemplate';

const steps = [
  {
    title: 'Complete Your Recording',
    description: 'Finish your screen recording using Flonnect and save it to your preferred location. Ensure your video is properly edited and ready for sharing.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop'
  },
  {
    title: 'Choose Your Sharing Method',
    description: 'Flonnect offers multiple sharing options: direct upload to cloud platforms, email sharing, social media posting, or generating shareable links.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
  },
  {
    title: 'Cloud Platform Integration',
    description: 'Upload directly to Google Drive, Dropbox, OneDrive, or YouTube. Flonnect integrates seamlessly with popular cloud storage and video platforms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
  },
  {
    title: 'Generate Shareable Links',
    description: 'Create secure, time-limited links that you can share via email, messaging apps, or embed in websites. Set viewing permissions and access controls.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
  },
  {
    title: 'Email Integration',
    description: 'Send recordings directly via email with automatic compression for large files. Add personal messages and set delivery notifications.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=400&fit=crop'
  },
  {
    title: 'Social Media Sharing',
    description: 'Share directly to social platforms like LinkedIn, Twitter, or Facebook. Flonnect optimizes video format and size for each platform automatically.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop'
  },
  {
    title: 'Team Collaboration',
    description: 'Share with team members through integrated collaboration tools. Add comments, feedback requests, and version control for team projects.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    title: 'Privacy and Security',
    description: 'Set privacy levels, password protection, and expiration dates for your shared content. Monitor who has accessed your recordings and when.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop'
  }
];

const relatedTutorials = [
  { title: 'How to Record Your Screen', url: '/tutorials/how-to-record' },
  { title: 'Managing Your Video Library', url: '/tutorials/video-library' },
  { title: 'Privacy and Security Settings', url: '/tutorials/privacy-settings' }
];

export default function HowToSharePage() {
  return (
    <TutorialTemplate
      title="How to Share Your Recordings"
      description="Discover all the ways to share your screen recordings with Flonnect. From cloud uploads to direct links, learn the best sharing methods for your needs."
      estimatedTime="8-12 min"
      difficulty="Beginner"
      category="Sharing & Collaboration"
      steps={steps}
      relatedTutorials={relatedTutorials}
      seoKeywords="share screen recording, upload video, cloud sharing, video collaboration, Flonnect sharing, send screen recording, video sharing tutorial"
      metaDescription="Learn how to share your screen recordings using Flonnect. Complete guide covering cloud uploads, direct sharing, team collaboration, and privacy settings."
    />
  );
}
